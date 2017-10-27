// block_1a, why you need to use "this" in object
var prof = {
    "firstname": "ilker",
    "lastname": "kiris",
    "getFullname": function() {
        return prof.firstname + " " + prof.lastname;
    }
};
console.log("prof.getFullname:" + prof.getFullname());


var prof2 = prof;
prof = {};
console.log("prof2.getFullname:" + prof2.getFullname());

// block_1b NOTE "this" in an object is the object itself
var profThis = {
    "firstname": "ilker",
    "lastname": "kiris",
    "getFullname": function() {
        return this.firstname + " " + this.lastname;
    }
};
console.log("profThis.getFullname:" + profThis.getFullname());

var profThis2 = profThis;
profThis = {};
console.log("profThis2.getFullname:" + profThis2.getFullname());


// block_2 this in a function (if not in strict mode) is the this at point of its invocation
// block_2a NOTE this of a not strict function that is invoked from global scope is window
function funcNotStrict() {
    console.log('funcNotStrict this:' + this);
    return this;
}
funcNotStrict();

// block_2b NOTE this of strict function that is invoked from main is undefined. So if the function needs window of global scope, pass it in
function funcUseStrict(_self) {
    'use strict';
    console.log('funcUseStrict this:' + this);
    console.log('funcUseStrict _self:' + _self);
    return this;
}
funcUseStrict(this);

// block_3 NOTE this in a constructor function is the object the new creates
function Student(_name, _lastname) {
    this.name = _name,
        this.lastname = _lastname,
        this.getFullname = function() {
            return this.name + " " + this.lastname;
        },
        this.call_funcNotStrict = function() {
            console.log("in call_funcNotStrict this:" + this);
            return funcNotStrict();
        },
        this.call_funcUseStrict = function() {
            return funcUseStrict(this);
        }
}
var student1 = new Student('John', 'Doe');
console.log("student1:" + student1.getFullname());

// block_4 why you need to pay attention to value of this in a function
//         NOTE this of a function is the object that "owns" that function. In case of funcNotStrict and funcUseStrict the "owning" object is "global object", which is "window" for browser and "global" for nodeJS
var student2 = new Student('Al', 'Bonehead');
console.log("student2:" + student2.getFullname());
console.log("student2.call_funcNotStrict():" + student2.call_funcNotStrict());
console.log("student2.call_funcUseStrict():" + student2.call_funcUseStrict());

// block_5 NOTE using changeButtonId_1() in below does nothing, because "this" of changeSelf function is the window, which does not have innerHTML nor style attributes, not the button we were hoping.
//         using changeButtonId_2()  works, because we pass the button element of interest to it
//         using changeButtonId_1b() works, because "call" function sets its 1st input as the value of this in called function and just passes rest of args to function
//         using changeButtonId_1c() works, because "apply" function sets its 1st input as the value of this in called function and parses the 2nd arg of array to be args for function
//         using changeButtonId_1d() works, because invoking bound version of changeThis function, whose this is bound to button
window.onload = changeButtonId_1c(); // changeButtonId_1()  or changeButtonId_2() or changeButtonId_1b() or changeButtonId_1c() or changeButtonId_1d()

// another example to why you need to pay attention to what "this" is pointing to in a function
function changeButtonId_1() {
    var _button = document.getElementById("buttonId");
    debugger;
    _button.onclick = function() {
        // NOTE although when we call below function, "this" points to _button object, when we are in the function it will not
        changeThis();
    };
}

function changeButtonId_2() {
    var _button = document.getElementById("buttonId");
    debugger;
    _button.onclick = function() {
        changeSelf(_button);
    };
}

function changeButtonId_1b() {
    var _button = document.getElementById("buttonId");
    debugger;
    _button.onclick = function() {
        changeThis.call(this, "input1", "input2");
    };
}

function changeButtonId_1c() {
    var _button = document.getElementById("buttonId");
    debugger;
    _button.onclick = function() {
        changeThis.apply(this, ["inp1", "inp2"]);
    };
}

function changeButtonId_1d() {
    var _button = document.getElementById("buttonId");
    debugger;
    _button.onclick = function() {
        var changeThisBound = changeThis.bind(_button);
        changeThisBound("inp1", "inp2");
    };
}

function changeThis(_inp1, _inp2) {
    console.log("in changeThis with _inp1:" + _inp1 + ", _inp2:" + _inp2);
    debugger;
    this.style = "color:blue";
    this.innerHTML = "button innerHTML changed";
}

function changeSelf(_self) {
    debugger;
    _self.style = "color:red";
    _self.innerHTML = "button innerHTML changed REALLY";
}

// block_6 NOTE "this" of a function that is created as part of global object "window" is window. Not the element onClick event was fired
function myButtonClick() {
    console.log("in myButtonClick this:" + this);
    this.style = "color:blue";
    this.innerHTML = "button innerHTML changed";
}

// block_7 NOTE "this" of function expression declared in context of an element is that element
document.getElementById("buttonId3").addEventListener("click", function() {
    console.log("in anonymous function to handle click event of buttonId3, this:" + this);
    this.style = "color:blue";
    this.innerHTML = "buttonId3 innerHTML changed";
})

// block_8 NOTE "this" of functions declared in context of an object is that object.
//              With prototypical inheritance, "this" will also include this.__proto__ , so basically inherited things are there in "this" as well
var parentUsedToSetPrototypeOfChild = {
    parentName: 'Baba'
}
var child = Object.create(parentUsedToSetPrototypeOfChild);
child.getParentName = function() {
    console.log("in child.getParentName this:" + this);
    console.log("in child.getParentName this__proto__:" + this.__proto__);
    return this.parentName;
}
child.childName = "Child";
child.getChildName = function() {
    return this.childName;
}
console.log("child's parentName:" + child.getParentName());
console.log("child's childName:" + child.getChildName());

/**
 * Summary of "this"
 * 1) "this" of functions declared in global object context in browswer will be "window". In nodeJS will be "global"
 * 2) However, in strict mode, the value of "this" for above will be undefined
 * 3) "this" of functions declared in an object's context will be that object
 * 4) "this" in a constructor function will be the object that is being created with "new" operator that is using the constructor function
 * 5) "this" of a function declared in global object context will be "window" regardless of what was value of "this" when that function was invoked
 * 6) invoking a function via "call" or "apply" allows one to pass the "this" as 1st extra input and behind the scenes set this of invoked function
 * 7) "bind" can be used to return a bound function, whose "this" will be set to what is passed into "bind"
 * 8) "this" of functions invoked via "setTimeout" are global object, which is "window" in browser, "global" in nodeJS
 * 9) "this" of event handling function declared in global object context that is assigned in html, will be global object "window"
 * 10) "this" of anonymous function declared with programmatic DOM even registration will be the element that fired the event
 * 11) "this" of objects with prototypical inheritance, includes inherited things via this.__proto__ 
 */