// block_1a NOTE "var" variable myVar is hoisted, so does not throw exception, but it is used on line 5 before it is initialized on line 6. So its value is undefined in funcExpression1
var funcExpression1 = function() {
    console.log("in funcExpression1 myVar:" + myVar);
};
funcExpression1();
var myVar = 11;

/*
// block_1b NOTE "let" variable myLet is not hoisted, so throw exception
var funcExpression1b = function() {
    console.log("in funcExpressionf1b myLet:" + myLet);
};
funcExpression1b();
let myLet = 12;
*/

// block_2a NOTE "var" variable declared in a for loop, is available after the for loop code block
var funcExpression2 = function() {
    for (var i = 1; i < 5; i++) {
        console.log("in funcExpression2 IN for loop with i:" + i);
    }
    console.trace("in funcExpression2 AFTER for loop with i:" + i)
}
funcExpression2();

// block_2b NOTE "let" variable declared in a for loop, is not available after the for loop code block
var funcExpression2b = function() {
    for (let i = 1; i < 5; i++) {
        console.log("in funcExpression2b IN for loop with i:" + i);
    }
    // console.trace("in funcExpression2b AFTER for loop with i:" + i); // TODO unCommentMe and see
}
funcExpression2b();

// block_3 const has to be initialized at declaration time, and can not be changed afterwards
var myVar1 = "thisWasValue";
myVar1 = "nowThisValue_noProblem";
var myVar2;
myVar2 = "justInitialized";
//
const myConst1 = "thisIsIt_noChangingValueViaAssignment";
// TODO unCommentBelow2lines and see
// const myConst2; // NOTE this line throws error, because const variables have to be initialized at declaration time
// myConst2 = "no such thing as I will initialize it later";
// NOTE changing things in a const object is perfectly fine, just you can not assign it to a new object
const myConstObject = {
    attr1: "val1"
}
myConstObject.attr1 = "val1_new";
myConstObject.attr2 = "val2 just added";

// block_4 "let" can let you do things without "closure"
// get hold of OL element from html, then dynamically (in the code) fill the OL with LI elements
var myOrderedList = document.getElementById("myOrderedList");
// here is magic of "let" letting us sort of create a code scoped anonymous closure behind the scenes
for (let index = 1; index <= 5; index++) {
    // create LI element
    let myLi = document.createElement('li');
    myLi.appendChild(document.createTextNode("LI_" + index));

    // add even handling to above created LI element
    myLi.onclick = function(ev) {
        console.log("LI " + index + " is clicked");
    };
    // add above LI to OL
    myOrderedList.appendChild(myLi);
}
// here is without "let" magic, forced to create our closure and pay attention which variable is in closure, which is not
for (var indexVar = 6; indexVar <= 10; indexVar++) {
    // create LI element
    var myLiVar = document.createElement('li');
    myLiVar.appendChild(document.createTextNode("LI_" + indexVar));

    // NOTE_1 using below IIFE to create a closure that will contain myLiVar, so not passing it into IIFE execution
    // NOTE_2 however indexVar is not contained in the closure, it is effectively above the for loop block, so have to pass it to IIFE, otherwise it will be what is its final value after loop is done
    (function(_index) {
        // add even handling to above created LI element
        myLiVar.onclick = function(ev) {
            console.log("LI :" + _index + " is clicked");
            console.log("LI indexVar:" + indexVar + " is clicked");
        };
    })(indexVar);
    // add above LI to OL
    myOrderedList.appendChild(myLiVar);
}




/* Summary let;
 * 0) "let" and "const" was introduced in ES6 (ECMA 2015)
 * 1) "var" variables are hoisted
 * 2) "let" variables are not hoisted
 * 3) scope of "var" variables is either global or function
 * 4) scope of "let" variables is just the code block let is in
 * 5) "const" variables are constant, they have to be initialized at time of declaration and can not be assigned to a new value
 * 6) changing things in a const object is perfectly fine, just you can not assign it to a new object
 * 7) "let" can allow you to not create closures when inner functions are used - see block_4 above
 */