// string
// how to represented string = "", '', ``(backtick)
// how to represented one variable to another variable
// syntax  = `{sub}`
var sub="javascript";
var wish=`welcome to ${sub}`;
console.log(wish);                 //welcome to javascript

var sub_one ="reactjs";
var sub_two ="nodejs";
var sub_three ="mongodb";
var mernstack = `${sub_one} <==> ${sub_two} <==> ${sub_three}`;
console.log(mernstack);           //reactjs <==> nodejs <==> mongodb

var tbl_name ="employees";
var sal =50000;
var sql_query1 =`select*from ${tbl_name} where esal > ${sal}`;
console.log(sql_query1);         //select*from employees where esal > 50000

var uname ="admin";
var upwd ="admin123";
var sql_query2 =`select*from ${tbl_name} where uname="${uname}" and upud='${upwd}'`;
console.log(sql_query2);        //select*from employees where uname="admin" and upud='admin123'

var mern =`mern stack means
           frontend = ${sub_one}
           backend = ${sub_two}
           database = ${sub_three};`
 console.log(mern);                //table repreted

//undefined
var x;
console.log(x);                //undefined
var x1;   
console.log(x1);               //undefined
var javascript;
console.log(javascript);       //undefined

// null
var x=null;
console.log(x);              //null
var x1=null;
console.log(x1);             //null
var subject=null
console.log(subject);       //null

// ==job         //===job&dwork
console.log(undefined == undefined);          //true
console.log(undefined === undefined);         //true
console.log(null == null);                    //true
console.log(null === null);                   //true
console.log(undefined == null);               //true
console.log(undefined === null);              //false

// bigint
// suffix with "n"    //> 2^53 - 1
var bigint ="12345678901234567890123456789012345678909876543210987654321098765432109876543210";
console.log(bigint);   //12345678901234567890123456789012345678909876543210987654321098765432109876543210

var bigint =12345678901234334134344757235321813574325211234325435412354546556656767712370;
console.log(bigint);    //1.2345678901234333e+76

var bigint = 12345678901234334134344757235321813574325211234325435412354546556656767712370n;
console.log(bigint);    //12345678901234334134344757235321813574325211234325435412354546556656767712370n

