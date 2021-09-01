//root scope
var a = 0;

var q2=  ()=> {
    console.log("arrow function" );
}
q2();

(a==0) ? console.log("true"): console.log("false");

console.log("ini root scope: " + a);

var angka = [1,2,3];
var dobel = angka.map(function(num){
    return num * 2;
});
console.log(angka);
console.log(dobel);

const myArray = [5,10,20];

const reducer = myArray.reduce((acumulator, currentValue)=>acumulator+currentValue);

console.log(reducer)

setTimeout( () => console.log("Kode baris pertama"), 3000);
setTimeout( () => console.log("Kode baris kedua"), 1000);
setTimeout( () => console.log("Kode baris ketiga"), 2000);
