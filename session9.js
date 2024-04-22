//  ex-1
let inlitilize = (user, getElementByemail, getElementByid) => {
    console.log(user, getElementByemail(), getElementByid());
};
let getElementByemail = () => {
    return "hello-2"
};
let getElementByid = () => {
    return "hello-3"
};
inlitilize("hello-1", getElementByemail, getElementByid);                 //hello-1 hello-2 hello-3


//  ex-2
let arr = [];
for (let i = 0; i < 5; i++) {
    arr.push(() => {
        return "hello"
    })
};
for (let j = 0; j < arr.length; j++) {
    console.log(arr[j]())
};                                                   //hello hello hello hello hello


//-> IIFC imidiate invokable fanction expression   *syntax  (()=>{})()
//  ex-3
(() => {
    console.log("welcome to iife");
})();                                         //welcome to iife 

let msg = (() => {
    return "welcome to iife"
})();
console.log(msg);                           //welcome to iife


// ex-4
function fun_one(arg1, arg2, arg3) {
    console.log(arg1, arg2, arg3)
};

fun_one(
    () => { return "hello1" },
    () => { return "hello2" },
    () => { return "hello3" }
);                              //[Function (anonymous)] [Function (anonymous)] [Function (anonymous)]

fun_one(
    (() => { return "hello-1" })(),
    (() => { return "hello-2" })(),
    (() => { return "hello-3" })()
);                                             //hello-1 hello-2 hello-3    


//  ex-5 
((arg1, arg2, arg3) => {
    console.log(arg1, arg2, arg3);
})("hello_1", "hello_2", "hello_3");            //hello_1 hello_2 hello_3 

for (var i = 0; i < 5; i++) {
    console.log(i)
};                                           // 0 1 2 3 4   


//  ex-6 
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 5000)
};                                         // 5 5 5 5 5

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 5000)
};                                        // 0 1 2 3 4  

for (var i = 0; i < 5; i++) {
    ((i) => {
        setTimeout(() => {
            console.log(i);
        }, 5000)
    })(i);
};                                      // 0 1 2 3 4 

