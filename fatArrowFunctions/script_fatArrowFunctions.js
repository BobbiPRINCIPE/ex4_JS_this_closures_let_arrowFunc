// block_1 conventional function expressions
var myFuncExpression_1A = function(_inp1) {
    return _inp1;
}
console.log(myFuncExpression_1A("inpVal_1"));
//
var myFuncExpression_1B = function() {
    return "myFuncExpression_1B_returnedStr";
}
console.log(myFuncExpression_1B());
//
var myFuncExpression_1C = function() {
    console.log("in myFuncExpression_1C");
}
console.log(myFuncExpression_1C());
//
var myFuncExpression_1D = function(_inp1) {
    console.log("in myFuncExpression_1D with _inp1:" + _inp1);
    return _inp1;
}
console.log(myFuncExpression_1D("inpVal_1"));
//
var myFuncExpression_2 = function(_inp1, _inp2) {
    console.log("in myFuncExpression_2 with _inp1:" + _inp1 + ", _inp2:" + _inp2);
    return _inp1 + "+" + _inp2;
}
console.log(myFuncExpression_2("inpVal_1", "inpVal_2"));


// block_2 function expressions using "fat arrow functions"
var myFuncExpressionFAF_1A = _inp1 => _inp1;
console.log(myFuncExpressionFAF_1A("inpVal_1"));
//
var myFuncExpressionFAF_1B = () => "myFuncExpressionFAF_1B_returnedStr";
console.log(myFuncExpressionFAF_1B());
//
var myFuncExpressionFAF_1C = () => {
    console.log("in myFuncExpressionFAF_1C");
}
console.log(myFuncExpressionFAF_1C());
//
var myFuncExpressionFAF_1D = _inp1 => {
    console.log("in myFuncExpressionFAF_1D with _inp1:" + _inp1);
    return _inp1;
}
console.log(myFuncExpressionFAF_1D("inpVal_1"));
//
var myFuncExpressionFAF_2 = (_inp1, _inp2) => {
    console.log("in myFuncExpressionFAF_2 with _inp1:" + _inp1 + ", _inp2:" + _inp2);
    return _inp1 + "+" + _inp2;
}
console.log(myFuncExpressionFAF_2("inpVal_1", "inpVal_2"));

// block_3
var timeout = 1000;
// using conventional functions
setTimeout(function() {
    console.warn("timeout function executed");
}, timeout);
// using "fat" "arrow functions"
setTimeout(() => console.trace("timeout FAF executed"), timeout * 2);

// block_4
// using a variable to hold "this" in the closure
function Bus1() {
    this.topSpeed = 50;
    var self = this;
    setTimeout(function() {
        self.topSpeed += 100;
        document.getElementById("pBus1").innerHTML = self.topSpeed;
    }, timeout * 3);
}
var myBus1 = new Bus1();

// using FAF then no need for a variable to hold this in closure
function Bus2() {
    this.topSpeed = 50;
    setTimeout(() => {
        this.topSpeed += 1000;
        document.getElementById("pBus2").innerHTML = this.topSpeed;
    }, timeout * 5);
}
var myBus2 = new Bus2();

/**
 * Summary "fat" "arrow functions" (FAF)
 * 1) with FAF you can have smaller code
 * 2) with FAF you can get around the restriction of "this" of anonymous functions in setTimeout, setInterval pointing to global object, "window", forcing you to hold "this" variable in another var hold in closure
 */