/*
This time we want to write calculations using functions
and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:
There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
 */

function zero   (calculate) { return calculate ? calculate(0) : 0}
function one    (calculate) { return calculate ? calculate(1) : 1 }
function two    (calculate) { return calculate ? calculate(2) : 2 }
function three  (calculate) { return calculate ? calculate(3) : 3 }
function four   (calculate) { return calculate ? calculate(4) : 4 }
function five   (calculate) { return calculate ? calculate(5) : 5 }
function six    (calculate) { return calculate ? calculate(6) : 6 }
function seven  (calculate) { return calculate ? calculate(7) : 7 }
function eight  (calculate) { return calculate ? calculate(8) : 8 }
function nine   (calculate) { return calculate ? calculate(9) : 9 }


function plus(y)  { return function (x) { return x + y} }
function minus(y) { return function (x) { return x - y} }
function times(y) { return function (x) { return x * y} }
function dividedBy(y) {
    return function (x) {
        return y === 0 ? 'division by zero' : Math.floor(x / y)
    }
}

console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));