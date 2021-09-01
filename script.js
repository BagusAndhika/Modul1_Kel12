//root scope
var a = 0;

var q2=  ()=> {
    console.log("arrow function" );
}
q2();
(a==0) ? console.log("true"): console.log("false");
console.log("ini root scope: " + a);