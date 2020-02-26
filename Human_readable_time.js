/*
Write a function, which takes a non-negative integer (seconds)
as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)
 */

function humanReadable(seconds) {
    let hours = 0;
    let minutes = 0;
    let newSeconds = seconds;
    if(seconds > 59) {
        minutes = Math.trunc(seconds / 60);
        newSeconds = Math.trunc(seconds % 60);
    }
    if(minutes > 59) {
        hours = Math.trunc(minutes / 60);
        minutes = Math.trunc(minutes % 60);
    }
    let returnString = "";
    if(hours < 10) returnString += "0";
    returnString += hours + ":";
    if(minutes < 10) returnString += "0";
    returnString += minutes + ":";
    if(newSeconds < 10) returnString += "0";
    returnString += newSeconds;

    return returnString;
}

console.log(humanReadable(0));
console.log(humanReadable(5));
console.log(humanReadable(60));
console.log(humanReadable(86399));
console.log(humanReadable(359999));