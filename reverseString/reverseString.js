const reverseString = function(str) {

    const arr = str.split("");
    arr.reverse();
    str = arr.join("");
    return str;



}

module.exports = reverseString
