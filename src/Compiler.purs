
module Compiler where

import Prelude
import Grammar

import Data.String
import Data.List
import Data.Tuple

class IsAST a where
  compile :: a -> String

paren :: String -> String
paren s = "(" ++ s ++")"

square :: String -> String
square s = "[" ++ s ++"]"

brace :: String -> String
brace s = "{" ++ s ++"}"

closure :: String -> String
closure s = "((()=>(" ++ s ++ "))())"

closure' :: String -> String
closure' s = "((()=>{" ++ s ++ "})())"

lam :: String -> String -> String
lam a e = "((" ++ a ++ ")=>(" ++ e ++ "))"

const :: String -> String -> String
const n e = "const " ++ n ++ "=" ++ e

let' :: String -> String -> String
let' n e = "let " ++ n ++ "=" ++ e

joinListWith :: String -> List String -> String
joinListWith sep = joinWith sep <<< toUnfoldable

makeArg :: String -> String
makeArg a = case a of
  "_" -> "$_IGNORE_"
  a' -> "$$" ++ a'

makeId :: String -> String
makeId a = case a of
  "_" -> "null"
  a' -> "$$" ++ a'

makeNative :: String -> String
makeNative a = "$_" ++ a ++ "_"

instance isASTExpression :: IsAST Expression where
  compile (EID s) = paren $ makeId s
  compile (ELit s) = paren s
  compile (EStat ss) = closure' $ joinListWith ";" (map compile ss)
  compile (EArr es) = square $ joinListWith "," (map compile es)
  compile (EObj kvs) = brace $ joinListWith "," (map (\(Tuple s e) -> makeId s ++ ":" ++ compile e) kvs)
  compile (ELam a e) = lam (makeArg a) (compile e)
  compile (EApp e e') = paren $ compile e ++ compile e'
  compile (ELetIn (Tuple n e) e') = closure' $ const (makeId n) (compile e) ++ "; return " ++ compile e'

  compile (EWhere e bs) = closure' $  joinListWith ";" bs' ++ "; return " ++ compile e
    where bs' = flip map bs \(Tuple n' e') -> const (makeId n') (compile e')

  compile (EIfElse con the alt) = paren $ compile con ++ "?" ++ compile the ++ ":" ++ compile alt

  compile (ECaseOf con cas) = closure' $ "switch " ++ paren (compile con) ++ brace (joinListWith ";" cas')
    where cas' = flip map cas \(Tuple l e) -> "case " ++ compile l ++ " : {return " ++ compile e ++ "}"

  compile (EWithDo bn dss) = lam (makeNative "next") (bind' dss)
    where bind' (Cons ds Nil) = case ds of
            (DoStatCall e) -> compile e ++ paren (makeNative "next")
          bind' (Cons ds dss) = case ds of
            DoStatCall e -> paren $ makeId bn ++ compile e ++ lam (makeArg "_") (bind' dss)
            DoStatAssign (Tuple n e) -> paren $ makeId bn ++ compile e ++ lam (makeArg n) (bind' dss)
            DoStatLet (Tuple n e) -> paren $ lam (makeArg n) (bind' dss) ++ (compile e)

  -- compile (EWithDo bn dss) = bind' dss
  --   where bind' 

  -- compile (EWithDo bn dss) = paren $ bind' dss
  --   where bind' (Cons ds Nil) = case ds of
  --           (DoStatCall e) -> compile e
  --         bind' (Cons ds dss) = case ds of
  --           DoStatLet (Tuple n e) -> paren $ lam (makeArg n) (bind' dss) ++ paren (compile e)
  --           DoStatAssign (Tuple n e) -> paren $ makeId bn ++ paren (compile e) ++ lam (makeArg n) (bind' dss)
  --           DoStatCall e -> paren $ makeId bn ++ paren (compile e) ++ lam (makeArg "_") (bind' dss)

  -- compile (EWithDo bn dss) = paren $ bind' dss
  --   where bind' (Cons ds Nil) = case ds of
  --           (DoStatCall e) -> compile e
  --         bind' (Cons ds dss) = case ds of
  --           DoStatLet (Tuple n e) -> paren $ lam (makeArg n) (bind' dss) ++ paren (compile e)
  --           DoStatAssign (Tuple n e) -> paren $ makeId bn ++ paren (compile e) ++ lam (makeArg n) (bind' dss)
  --           DoStatCall e -> paren $ makeId bn ++ paren (compile e) ++ lam (makeArg "_") (bind' dss)

instance isStatement :: IsAST Statement where
  -- compile _ = ""
  compile (StatLet (Tuple n e)) = let' (makeId n) (compile e)
  compile (StatAss (Tuple n e)) = makeId n ++ "=" ++ paren (compile e)
  compile (StatCall e) = compile e
  compile (StatReturn e) = "return "++ compile e
  compile (StatIfElse con left right) = "if(" ++ compile con ++ "){"
                                        ++ joinListWith ";" (map compile left) ++ "}else{"
                                        ++ joinListWith ";" (map compile right) ++ "}"
  compile (StatWhile con body) = "while(" ++ compile con ++ "){"
                                 ++ joinListWith ";" (map compile body) ++ "}"
  compile (StatBreak) = "break"
  compile (StatContinue) = "continue"
  compile (StatSwitch e body) = "switch(" ++ compile e ++ "){"
                                ++ joinListWith ";" (map compile' body) ++ "}"
    where compile' (Tuple l sts) = "case " ++ compile l ++ ":{" ++ joinListWith ";" (map compile sts) ++ "}"
  compile (StatPass) = "void(0)"

instance isASTModuleStatement :: IsAST ModuleStatement where
  compile _ = ""

instance isASTModule :: IsAST Module where
  compile (Module {exports:es, imports:_, optable:_, bindings:bindings}) =
    closure' $ joinListWith ";" (map bind' bindings)
    ++ ";return {" ++ joinListWith "," (map kv es) ++ "}"
    where bind' (Tuple k v) = const (makeId k) (compile v)
          kv n = "\"" ++ makeId n ++ "\""  ++ ":" ++ makeId n

  -- compile
  -- compile _ = ""

  -- {bn} (x) (\() -> {next})

-- bind' (Cons _ (Cons _ _)) = 
--   where 

-- bind' (Cons ds dss) = case ds of
--   (DoStatLet n e) = 

  -- compile (EWithDo bn dss) = 
  -- compile (EWithDo bn dss) = 
  --   where bind' (Cons )
  -- compile (EWithDo bn )
  -- where
  -- compile (EWithDo bn dss)
  -- compile (EWithDo bn dss) = case dss of
  --   (Cons e Nil) -> compile e
  --   (Cons e ss) -> 

-- ```
--   aaa
--   bbb
--   a <- ccc
--   ddd
--   bind (aaa) ((_) => ) ((a) => a)
--   bind ()
-- ```

-- instance isASTDoStatement :: IsAST DoStatement where
--   compile (DoStatLet (Tuple n e)) = ""
--   compile (DoStatAssign (Tuple n e)) = ""
--   compile (DoStatCall e) = ""
