/*
In this little assignment you are given
a string of space separated numbers, and
have to return the highest and lowest number.

Example:
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes:
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

function highAndLow(numbers){
    let arr = numbers
        .split(" ")
        .map(item => parseInt(item));
    let max = arr.reduce((max, current) => {
        if(current > max)
        {
            max = current;
            return max;
        }
        return max;
    }, arr[0]);
    let min = arr.reduce((min, current) => {
        if(current < min)
        {
            min = current;
            return min;
        }
        return min;
    }, arr[0]);

    return max.toString() + " " + min.toString();
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));

