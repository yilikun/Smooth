

define(function(require){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,5],$V1=[1,8],$V2=[1,6],$V3=[1,14],$V4=[1,17],$V5=[5,8,11,15],$V6=[1,22],$V7=[1,37],$V8=[1,31],$V9=[1,32],$Va=[1,34],$Vb=[1,26],$Vc=[1,27],$Vd=[1,28],$Ve=[1,29],$Vf=[1,30],$Vg=[1,33],$Vh=[1,36],$Vi=[1,38],$Vj=[1,39],$Vk=[1,40],$Vl=[1,41],$Vm=[1,42],$Vn=[1,44],$Vo=[11,19,27],$Vp=[1,48],$Vq=[14,17],$Vr=[7,21,32],$Vs=[1,51],$Vt=[1,52],$Vu=[1,53],$Vv=[1,54],$Vw=[1,55],$Vx=[1,56],$Vy=[1,57],$Vz=[1,58],$VA=[1,59],$VB=[1,60],$VC=[1,61],$VD=[1,62],$VE=[1,63],$VF=[1,64],$VG=[1,65],$VH=[1,66],$VI=[1,67],$VJ=[1,68],$VK=[7,14,17,21,24,29,30,32,34,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,61,64],$VL=[7,9,11,12,14,17,21,22,24,26,28,29,30,31,32,33,34,36,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,61,62,64,66,67,68,69,70,71],$VM=[2,51],$VN=[17,64],$VO=[17,24],$VP=[7,9,11,12,14,17,21,22,24,26,28,29,30,31,32,33,34,36,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,59,61,62,64,66,67,68,69,70,71],$VQ=[1,106],$VR=[11,24],$VS=[7,14,17,21,24,29,30,32,34,64],$VT=[7,14,17,21,24,29,30,32,34,38,39,40,64],$VU=[7,14,17,21,24,29,30,32,34,38,39,40,41,42,64],$VV=[7,14,17,21,24,29,30,32,34,38,39,40,41,42,43,44,45,46,64],$VW=[7,14,17,21,24,29,30,32,34,38,39,40,41,42,43,44,45,46,47,48,64],$VX=[7,14,17,21,24,29,30,32,34,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,64],$VY=[7,14,17,21,24,29,30,32,34,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,64],$VZ=[1,123],$V_=[1,122],$V$=[1,132],$V01=[9,11,12,22,24,26,28,31,33,36,62,66,67,68,69,70,71],$V11=[9,24,60,66,67,68,69,70,71];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"module":3,"module_stat_list":4,"EOF":5,"module_stat":6,";":7,"import":8,"STRING":9,"as":10,"NAME":11,"(":12,"name_list":13,")":14,"export":15,"binding":16,",":17,"argument_list":18,"=":19,"expr":20,"where":21,"{":22,"binding_list":23,"}":24,"atom":25,"\\":26,"->":27,"if":28,"than":29,"else":30,"let":31,"in":32,"case":33,"of":34,"case_of_list":35,"@":36,"do_stat_list":37,"$":38,"||":39,"&&":40,"==":41,"!=":42,">":43,"<":44,">=":45,"<=":46,"+":47,"-":48,"*":49,"/":50,"%":51,"**":52,"<<<":53,">>>":54,"do_stat":55,"<-":56,"case_of":57,"literal":58,":":59,"default":60,".":61,"[":62,"array_items":63,"]":64,"object_items":65,"NUMBER":66,"BOOLEAN":67,"NULL":68,"UNDEFINED":69,"RAWCODE":70,"REGEXP":71,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:";",8:"import",9:"STRING",10:"as",11:"NAME",12:"(",14:")",15:"export",17:",",19:"=",21:"where",22:"{",24:"}",26:"\\",27:"->",28:"if",29:"than",30:"else",31:"let",32:"in",33:"case",34:"of",36:"@",38:"$",39:"||",40:"&&",41:"==",42:"!=",43:">",44:"<",45:">=",46:"<=",47:"+",48:"-",49:"*",50:"/",51:"%",52:"**",53:"<<<",54:">>>",56:"<-",59:":",60:"default",61:".",62:"[",64:"]",66:"NUMBER",67:"BOOLEAN",68:"NULL",69:"UNDEFINED",70:"RAWCODE",71:"REGEXP"},
productions_: [0,[3,2],[3,1],[4,3],[4,2],[6,4],[6,5],[6,4],[6,1],[13,3],[13,1],[18,2],[18,1],[16,3],[16,4],[16,5],[23,3],[23,2],[20,1],[20,4],[20,6],[20,4],[20,6],[20,5],[20,2],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[37,3],[37,2],[55,2],[55,3],[55,1],[35,3],[35,2],[57,3],[57,3],[25,1],[25,3],[25,3],[25,3],[25,3],[25,1],[58,1],[58,1],[58,1],[58,1],[58,1],[58,1],[58,1],[63,3],[63,1],[63,0],[65,5],[65,3],[65,0]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

      var module = AST.Module(
         $$[$0-1].filter(function(s){
           return (s instanceof AST.Module.Import || s instanceof AST.Module.ImportAs)
         }),
         $$[$0-1].filter(function(s){
           return (s instanceof AST.Module.Export)
         }),
         $$[$0-1].filter(function(s){
           return (s instanceof AST.Module.Binding)
         }));
      return compile(module);
    
break;
case 2:
 return '' 
break;
case 3:
 this.$ = $$[$0-2].concat([$$[$0-1]]) 
break;
case 4: case 17: case 43: case 48:
 this.$ = [$$[$0-1]] 
break;
case 5:
 this.$ = AST.Module.ImportAs($$[$0-2], $$[$0]) 
break;
case 6:
 this.$ = AST.Module.Import($$[$0-3], $$[$0-1]) 
break;
case 7:
 this.$ = AST.Module.Export($$[$0-1]) 
break;
case 8:
 this.$ = AST.Module.Binding($$[$0]) 
break;
case 9: case 64:
 this.$ = $$[$0-2].concat($$[$0]) 
break;
case 10: case 12: case 65:
 this.$ = [$$[$0]] 
break;
case 11:
 this.$ = $$[$0-1].concat($$[$0]) 
break;
case 13:
 this.$ = AST.Binding($$[$0-2], $$[$0]) 
break;
case 14:
 this.$ = AST.Binding($$[$0-3], $$[$0-2].reduceRight(function(expr, arg){
         return AST.Expr.Lam(arg, expr)}, $$[$0])) 
break;
case 15:
 this.$ = AST.Binding($.name, AST.Expr.LetIn($$[$0-1], $expr)) 
break;
case 16: case 42: case 47:
 this.$ = $$[$0-2].concat($$[$0-1]) 
break;
case 18: case 56:
 this.$ = $$[$0] 
break;
case 19:
 this.$ = $$[$0-2].reduceRight(function(expr, arg){
         return AST.Expr.Lam(arg, expr)}, $$[$0]) 
break;
case 20:
 this.$ = AST.Expr.IfElse($$[$0-4], $$[$0-2], $$[$0]) 
break;
case 21:
 this.$ = AST.Expr.LetIn([$$[$0-2]], $$[$0]) 
break;
case 22:
 this.$ = AST.Expr.CaseOf($$[$0-4], $$[$0-2]) 
break;
case 23:

      var last = $$[$0-1].slice(-1)[0];
      var init = $$[$0-1].slice(0,-1);

      if ( last.type !== 'call' ){
         parser.parseError('Parse error on line ' + (yylineno + 1) + ': The last statement in do block must be an expression' ,{});
      } else {

        if (init.length > 0){
          this.$ = init.reduceRight(function(expr, dostat){
            switch (dostat.type){
              case 'let':
                return AST.Expr.LetIn([dostat.binding], expr)
              case 'ass':
                return AST.Expr.App(
                      AST.Expr.App(AST.Expr.ID($$[$0-3]), dostat.expr),
                      AST.Expr.Lam(dostat.name, expr))
              case 'call':
                return AST.Expr.App(
                      AST.Expr.App(AST.Expr.ID($$[$0-3]), dostat.expr),
                      AST.Expr.Lam('_', expr))
            };
          }, AST.Expr.App(
            AST.Expr.App(AST.Expr.ID($$[$0-3]), last.expr)
            , AST.Expr.ID('NEXT$')));
          this.$ = AST.Expr.Lam('NEXT$', this.$);
        } else {
          this.$ = last.expr;
        };
      };
    
break;
case 24:
 this.$ = AST.Expr.App($$[$0-1], $$[$0]) 
break;
case 25:
 this.$ = AST.Expr.App($$[$0-2], $$[$0]) 
break;
case 26: case 27: case 28: case 29: case 30: case 31: case 32: case 33: case 34: case 35: case 36: case 37: case 38: case 39: case 40: case 41:
 this.$ = AST.Expr.Op($$[$0-1], $$[$0-2], $$[$0]) 
break;
case 44:
 this.$ = {type:'let', binding:$$[$0]} 
break;
case 45:
 this.$ = {type:'ass', name:$$[$0-2], expr:$$[$0]} 
break;
case 46:
 this.$ = {type:'call', expr:$$[$0]} 
break;
case 49:
 this.$ = AST.Expr.CaseOf.Case($$[$0-2], $$[$0]) 
break;
case 50:
 this.$ = AST.Expr.CaseOf.Case(AST.Expr.Val('DEFAULT', 'default'), $$[$0]) 
break;
case 51:
 this.$ = AST.Expr.ID($$[$0]) 
break;
case 52:
 this.$ = AST.Expr.Attr($$[$0-2], $$[$0]) 
break;
case 53:
 this.$ = $$[$0-1] 
break;
case 54:
 this.$ = AST.Expr.Array($$[$0-1]) 
break;
case 55:
 this.$ = AST.Expr.Object($$[$0-1]) 
break;
case 57:
 this.$ = AST.Expr.Val('NUMBER', $$[$0])
break;
case 58:
 this.$ = AST.Expr.Val('STRING', $$[$0])
break;
case 59:
 this.$ = AST.Expr.Val('BOOLEAN', $$[$0])
break;
case 60:
 this.$ = AST.Expr.Val('NULL', $$[$0])
break;
case 61:
 this.$ = AST.Expr.Val('UNDEFINED', $$[$0])
break;
case 62:
 this.$ = AST.Expr.Val('RAWCODE', $$[$0])
break;
case 63:
 this.$ = AST.Expr.Val('REGEXP', $$[$0])
break;
case 67:
 this.$ = $$[$0-4].concat([Expr.Object.KeyValue($$[$0-2], $$[$0])]) 
break;
case 68:
 this.$ = [Expr.Object.KeyValue($$[$0-2], $$[$0])] 
break;
}
},
table: [{3:1,4:2,5:[1,3],6:4,8:$V0,11:$V1,15:$V2,16:7},{1:[3]},{5:[1,9],6:10,8:$V0,11:$V1,15:$V2,16:7},{1:[2,2]},{7:[1,11]},{9:[1,12]},{12:[1,13]},{7:[2,8],21:$V3},{11:$V4,18:16,19:[1,15]},{1:[2,1]},{7:[1,18]},o($V5,[2,4]),{10:[1,19],12:[1,20]},{11:$V6,13:21},{22:[1,23]},{9:$V7,11:$V8,12:$V9,20:24,22:$Va,25:25,26:$Vb,28:$Vc,31:$Vd,33:$Ve,36:$Vf,58:35,62:$Vg,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm},{11:$Vn,19:[1,43]},o($Vo,[2,12]),o($V5,[2,3]),{11:[1,45]},{11:$V6,13:46},{14:[1,47],17:$Vp},o($Vq,[2,10]),{11:$V1,16:50,23:49},o($Vr,[2,13],{38:$Vs,39:$Vt,40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz,46:$VA,47:$VB,48:$VC,49:$VD,50:$VE,51:$VF,52:$VG,53:$VH,54:$VI,61:$VJ}),o($VK,[2,18],{25:25,58:35,20:69,9:$V7,11:$V8,12:$V9,22:$Va,26:$Vb,28:$Vc,31:$Vd,33:$Ve,36:$Vf,62:$Vg,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm}),{11:$V4,18:70},{9:$V7,11:$V8,12:$V9,20:71,22:$Va,25:25,26:$Vb,28:$Vc,31:$Vd,33:$Ve,36:$Vf,58:35,62:$Vg,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm},{11:$V1,16:72},{9:$V7,11:$V8,12:$V9,20:73,22:$Va,25:25,26:$Vb,28:$Vc,31:$Vd,33:$Ve,36:$Vf,58:35,62:$Vg,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm},{11:[1,74]},o($VL,$VM),{9:$V7,11:$V8,12:$V9,20:75,22:$Va,25:25,26:$Vb,28:$Vc,31:$Vd,33:$Ve,36:$Vf,58:35,62:$Vg,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm},o($VN,[2,66],{25:25,58:35,63:76,20:77,9:$V7,11:$V8,12:$V9,22:$Va,26:$Vb,28:$Vc,31:$Vd,33:$Ve,36:$Vf,62:$Vg,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm}),o($VO,[2,69],{65:78,11:[1,79]}),o($VL,[2,56]),o($VP,[2,57]),o($VP,[2,58]),o($VP,[2,59]),o($VP,[2,60]),o($VP,[2,61]),o($VP,[2,62]),o($VP,[2,63]),{9:$V7,11:$V8,12:$V9,20:80,22:$Va,25:25,26:$Vb,28:$Vc,31:$Vd,33:$Ve,36:$Vf,58:35,62:$Vg,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm},o($Vo,[2,11]),{7:[2,5]},{14:[1,81],17:$Vp},{7:[2,7]},{11:[1,82]},{11:$V1,16:84,24:[1,83]},{7:[1,85],21:$V3},{9:$V7,11:$V8,12:$V9,20:86,22:$Va,25:25,26:$Vb,28:$Vc,31:$Vd,33:$Ve,36:$Vf,58:35,62:$Vg,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm},{9:$V7,11:$V8,12:$V9,20:87,22:$Va,25:25,26:$Vb,28:$Vc,31:$Vd,33:$Ve,36:$Vf,58:35,62:$Vg,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm},{9:$V7,11:$V8,12:$V9,20:88,22:$Va,25:25,26:$Vb,28:$Vc,31:$Vd,33:$Ve,36:$Vf,58:35,62:$Vg,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm},{9:$V7,11:$V8,12:$V9,20:89,22:$Va,25:25,26:$Vb,28:$Vc,31:$Vd,33:$Ve,36:$Vf,58:35,62:$Vg,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm},{9:$V7,11:$V8,12:$V9,20:90,22:$Va,25:25,26:$Vb,28:$Vc,31:$Vd,33:$Ve,36:$Vf,58:35,62:$Vg,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm},{9:$V7,11:$V8,12:$V9,20:91,22:$Va,25:25,26:$Vb,28:$Vc,31:$Vd,33:$Ve,36:$Vf,58:35,62:$Vg,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm},{9:$V7,11:$V8,12:$V9,20:92,22:$Va,25:25,26:$Vb,28:$Vc,31:$Vd,33:$Ve,36:$Vf,58:35,62:$Vg,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm},{9:$V7,11:$V8,12:$V9,20:93,22:$Va,25:25,26:$Vb,28:$Vc,31:$Vd,33:$Ve,36:$Vf,58:35,62:$Vg,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm},{9:$V7,11:$V8,12:$V9,20:94,22:$Va,25:25,26:$Vb,28:$Vc,31:$Vd,33:$Ve,36:$Vf,58:35,62:$Vg,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm},{9:$V7,11:$V8,12:$V9,20:95,22:$Va,25:25,26:$Vb,28:$Vc,31:$Vd,33:$Ve,36:$Vf,58:35,62:$Vg,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm},{9:$V7,11:$V8,12:$V9,20:96,22:$Va,25:25,26:$Vb,28:$Vc,31:$Vd,33:$Ve,36:$Vf,58:35,62:$Vg,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm},{9:$V7,11:$V8,12:$V9,20:97,22:$Va,25:25,26:$Vb,28:$Vc,31:$Vd,33:$Ve,36:$Vf,58:35,62:$Vg,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm},{9:$V7,11:$V8,12:$V9,20:98,22:$Va,25:25,26:$Vb,28:$Vc,31:$Vd,33:$Ve,36:$Vf,58:35,62:$Vg,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm},{9:$V7,11:$V8,12:$V9,20:99,22:$Va,25:25,26:$Vb,28:$Vc,31:$Vd,33:$Ve,36:$Vf,58:35,62:$Vg,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm},{9:$V7,11:$V8,12:$V9,20:100,22:$Va,25:25,26:$Vb,28:$Vc,31:$Vd,33:$Ve,36:$Vf,58:35,62:$Vg,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm},{9:$V7,11:$V8,12:$V9,20:101,22:$Va,25:25,26:$Vb,28:$Vc,31:$Vd,33:$Ve,36:$Vf,58:35,62:$Vg,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm},{9:$V7,11:$V8,12:$V9,20:102,22:$Va,25:25,26:$Vb,28:$Vc,31:$Vd,33:$Ve,36:$Vf,58:35,62:$Vg,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm},{11:[1,103]},o($VK,[2,24]),{11:$Vn,27:[1,104]},{29:[1,105],38:$Vs,39:$Vt,40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz,46:$VA,47:$VB,48:$VC,49:$VD,50:$VE,51:$VF,52:$VG,53:$VH,54:$VI,61:$VJ},{21:$V3,32:$VQ},{34:[1,107],38:$Vs,39:$Vt,40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz,46:$VA,47:$VB,48:$VC,49:$VD,50:$VE,51:$VF,52:$VG,53:$VH,54:$VI,61:$VJ},{22:[1,108]},{14:[1,109],38:$Vs,39:$Vt,40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz,46:$VA,47:$VB,48:$VC,49:$VD,50:$VE,51:$VF,52:$VG,53:$VH,54:$VI,61:$VJ},{17:[1,111],64:[1,110]},o($VN,[2,65],{38:$Vs,39:$Vt,40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz,46:$VA,47:$VB,48:$VC,49:$VD,50:$VE,51:$VF,52:$VG,53:$VH,54:$VI,61:$VJ}),{17:[1,113],24:[1,112]},{59:[1,114]},o($Vr,[2,14],{38:$Vs,39:$Vt,40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz,46:$VA,47:$VB,48:$VC,49:$VD,50:$VE,51:$VF,52:$VG,53:$VH,54:$VI,61:$VJ}),{7:[2,6]},o($Vq,[2,9]),o($Vr,[2,15]),{7:[1,115],21:$V3},o($VR,[2,17]),o($VS,[2,25],{38:$Vs,39:$Vt,40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz,46:$VA,47:$VB,48:$VC,49:$VD,50:$VE,51:$VF,52:$VG,53:$VH,54:$VI,61:$VJ}),o($VT,[2,26],{41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz,46:$VA,47:$VB,48:$VC,49:$VD,50:$VE,51:$VF,52:$VG,53:$VH,54:$VI,61:$VJ}),o($VT,[2,27],{41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz,46:$VA,47:$VB,48:$VC,49:$VD,50:$VE,51:$VF,52:$VG,53:$VH,54:$VI,61:$VJ}),o($VU,[2,28],{43:$Vx,44:$Vy,45:$Vz,46:$VA,47:$VB,48:$VC,49:$VD,50:$VE,51:$VF,52:$VG,53:$VH,54:$VI,61:$VJ}),o($VU,[2,29],{43:$Vx,44:$Vy,45:$Vz,46:$VA,47:$VB,48:$VC,49:$VD,50:$VE,51:$VF,52:$VG,53:$VH,54:$VI,61:$VJ}),o($VV,[2,30],{47:$VB,48:$VC,49:$VD,50:$VE,51:$VF,52:$VG,53:$VH,54:$VI,61:$VJ}),o($VV,[2,31],{47:$VB,48:$VC,49:$VD,50:$VE,51:$VF,52:$VG,53:$VH,54:$VI,61:$VJ}),o($VV,[2,32],{47:$VB,48:$VC,49:$VD,50:$VE,51:$VF,52:$VG,53:$VH,54:$VI,61:$VJ}),o($VV,[2,33],{47:$VB,48:$VC,49:$VD,50:$VE,51:$VF,52:$VG,53:$VH,54:$VI,61:$VJ}),o($VW,[2,34],{49:$VD,50:$VE,51:$VF,52:$VG,53:$VH,54:$VI,61:$VJ}),o($VW,[2,35],{49:$VD,50:$VE,51:$VF,52:$VG,53:$VH,54:$VI,61:$VJ}),o($VX,[2,36],{53:$VH,54:$VI,61:$VJ}),o($VX,[2,37],{53:$VH,54:$VI,61:$VJ}),o($VX,[2,38],{53:$VH,54:$VI,61:$VJ}),o($VX,[2,39],{53:$VH,54:$VI,61:$VJ}),o($VY,[2,40],{61:$VJ}),o($VY,[2,41],{61:$VJ}),o($VL,[2,52]),{9:$V7,11:$V8,12:$V9,20:116,22:$Va,25:25,26:$Vb,28:$Vc,31:$Vd,33:$Ve,36:$Vf,58:35,62:$Vg,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm},{9:$V7,11:$V8,12:$V9,20:117,22:$Va,25:25,26:$Vb,28:$Vc,31:$Vd,33:$Ve,36:$Vf,58:35,62:$Vg,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm},{9:$V7,11:$V8,12:$V9,20:118,22:$Va,25:25,26:$Vb,28:$Vc,31:$Vd,33:$Ve,36:$Vf,58:35,62:$Vg,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm},{22:[1,119]},{9:$V7,11:$VZ,12:$V9,20:124,22:$Va,25:25,26:$Vb,28:$Vc,31:$V_,33:$Ve,36:$Vf,37:120,55:121,58:35,62:$Vg,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm},o($VL,[2,53]),o($VL,[2,54]),{9:$V7,11:$V8,12:$V9,20:125,22:$Va,25:25,26:$Vb,28:$Vc,31:$Vd,33:$Ve,36:$Vf,58:35,62:$Vg,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm},o($VL,[2,55]),{11:[1,126]},{9:$V7,11:$V8,12:$V9,20:127,22:$Va,25:25,26:$Vb,28:$Vc,31:$Vd,33:$Ve,36:$Vf,58:35,62:$Vg,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm},o($VR,[2,16]),o($VS,[2,19],{38:$Vs,39:$Vt,40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz,46:$VA,47:$VB,48:$VC,49:$VD,50:$VE,51:$VF,52:$VG,53:$VH,54:$VI,61:$VJ}),{30:[1,128],38:$Vs,39:$Vt,40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz,46:$VA,47:$VB,48:$VC,49:$VD,50:$VE,51:$VF,52:$VG,53:$VH,54:$VI,61:$VJ},o($VS,[2,21],{38:$Vs,39:$Vt,40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz,46:$VA,47:$VB,48:$VC,49:$VD,50:$VE,51:$VF,52:$VG,53:$VH,54:$VI,61:$VJ}),{9:$V7,35:129,57:130,58:131,60:$V$,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm},{9:$V7,11:$VZ,12:$V9,20:124,22:$Va,24:[1,133],25:25,26:$Vb,28:$Vc,31:$V_,33:$Ve,36:$Vf,55:134,58:35,62:$Vg,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm},{7:[1,135]},{11:$V1,16:136},o([7,9,11,12,22,26,28,31,33,36,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,61,62,66,67,68,69,70,71],$VM,{56:[1,137]}),{7:[2,46],38:$Vs,39:$Vt,40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz,46:$VA,47:$VB,48:$VC,49:$VD,50:$VE,51:$VF,52:$VG,53:$VH,54:$VI,61:$VJ},o($VN,[2,64],{38:$Vs,39:$Vt,40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz,46:$VA,47:$VB,48:$VC,49:$VD,50:$VE,51:$VF,52:$VG,53:$VH,54:$VI,61:$VJ}),{59:[1,138]},o($VO,[2,68],{38:$Vs,39:$Vt,40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz,46:$VA,47:$VB,48:$VC,49:$VD,50:$VE,51:$VF,52:$VG,53:$VH,54:$VI,61:$VJ}),{9:$V7,11:$V8,12:$V9,20:139,22:$Va,25:25,26:$Vb,28:$Vc,31:$Vd,33:$Ve,36:$Vf,58:35,62:$Vg,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm},{9:$V7,24:[1,140],57:141,58:131,60:$V$,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm},{7:[1,142]},{59:[1,143]},{59:[1,144]},o($VK,[2,23]),{7:[1,145]},o($V01,[2,43]),{7:[2,44],21:$V3,32:$VQ},{9:$V7,11:$V8,12:$V9,20:146,22:$Va,25:25,26:$Vb,28:$Vc,31:$Vd,33:$Ve,36:$Vf,58:35,62:$Vg,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm},{9:$V7,11:$V8,12:$V9,20:147,22:$Va,25:25,26:$Vb,28:$Vc,31:$Vd,33:$Ve,36:$Vf,58:35,62:$Vg,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm},o($VS,[2,20],{38:$Vs,39:$Vt,40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz,46:$VA,47:$VB,48:$VC,49:$VD,50:$VE,51:$VF,52:$VG,53:$VH,54:$VI,61:$VJ}),o($VK,[2,22]),{7:[1,148]},o($V11,[2,48]),{9:$V7,11:$V8,12:$V9,20:149,22:$Va,25:25,26:$Vb,28:$Vc,31:$Vd,33:$Ve,36:$Vf,58:35,62:$Vg,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm},{9:$V7,11:$V8,12:$V9,20:150,22:$Va,25:25,26:$Vb,28:$Vc,31:$Vd,33:$Ve,36:$Vf,58:35,62:$Vg,66:$Vh,67:$Vi,68:$Vj,69:$Vk,70:$Vl,71:$Vm},o($V01,[2,42]),{7:[2,45],38:$Vs,39:$Vt,40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz,46:$VA,47:$VB,48:$VC,49:$VD,50:$VE,51:$VF,52:$VG,53:$VH,54:$VI,61:$VJ},o($VO,[2,67],{38:$Vs,39:$Vt,40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz,46:$VA,47:$VB,48:$VC,49:$VD,50:$VE,51:$VF,52:$VG,53:$VH,54:$VI,61:$VJ}),o($V11,[2,47]),{7:[2,49],38:$Vs,39:$Vt,40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz,46:$VA,47:$VB,48:$VC,49:$VD,50:$VE,51:$VF,52:$VG,53:$VH,54:$VI,61:$VJ},{7:[2,50],38:$Vs,39:$Vt,40:$Vu,41:$Vv,42:$Vw,43:$Vx,44:$Vy,45:$Vz,46:$VA,47:$VB,48:$VC,49:$VD,50:$VE,51:$VF,52:$VG,53:$VH,54:$VI,61:$VJ}],
defaultActions: {3:[2,2],9:[2,1],45:[2,5],47:[2,7],81:[2,6]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        function _parseError (msg, hash) {
            this.message = msg;
            this.hash = hash;
        }
        _parseError.prototype = Error;

        throw new _parseError(str, hash);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

    var AST = require('./SmoothAST');
    var compile = require('./SmoothCompiler');

/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return 5
break;
case 1:/** skip **/
break;
case 2:/** skip **/
break;
case 3: return yy_.yytext 
break;
case 4:return 66
break;
case 5:  
                                            // parseInt to convert to base-10
                                            var i = yy_.yytext.substr(2); // binary val
                                            yy_.yytext = parseInt(i,2).toString();
                                            return 66
                                        
break;
case 6:return 66
break;
case 7:return 67
break;
case 8:return 68
break;
case 9:return 69
break;
case 10:return 9
break;
case 11:return 71
break;
case 12:
                                          var str = yy_.yytext
                                              .substr(1, yy_.yytext.length-2)
                                          yy_.yytext = str
                                          return 70
                                        
break;
case 13:return 11
break;
}
},
rules: [/^(?:$)/,/^(?:(([\ \t\f\n])+))/,/^(?:(#[^\n]*))/,/^(?:((as|case|of|if|than|else|import|let|in|where|break|continue|export|return|switch|while|default\b)\b|(=|->|<-|:|,|\\|@|;)|(\(|\)|\[|\]|\{|\})|(\.|<<<|>>>|\*|\/|%|\*\*|\+|->|<|>=|<=|==|!=|\|\||&&|\$)))/,/^(?:(((([0-9])+|((([0-9])*(\.([0-9])+))|(([0-9])+\.)))([e|E][\+|\-]([0-9])+))|((([0-9])*(\.([0-9])+))|(([0-9])+\.))))/,/^(?:(0[b|B](([0|1])+)))/,/^(?:((([1-9]([0-9])*))|(0[x|X](([0-9])|[a-fA-F])+)|(0[o|O]?([0-7])+)))/,/^(?:(true|false\b))/,/^(?:(null\b))/,/^(?:(undefined\b))/,/^(?:(("(([^\\\n\"])|(\\.))*")|('(([^\\\n\'])|(\\.))*')))/,/^(?:(\/([^\\\n\/]|(\\.))\/))/,/^(?:(`([^\\\n\`]|(\\.))*`))/,/^(?:((_|(([a-z])|([A-Z])))((([a-z])|([A-Z]))|([0-9])|_)*))/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"inclusive":true},"INCOMMENT":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
return parser;
});