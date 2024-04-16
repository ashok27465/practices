// type of operter

console.log(typeof"hello");                //string
console.log(typeof 100);                   //number
console.log(typeof true);                  //boolean
console.log(typeof undefined);             //undefined
console.log(typeof null);                  //object
console.log(typeof []);                    //object
console.log(typeof IN);                    //undefined
console.log(1n+2n);                        //3n
console.log(1+2n);                         //TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(1n/1n);                        //1n
console.log(1/1n);                         //TypeError: Cannot mix BigInt and other types, use explicit conversions

// variables  (for loop)
// ex-1   
for(var i=0; i<5; i++){
    console.log(i);                        // 0 1 2 3 4 
}

for(var i=0; i<5; i++){}
console.log(i);                           // var: 5

for(let i=0; i<5; i++){}
console.log(i);                             //let : ReferenceError: i is not defined

//  ex-2
var sub ="javascript";
var sub ="venila javascript";
console.log(sub);                         //venila javascript

let sub ="javascript";
let sub ="venila javascript";
console.log(sub);                        //SyntaxError: Identifier 'sub' has already been declared
// var keyword allows the duplicate variables  (or)  let keyword wont allows the duplicate variables  

// ex-3    global (variables)
var data =100;
console.log(data);                  //100
// block (variables)
{var data =200;
console.log(data);                 //200
}

var data =100;
{var data = 200;}
console.log(data);               //200

let data =100;
{let data=200;}
console.log(data);              //100 
//global polluting issue raised in "var" keyword  (or) we can over come global polluting issue by using "let" keyword 

//ex-4 
var msg ="hello";
console.log(msg);              //hello

console.log(data);
var data =100;                 //undefined

console.log(data);
let data=100;                 //ReferenceError: Cannot access 'data' before initialization 
// variable hoisting issue raised because of "var" keyword (or) we can overcome variable hoisting with the help of "let" keyword  

// const keyword
const data =100;
data=200                      //TypeError: Assignment to constant variable.

const arr =[1,2,3,4,5];
arr : [];                         //TypeError: Assignment to constant variable.
arr[0]=100;
arr[4]=500;
arr[5]=600;
console.log(arr);                //[100, 2, 3, 4, 500, 600]
arr.pop();
console.log(arr);               //[100, 2, 3, 4, 500]
arr.shift();
console.log(arr);               //[2, 3, 4, 500] 

const cources={
    "sub_one" :"javascript",
    "sub_two" :"reactjs",
    "sub_three":"nodejs123",
}; 
console.log(cources);          // sub_one:'javascript', sub_two:'reactjs', sub_three:'nodejs123' 

const obj={
     "sub_one" :"javascript",
    "sub_two" :"reactjs",
    "sub_three" :"database",
    "sub_four" :"nodejs"
}
// obj ={};                    //TypeError: Assignment to constant variable.
obj.sub_one ="ashok";
obj.sub_two ="ramya";
obj.sub_three ="rajani";
console.log(obj);            //sub_one:'ashok', sub_two:'ramya', sub_three:'rajani', sub_four:'nodejs'

// Symbol  (Symbol is a primitive data type)
var data = Symbol(100);
console.log(data);              //Symbol(100)
console.log(typeof data);       //symbol
