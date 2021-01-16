const sumAll = function(x, y) {
 

    let sum = x+y;
    
    if(typeof x != "number" || typeof y != "number" || x < 0 
        || y < 0){
        return "ERROR"
    }

    if(x > y){
        let save = x;
        x = y;
        y = save;

    }
  
      for(let i = x + 1; i < y; i++){
        sum += i;
      }
    
      return sum;
    
    }
    
    module.exports = sumAll
    
  