// LHS RHS 变量查找  就在那一行相关
function foo(a){
    var b =a;
    return a+b;
}


// Left Hand Search(LHS)
// Right Hand Search(RHS)
var c = foo(2);
// LHS3次: c=...  a = 2  b = 
// RHS4次: foo(2)  = a   return a  return b
