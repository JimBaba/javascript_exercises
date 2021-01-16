const removeFromArray = function(arr, ...rmv) {
    
    const args = [...rmv];
  
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < args.length; j++){
        if(arr[i] === args[j]){
          console.log("found " + arr[i]);
          arr.splice(i,1);
          i--;
  
        }
      }
    }
    
    return arr
  }
  
  module.exports = removeFromArray
  