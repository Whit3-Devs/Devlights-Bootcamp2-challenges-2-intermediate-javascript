function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  let flag = true;
  for (let i = 0;i < arr.length -1; i++){
    flag = true
    let arrayItem = arr[i];
    for (let item of arrayItem){
      if(item === elem){
        flag = false;
        break;
      }

    }

    if(flag){
      let cacheArray = arrayItem;
      newArr.push(cacheArray)
   }

  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));