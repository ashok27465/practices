//  ex-1
 function fun_one(){
    return fun_two;
};
function fun_two(){
   return "hello";
};
console.log(fun_one());                    // [Function: fun_two]
console.log(fun_one()());                  // hello

//  ex-2 (let i=0 => this is initialization) (i<5 => this is condition) (i++ => this is increment)
let Arr=[];
function fun_one(){
    return "hello";
};
for(let i=0; i<5; i++){
    arr.push(fun_one());
};
for(let j=0; j<arr.length;j++){
    console.log(arr[j]); 
};                                         //5 hello

//  ex-3
let arr=[];
function fun_one(){
    return "hello";
};
for (let i=0; i<5; i++){
    arr.push(fun_one);
};
for (let j=0; j<arr.length;j++){
    console.log(arr[j]());
};                                       //5 hello

//  ex-4                 This function is executed after 5 seconds
function fun_one(){
    return "hello";
}
setTimeout(function(){
    console.log(fun_one())
},5000);                                //hello

//  ex-5   (function to be executed repeatedly) ( function execute a function every 3seconds indefinitely:)
function fun_one(){
    return "hello";
};
setInterval(function(){
    console.log(fun_one());
},3000);                               //hello hello hello .............

//  ex-6 
for(let i=0; i<5; i++){
    setTimeout(function(){
        console.log(i);
    },5000);
};                                  //0 1 2 3 4 

for(var i=0; i<5; i++){
    setTimeout(function(){
        console.log(i);
    },3000);
;}                                 //5 5 5 5 5

 