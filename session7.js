/* rest parameters in function
-> it is used to store the "more" then one value in single argument
-> "..." calles as "spread" operator
-> the defult value of spread parameter is []
function fun_one(arg1,...arg2){}       //this formate is correct
function fun_one(...arg1,...arg2){}    //this formate is not correct  */

//  ex-1 
function fun_one(...arg1){
    console.log(arg1);
};
fun_one("hello1","hello2");                                     //['hello1','hello2']
fun_one("hello3","hello4");                                     //['hello3','hello4']
fun_one("hello-1","hello-2","hello-3");                         //['hello-1','hell-2','hello-3']
fun_one();                                                      //[]
fun_one(null,undefined);                                        //[null,undefined]
fun_one("undefined","null");                                    //['undefined','null']


// ex-2 
function fun_one(arg1,...arg2){
        console.log(arg1,arg2);
};
fun_one();                                     //undefined []
fun_one(undefined);                            //undefined []
fun_one("hello");                              //hello []
fun_one("hello1","hello2");                    //hello1 ['hello2']
fun_one("hello1","hello2","hello3");           //hello1 ['hello2' 'hello2']
fun_one("undefined","undefined");              //undefined ['undefined']
fun_one(null,null);                            //null ['null']

// function fun_one(...arg1, arg2){ };        //SyntaxError: Rest parameter must be last formal parameter
// function fun_one(arg1, ...arg2, ...arg3){};   //SyntaxError: Rest parameter must be last formal parameter


// default parameters in functions
// -> which defining the function we will assign some default values to parameters
//  ex-1   
function fun_one(arg1="hello1",arg2="hello2",arg3="hello3"){
    console.log(arg1,arg2,arg3);
};
fun_one();                                      //hello1 hello2 hello3
fun_one("reactjs");                             //reactjs hello2 hello3
fun_one(undefined,undefined,undefined);         //hello1 hello2 hello3
fun_one(null,null,null);                        //null null null
fun_one(undefined,"welcome",null);              //hello1 welcome null

//  ex-2
function fun_one(arg1,arg2="hello2"){
    console.log(arg1,arg2)
};
fun_one();                                         //undefined hello2
fun_one(undefined);                                //undefined hello2
fun_one("hell01");                                 //hell01 hello2
fun_one("null");                                   //null hello2
fun_one(undefined,undefined);                      //undefined hello2
fun_one(null,null);                                //null null

//  ex-3
function fun_one(arg1,arg2="hello2",...arg3){
    console.log(arg1,arg2,arg3)
};
fun_one();                                       //undefined hello2 []
fun_one(undefined,undefined,undefined);          //undefined hello2 [undefined]
fun_one(null,null,null);                         //null null [null]
fun_one("hello1",undefined,"hello3");            //hello1 hello2 ['hello3']
fun_one("hello",undefined,null);                 //hello hello2 [null]

