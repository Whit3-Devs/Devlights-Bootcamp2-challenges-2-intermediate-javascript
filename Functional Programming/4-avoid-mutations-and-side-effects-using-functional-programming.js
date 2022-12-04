// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line
  let value = () => {return fixedValue}
  return value() + 1;
  // Only change code above this line
}

console.log(incrementer())