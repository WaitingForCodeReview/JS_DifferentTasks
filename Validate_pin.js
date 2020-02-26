/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes
cannot contain anything but exactly 4 digits or exactly
6 digits. If the function is passed a valid PIN string,
return true, else return false.

eg:
validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false

Note:
Try not to use RegExp.
 */

function validatePIN (pin) {
    let arr = pin.split("").map((item) => parseInt(item));
    if((arr.length == 4) || (arr.length == 6))
    {
        if(arr.some(isNaN)) return false;
        return true;
    }
    return false;
}

console.log(validatePIN("1234"));
console.log(validatePIN("12345"));
console.log(validatePIN("a234"));