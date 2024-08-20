console.log("welcome to javascript");              //welcome to javascript

// Addition  "+"  
console.log(10 + 10);                                //20
console.log(10 + 10 + 10);                            //30
console.log(100 + 100);                             //200
console.log(100 + 100 + 100);                         //300
console.log(true + true);                         //2se
console.log(false + false);                     //0   
console.log(true + false);                       //1

//concatenation  "number after number"
console.log(10 + "10");                          //1010
console.log(10 + "10" + 10);                     //101010
console.log(100 + "100");                        //100100
console.log("10" + 20 + "10");                   //102010
console.log(true + "true");                      //true true
console.log(false + "false");                   //false false
console.log(true + "false");                    //true false

// how to connect to string to number "+"
console.log(10 + +"10");                         //20
console.log(20 + +"20");                          //40
console.log(10 + +"10" + 10);                       //30
console.log(100 + +"100");                        //200
console.log(100 + +"100" + 100);                    //300
console.log(+"20" + +"10" + +"10");                //40
console.log(true + + "false");                  //nan

// value & datatype
console.log(1 == "1");               //true
console.log(1 === "1");              //false
console.log(1 == "one");             //false
console.log(1 === "one");            //false
console.log(1 + true);               //2
console.log(1 - true);               //0
console.log(1 + true - false);       //2
console.log(1 + true - 2);          //0
console.log(true + false);         //1