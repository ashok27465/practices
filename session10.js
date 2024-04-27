/* constructor functions 
 -> constructor functions used to create the "classes" like "structures" defore "es6"
 -> in constructor functions (variable and functions) should stort with "this" keyword
 ->this keyword reprsenting the "current" class numbers
 ->we will create the object with the help of "new" keyword
*/

// ex-1
function class_one() {
    this.sub_one = "reactjs";
    this.sub_two = "nodejs";
    this.sub_three = "mongodb"
};
let obj1 = new class_one();
console.log(
    obj1.sub_one,
    obj1.sub_two,
    obj1.sub_three
);                                              //reactjs nodejs mongodb
let obj2 = new class_one();
console.log(
    obj2.sub_one,
    obj2.sub_two,
    obj2.sub_three
);                                             //reactjs nodejs mongodb

// ex-2
function class_two() {
    this.wish = "angularjs",
        this.my_fun = function () {
            return `welcome to ${this.wish}`;
        };
};
let sub = new class_two();
console.log(sub.my_fun());                     //welcome to angularjs

// ex-3
function class_three() {
    this.var_one = "hello_1";
    this.var_two = "hello_2";
    this.var_three = "thello_3";

    this.fun_one = function () {
        return this.var_one
    };
    this.fun_two = function () {
        return this.var_two
    };
    this.fun_three = function () {
        return this.var_three
    };
};
let class1 = new class_three();
console.log(
    class1.fun_one(),
    class1.fun_two(),
    class1.fun_three()
);                                          //hello_1 hello_2 thello_3

// ex-4
function class_four(arg1, arg2, arg3) {
    this.var_one = arg1;
    this.var_two = arg2;
    this.var_three = arg3
};
let session = new class_four("ashok", "rajani", "rammya");
console.log(session.var_one, session.var_two, session.var_three);         //ashok rajani rammya

let session1 = new class_four("html", "css", "javascript");
console.log(session1.var_one, session1.var_two, session1.var_three);      //html css javascript

let com = new class_four();
console.log(session.var_one, session1.var_two, session1.var_three);        //ashok css javascript
console.log(session1.var_one, session.var_two, session1.var_three);        //html rajani javascript
console.log(session.var_one, session1.var_three, session.var_two);         //ashok javascript rajani
console.log(session.var_three, session1.var_one, session.var_one);         //rammya html ashok
console.log(session.var_two, session1.var_two, session.var_three);         //rajani css rammya

// ex-5
function class_five() {
};
class_five.prototype.var_one = "hello_1";
let five = new class_five();
console.log(five.var_one);                                 //hello_1

// ex-6
function class_six() {
};
class_six.prototype.sub = "javascript";
class_six.prototype.fun_one = function () {
    return "hello";
};
let six = new class_six();
console.log(
    six.sub,
    six.fun_one()
);                                                     //javascript hello


// ex-7
function class1_one() {
};
class1_one.prototype.var_one = "hello_1";
function class2_two() {
};
class2_two.prototype = Object.create(class1_one.prototype);
class2_two.prototype.var_two = "hello_2";
let seveen = new class2_two();
console.log(
    seveen.var_one,
    seveen.var_two
);                                                         //hello_1 hello_2