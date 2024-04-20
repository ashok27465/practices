/* arrow functions
->the function witch out name called as anonymous functions
->anonymous function also called arrow functions  (or) -> arrow function behaves like "callback" functions
->we will represent arrow function with "=>"  (or) ->arrow function introducted in "es6"
->var/let/const=(arg1,arg2,arg3,......argn)=>{bussiness logie}  
->variable name (para1,para2,para3,.....paran)*/

// ex-1
let fun_one=()=>{
    return "hello";
};
console.log(fun_one);                                 //[Function: fun_one]
console.log(fun_one());                               //hello
                                      //(or)
let fun=()=>console.log("hello");
fun();                                           //hello 

// ex-2
let fun_two=(arg1,arg2,arg3)=>{
    console.log(arg1,arg2,arg3)
};
fun_two("hello1","hello2","hello3");                //hello1 hello2 hello3
fun_two();                                          //undefined undefined undefined
fun_two(null,null,null);                            //null null null
fun_two("hello","100",null,"2");                    //hello 100 null
fun_two(undefined,null,"hello");                    //undefined null hello 

// ex-3
let ashok=(name1,name2,name3)=>{
    console.log(name1(),name2(),name3())
};
ashok(
    ()=>{return "hello1"},
    ()=>{return "hello2"},
    ()=>{return "hello3"}
);                                      //hello1 hello2 hello3
ashok(
    ()=>{return "first"},
    ()=>{return "second"},
    ()=>{return "three"}
);                                     //first second three

// ex-3
let initicize=(user,getElementByemail,getElementByid)=>{
    console.log(user,getElementByemail(),getElementByid())
};
let getElementByemail=()=>{return "ashok@123.com"};
let getElementByid=()=>{return "ashok"};

initicize ("hello",getElementByemail,getElementByid);       //hello ashok@123.com ashok

