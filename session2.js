// syntax : var/let/const  variablename = value;

 var var_one="hello";
 console.log(var_one);     //hello

// var 123abc="welcome";     variable declaration expected. 

var abc123;
var abc$123;
//var abc#123;                 invalid character
var _123;

//numbers  1)decimal  2)floot&double  3)hexadecimal ="0x"  4)octal ="0o"  5)binary ="0b"

var decimalnum =100;                    //100
var doublenum =100.12345;               //100.12345
var hexadecimalnum =0xb123abc;          //185744060
var octalnum =0o123;                    //83
var binarynum =0b1010;                  //10
console.log(
            decimalnum,
            doublenum,
            hexadecimalnum,
            octalnum,
            binarynum);            //100 100.12345 185744060 83 10

//boolean (true & false) true=1, false=0
var flag =true;
console.log(flag);               //true
console.log(1+true);             //2
console.log(true+true);          //2
console.log(true-false);         //1
console.log(true+"1");           //true1
console.log(+"1"+true);          //2

//conditional rendering
var x=true;
x==true?console.log("hello"):console.log("bye");             //hello
var x=false
x==true?console.log("hello"):console.log("bye");             //bye

var x = "hello";
x==="hello"?console.log("welcome"):console.log("bye");      //welcome
