const repeatString = function(str = "", number) {
    let fullStr = "";
    if(number < 0){
        return "ERROR"
    }
    for(let i = 1; i <= number; i++){
        fullStr += str;
    }
    return fullStr;
}

module.exports = repeatString
