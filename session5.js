// Functions 
// what is functions (puticular business logic called as function)   &  why functions (function are used to reuse the business logices) 
// how maney types of function (thers are 8types of function) 
// 1)named function
// 2)anonymous function/ arrow function/ callback function/ fat arrow function/ nameless function 
// 3)rest parameter function
// 4)default parameter function
// 5)optional parameter function
// 6)generator function
// 7)IIfe (immidiate invokable functional expression)
// 8)constructor function

// named function
function fun_one(){
    return "welcome to javascript";
}
console.log( fun_one());                   //welcome to javascript

function fun_two(){
    return "hello";
}
console.log(fun_two());                   //hello

function fun_three( arg1,arg2,arg3){
    console.log(arg1, arg2,arg3);
};
fun_three("html","css","javascript");           //html css javascript
fun_three("reactjs","database","nodejs");       //reactjs database nodejs
fun_three(1,2,3,);                              //1 2 3
fun_three();                                    //undefined undefined undefined
fun_three(null,null,null);                      // null null null
fun_three(undefined,"hello",undefined);         //undefined hello undefined
fun_three(undefined,"welcome")                  //undefined welcome undefined
fun_three("hello_1");                           //hello_1 undefined undefined