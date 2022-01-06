const removeFromArray = function(arr, toRemove) {
  let args = [...arguments];
  for (let i = 1; i < args.length; i++) {
    if (arr.indexOf(args[i]) === -1) continue
    while (arr.indexOf(args[i]) != -1){
      arr.splice(arr.indexOf(args[i]), 1);
    };
  };
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
