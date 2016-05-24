module Parser where

import Prelude
import Global
import Control.Apply ((*>), (<*))
import Control.Lazy (fix)
import Control.Alt ((<|>))
import Control.Monad.Trans (lift)
import Control.Monad.State

import Lexer (lexer, TOKEN(..), PosToken(..), joinListWith)
import Grammar
-- import Indent (token, match, when)

import Text.Parsing.Parser
import Text.Parsing.Parser.Combinators
import Text.Parsing.Parser.Expr
import Text.Parsing.Parser.Pos

import Data.List
import Data.Either
import Data.Tuple
import Data.Int
import Data.Maybe
import Data.Foldable (foldr)

type GrammarParser a = ParserT (List PosToken) (State Module) a
type SmOperatorTable = OperatorTable (State Module) (List PosToken) Expression

-- Module operation
pushms :: ModuleStatement -> GrammarParser ModuleStatement
pushms st@(MBind b) = do
  lift $ modify $ \(Module {exports:es, imports:is, optable:ops, bindings:bs}) ->
    Module {exports:es, imports:is, optable:ops, bindings: bs ++ Cons b Nil}
  return st
pushms st@(MImport m ns) = do
  lift $ modify $ \(Module {exports:es, imports:is, optable:ops, bindings:bs}) ->
    Module {exports:es, imports:Cons (Tuple (Tuple m Nothing) ns) is, optable:ops, bindings:bs}
  return st
pushms st@(MImportAs m m') = do
  lift $ modify $ \(Module {exports:es, imports:is, optable:ops, bindings:bs}) ->
    Module {exports:es, imports:Cons (Tuple (Tuple m (Just m')) Nil) is, optable:ops, bindings:bs}
  return st
pushms st@(MExport ns) = do
  lift $ modify $ \(Module {exports:es, imports:is, optable:ops, bindings:bs}) ->
    Module {exports:es++ns, imports:is, optable:ops, bindings:bs}
  return st
pushms st@(MOpDefine t p op n) = do
  lift $ modify $ \(Module {exports:es, imports:is, optable:ops, bindings:bs}) ->
    Module {exports:es, imports:is, optable:Cons (Tuple (Tuple t p) (Tuple op n)) ops, bindings:bs}
  return st

getOpTable :: GrammarParser SmOperatorTable
getOpTable = do
  ops <- lift $ gets $ \(Module {exports:es, imports:is, optable:ops, bindings:bs}) -> ops
  let sorted = flip sortBy ops $ \(Tuple (Tuple _ p) (_)) (Tuple (Tuple _ p') _) -> compare p' p
  let grouped = flip groupBy sorted $ \(Tuple (Tuple _ p) (_)) (Tuple (Tuple _ p') _) -> p == p'
  let maped = flip map grouped $ map
              $ \(Tuple (Tuple t _) (Tuple op n)) -> case t of
                OpInfixR -> Infix (binary op n) AssocRight
                OpInfixL -> Infix (binary op n) AssocLeft
                OpPrefix -> Prefix (unify op n)
                OpPostFix -> Postfix (unify op n)
  return <<< toUnfoldable <<< map toUnfoldable $ maped
    where binary op n = match (OPERATOR op) *> return (\l r -> EApp (EApp (EID n) l) r)
          unify op n = match (OPERATOR op) *> return (EApp (EID n))

token :: GrammarParser TOKEN
token = ParserT $ \(PState {input:toks, position:pos}) ->
  return $ case toks of
    Cons (PosToken {pos:pos', tok:tok}) xs -> { consumed: true, input: xs, result: Right tok, position: pos'}
    _ -> parseFailed toks pos "expected token, met EOF"

match :: TOKEN -> GrammarParser TOKEN
match tok = when $ (==) tok

when :: (TOKEN -> Boolean) -> GrammarParser TOKEN
when f = try $ token >>= \tok' ->
  if f tok' then return tok' else fail "Can not match token"

-- Some Utils Functions

getCont :: TOKEN -> String
getCont tok = case tok of
  ID s -> s
  KEYWORD s -> s
  OPERATOR s -> s
  SYMBOL s -> s
  LITERAL s -> s
  INDENT i -> show i
  COMMENT s -> s

isID :: TOKEN -> Boolean
isID tok = case tok of
  ID _ -> true
  _ -> false

isOp :: TOKEN -> Boolean
isOp tok = case tok of
  OPERATOR _ -> true
  _ -> false

isLit :: TOKEN -> Boolean
isLit tok = case tok of
  LITERAL _ -> true
  _ -> false

mkLam :: List String -> Expression -> Expression
mkLam (Cons arg args) body = ELam arg $ mkLam args body
mkLam Nil body = body

-- parttens
  -- eq ExprBlock ExprBlock = true
  -- eq StatBlock StatBlock = true
  -- eq ParenInner ParenInner = true
  -- eq SquareInner SquareInner = true
  -- eq BraceInner BraceInner = true

paren :: forall a. GrammarParser a -> GrammarParser a
paren = between (match $ SYMBOL "(") (match $ SYMBOL ")")

square :: forall a. GrammarParser a -> GrammarParser a
square = between (match $ SYMBOL "[") (match $ SYMBOL "]")

brace :: forall a. GrammarParser a -> GrammarParser a
brace = between (match $ SYMBOL "{") (match $ SYMBOL "]")

block :: forall a. GrammarParser a -> GrammarParser (List a)
block p = between (match $ SYMBOL "{{") (match $ SYMBOL "}}")
          $ sepBy p (match $ SYMBOL ";;")

binding :: GrammarParser (Tuple String Expression)
binding = fix \binding' -> do
  n <- getCont <$> when isID
  as <- many $ getCont <$> when isID
  match $ SYMBOL "="
  -- e <- mkLam as <$> expr
  e <- mkLam as <$> (estat expr <|> expr)
  e' <- option e $ do
    match $ KEYWORD "where"
    body <- block binding'
    return $ EWhere e body
  return $ Tuple n e'

-- seqByComma ::forall a. GrammarParser a -> GrammarParser (List a)
-- seqByComma p = sepBy p (match $ SYMBOL ",")

-- seqByDot :: forall a. GrammarParser a -> GrammarParser (List a)
-- seqByDot p = sepBy p (match $ SYMBOL ",")

-- parse binding --


-- dostat :: GrammarParser DoStatement
-- dostat = choice []

  -- option (return $ Tuple n (mkLam as e)) $ do
  --     -- match $ KEYWORD "where"
  --     -- body <- block binding'
  --     return $ Tuple n (mkLam as e)

  -- (do
  --     -- match $ KEYWORD "where"
  --     -- body <- block binding'
  --     return $ Tuple n (mkLam as e)
  --     ) <|> return $ Tuple n (mkLam as e)

    -- where where_ binding' = do
    --         block binding'

-- data Expression
--   = EID String
--   | ELit String
--   | EStat (List Statement)
--   | EArr (List Expression)
--   | EObj (List (Tuple String Expression))
--   | ELam String Expression
--   | EApp Expression Expression
--   | ELetIn (Tuple String Expression) Expression
--   | EWhere Expression (List (Tuple String Expression))
--   | EIfElse Expression Expression Expression
--   | ECaseOf Expression (List (Tuple Expression Expression))
--   | EWithDo String (List DoStatement)

-- expr :: GrammarParser Expression
-- expr = match (ID "expr") *> return (EID "expr")

expr :: GrammarParser Expression
expr = do
  optable <- getOpTable
  fix \expr' -> buildExprParser (app ++ optable) (atom expr')
  where app = [ [Infix (return EApp) AssocLeft] ]
        atom expr' = choice $ map (flip ($) expr')
               [eid , elit, earr, eobj, elam, eletin
               , eifelse, ecaseof, ewithdo, paren]

eid :: GrammarParser Expression -> GrammarParser Expression
eid expr' = EID <<< getCont <$> when isID

elit :: GrammarParser Expression -> GrammarParser Expression
elit expr' = ELit <<< getCont <$> when isLit

estat :: GrammarParser Expression -> GrammarParser Expression
estat expr' = EStat <$> block stat

earr :: GrammarParser Expression -> GrammarParser Expression
earr expr' = EArr <$> square (sepBy expr' (match $ SYMBOL ","))

eobj :: GrammarParser Expression -> GrammarParser Expression
eobj expr' = EObj <$> square (sepBy kvbody (match $ SYMBOL ","))
  where kvbody = do
          key <- getCont <$> when isID
          match $ SYMBOL ":"
          value <- expr'
          return $ Tuple key value

elam :: GrammarParser Expression -> GrammarParser Expression
elam expr' = do
  match $ SYMBOL "\\"
  as <- some $ getCont <$> when isID
  match $ SYMBOL "->"
  e <- expr'
  return $ mkLam as e

eletin :: GrammarParser Expression -> GrammarParser Expression
eletin expr' = do
  match $ KEYWORD "let"
  b <- binding
  -- bn <- getCont <$> when isID
  -- bas <- many $ getCont <$> when isID
  -- match $ SYMBOL "="
  -- be <- expr'
  match $ KEYWORD "in"
  e <- expr'
  return $ ELetIn b e

eifelse :: GrammarParser Expression -> GrammarParser Expression
eifelse expr' = do
  match $ KEYWORD "if"
  con <- expr'
  match $ KEYWORD "then"
  l <- expr'
  match $ KEYWORD "else"
  r <- expr'
  return $ EIfElse con l r

ecaseof :: GrammarParser Expression -> GrammarParser Expression
ecaseof expr' = do
  match $ KEYWORD "case"
  con <- expr'
  match $ KEYWORD "of"
  body <- block $ do
    l <- expr'
    match $ SYMBOL "->"
    b <- expr'
    return $ Tuple l b
  return $ ECaseOf con body

ewithdo :: GrammarParser Expression -> GrammarParser Expression
ewithdo expr' = do
  match $ KEYWORD "with"
  b <- getCont <$> when isID
  match $ KEYWORD "do"
  body <- block $ dostat expr'
  return $ EWithDo b body
  -- return $ EWithDo b Nil
  -- match $ ID "EXPR"

-- data DoStatement
--   = DLetStat (Tuple String Expression)
--   | DAssignStat (Tuple String Expression)
--   | DCall Expression

dostat :: GrammarParser Expression -> GrammarParser DoStatement
dostat expr' = choice $ (map (try <<< flip ($) expr')) [dslet, dsass, dscall]

dslet :: GrammarParser Expression -> GrammarParser DoStatement
dslet expr' = do
  match $ KEYWORD "let"
  b <- binding
  -- n <- getCont <$> when isID
  -- as <- many $ getCont <$> when isID
  -- match $ SYMBOL "="
  -- e <- expr
  return $ DoStatLet b

dsass :: GrammarParser Expression -> GrammarParser DoStatement
dsass expr' = do
  n <- getCont <$> when isID
  match $ SYMBOL "<-"
  e <- expr
  return $ DoStatAssign (Tuple n e)

dscall :: GrammarParser Expression -> GrammarParser DoStatement
dscall expr' = DoStatCall <$> expr'

-- data Statement
--   = StatLet (Tuple String Expression)
--   | StatCall Expression
--   | StatReturn Expression
--   | StatIfElse Expression (List Statement) (List Statement)
--   | StatWhile Expression (List Statement)
--   | StatBreak
--   | StatContinue
--   | StatSwitch Expression (List (Tuple Expression (List Statement)))
--   | StatPass

stat :: GrammarParser Statement
stat = fix \stat' -> choice <<< map (flip ($) stat')
                     $ [stlet, streturn, stifelse, stwhile, stswitch, stpass, stass, stcall]
                     -- $ [stlet, stcall, streturn, stifelse, stwhile, stswitch, stpass]
                     -- $ [stifelse, stpass]

stlet :: GrammarParser Statement -> GrammarParser Statement
stlet stat' = do
  match $ KEYWORD "let"
  b <- binding
  -- n <- getCont <$> when isID
  -- as <- many $ getCont <$> when isID
  -- match $ SYMBOL "="
  -- e <- expr
  return $ StatLet b

stass :: GrammarParser Statement -> GrammarParser Statement
stass stat' = try $ StatAss <$> binding

stcall :: GrammarParser Statement -> GrammarParser Statement
stcall stat' = StatCall <$> expr

streturn :: GrammarParser Statement -> GrammarParser Statement
streturn stat' = do
  match (KEYWORD "return")
  StatReturn <$> expr

stifelse :: GrammarParser Statement -> GrammarParser Statement
stifelse stat' = do
  match (KEYWORD "if")
  con <- expr
  ib <- block stat'
  eb <- option Nil $ do
    match $ SYMBOL ";;"
    match $ KEYWORD "else"
    block stat'
  return $ StatIfElse con ib eb

stwhile :: GrammarParser Statement -> GrammarParser Statement
stwhile stat' = do
  match (KEYWORD "while")
  StatWhile <$> expr <*> block stat'

stbreak :: GrammarParser Statement -> GrammarParser Statement
stbreak stat' = match (KEYWORD "break") *> return StatBreak

stcontinue :: GrammarParser Statement -> GrammarParser Statement
stcontinue stat' = match (KEYWORD "continue") *> return StatContinue

stswitch :: GrammarParser Statement -> GrammarParser Statement
stswitch stat' = do
  match (KEYWORD "switch")
  con <- expr
  cas <- block $ do
    Tuple <$> expr <*> block stat'
  return $ StatSwitch con cas

stpass :: GrammarParser Statement -> GrammarParser Statement
stpass stat' = match (KEYWORD "pass") *> return StatPass

-- data ModuleStatement
--   = MBind (Tuple String Expression)
--   | MImport String (Array String)
--   | MImportAs String String
--   | MExport (Array String)
--   | MOpDefin OpDefine

mstat :: GrammarParser ModuleStatement
mstat = choice (map try [mbind, mimp, mimpas, mexp, mopdef]) <|> return MPass

mbind :: GrammarParser ModuleStatement
mbind = do
  b <- binding
  -- n <- getCont <$> when isID
  -- as <- many $ getCont <$> when isID
  -- match $ SYMBOL "="
  -- e <- expr
  pushms $ MBind b

mimp :: GrammarParser ModuleStatement
mimp = do
  match $ KEYWORD "import"
  ids <- sepBy1 (getCont <$> when isID) (match $ SYMBOL ".")
  names <- option Nil
           $ paren (sepBy (getCont <$> when isID) (match $ SYMBOL ","))
  pushms $ MImport (joinListWith "/" ids) names

mimpas :: GrammarParser ModuleStatement
mimpas = do
  match $ KEYWORD "import"
  ids <- sepBy1 (getCont <$> when isID) (match $ SYMBOL ".")
  match $ KEYWORD "as"
  as <- getCont <$> when isID
  pushms $ MImportAs (joinListWith "/" ids) as

mexp :: GrammarParser ModuleStatement
mexp = do
  match $ KEYWORD "export"
  names <- (match (OPERATOR "*") *> return Nil)
           <|> paren (sepBy1 (getCont <$> when isID) (match $ SYMBOL ","))
  pushms $ MExport names

-- data OpDefine
--   = OpInfixR Int String String
--   | OpInfixL Int String String
--   | OpPrefix Int String String
--   | OpPostFix Int String String

mopdef :: GrammarParser ModuleStatement
mopdef = do
  optype <- getCont <$> (choice $ map (match <<< KEYWORD)
                     ["infixl", "infixr", "subfix", "posix"])
  p <- fromMaybe 5 <<< fromNumber <<< readInt 10 <<< getCont <$> when isLit
  op <- getCont <$> when isOp
  n <- getCont <$> when isID
  let t = case optype of
        "infixl" -> OpInfixL
        "infixr" -> OpInfixR
        "prefix" -> OpPrefix
        "postfix" -> OpPostFix
  pushms $ MOpDefine t p op n

-- Interface --

parse :: List PosToken -> Either ParseError Module
parse toks =
  handle <<< flip runState emptyModule $ runParserT (PState {input: toks, position: initialPos}) module'
    where module' = sepEndBy mstat (match $ SYMBOL ";;")
          emptyModule = Module {exports:Nil, imports:Nil, optable:Nil, bindings:Nil}
          handle (Tuple (Right _) s) = Right s
          handle (Tuple (Left e) s) = Left e

-- parser _ = Right emptyModule
  -- match $ SYMBOL "="
-- Interface --

-- modulep :: GrammarParser Module
-- modulep = do
--   mstats <- sepBy (choice $ map try [mimp, mimpas, mexp, mopdef]) (match $ SYMBOL ";;")
--   mbindings <- sepBy (choice $ mbind)

-- parser :: GrammarParser M
-- parser = do
--   sepBy () ()

--   | MOpDefin OpDefine

-- mstat :: GrammarParser ModuleStatement
-- mstat = choice [mbind, mimp, minpas, mexp, mopdef]

-- mimp :: GrammarParser ModuleStatement
-- mimp = do
--   match $ KEYWORD "import"
--   ids <- <$> sepBy1 (getCont <$> when isID) (SYMBOL ".")
--   try (do
--           ) <|> return (MImport (joinWith "/" ids) )

-- stpass :: GrammarParser Statement
-- stpass = match (KEYWORD "pass") *> return StatPass

  -- cas <- block $ do
    -- lit <- getCont <$> when isLit
    -- block <- 
-- stifelse :: GrammarParser Statement
-- stifelse = do
--   match $ KEYWORD "if"
--   e <- expr

-- ewhere :: GrammarParser Expression -> GrammarParser Expression
-- ewhere expr' = try do
--   e <- expr'
--   do
--     match $ KEYWORD "where"