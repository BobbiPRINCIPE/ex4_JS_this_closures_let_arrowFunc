// block_1, no closures, function using a global variable
var counter1_global = 0;

function incrementCounter1() {
    return counter1_global += 1;
}

function func4onClick_noClosures_1() {
    document.getElementById("pNoClosure_1").innerHTML = incrementCounter1();
}

// block_2, no closures, function using a local variable
function incrementCounter2() {
    var counter2_local = 0;
    return counter2_local += 1;
}

function func4onClick_noClosures_2() {
    document.getElementById("pNoClosure_2").innerHTML = incrementCounter2();
}

// block_3, "closures" = "lexical environment/context"(the context when a function was created) + function
// NOTE ilker, will local variables of makeClosuredFunc_1; _inp_title and name still linger around when alertNameLastname is executed later?
function makeClosuredFunc_1(_inp_title) {
    var _name = "ILKER";

    // NOTE ilker, there are really 3 scopes in JS; 
    // 1) global scope, like; counter1_global
    // 2) local function scope, like; _inp_lastname, unUsedLocalVar
    // 3) "lexicon context"(the creation context), meaning variables of function in which an inner function is created. Like _name
    function alertNameLastname(_inp_lastname) {
        var unUsedLocalVar = "I'm not used";
        alert(_inp_title + " " + _name + " " + _inp_lastname);
    }
    return alertNameLastname;
}

// NOTE ilker making 2 closures in here
function func4onClick_closures_1() {
    var alertFunc_1 = makeClosuredFunc_1('Dr.');
    alertFunc_1('Kiris');

    var alertFunc_2 = makeClosuredFunc_1('Mad Scientist ');
    alertFunc_2('KIRIS');
}

// block_4, "closures" = "lexical environment/context"(the context when a function was created) + function
// NOTE ilker, using IIFE to initialize incrementCounter3, which is put on global scope, as a closure
var incrementCounter3 = (function makeClosuredIncrementCounter(_inp_initialCount) {
    var _counterInClosure = _inp_initialCount;

    function incrementCounterInClosure(_inp_incrementWith) {
        return _counterInClosure += _inp_incrementWith;
    }
    return incrementCounterInClosure;
})(0); // passing 0 input as _inp_initialCount

function func4onClick_closures_2(_inp_incrementWith) {
    document.getElementById("pClosure_2").innerHTML = incrementCounter3(_inp_incrementWith);
}

// block_5, "closures" = "lexical environment/context"(the context when a function was created) + function
// NOTE ilker, using IIFE to initialize countersInClosure, which is put on global scope, as object with 3 closures
var countersInClosure = (function() {
    var _privateCounter = 0;

    function _changeBy(_val) {
        _privateCounter += _val;
    }

    return {
        increment: function() {
            _changeBy(1);
        },
        decrement: function() {
            _changeBy(-1);
        },
        getCounterValue: function() {
            return _privateCounter;
        }
    };
})();
// use above closure
function func4onClick_closures_3_increment() {
    countersInClosure.increment();
    document.getElementById("pClosure_3").innerHTML = countersInClosure.getCounterValue();
}

function func4onClick_closures_3_decrement() {
    countersInClosure.decrement();
    document.getElementById("pClosure_3").innerHTML = countersInClosure.getCounterValue();
    document.getElementById("pClosure_3").onclick = function(_event) {
        console.log('pClosure_3 was clicked');
    }
}