function hasTargetSum(array, target) {
  // Write your algorithm here
  const obj = {}
  for(const num of array){
    const found = target - num;
    if(obj[found]){
      return true;
    }
    obj[num] = true;
  }
  return false
  
}

/* 
  Write the Big O time complexity of your function here
  o(n)
*/

/* 
  Add your pseudocode here
  buld an object to keep track of the numbers that we gone through
  iterate through the array
  create a variable to store a value that add up to our target
  return true if the value is found
  else return false

*/

/*
  Add written explanation of your solution here
  create an object to keep track of the numbers in the array
  that we have gone through
  For every number in the array, 
  subtract it from the target and check if the remainder exists in the array
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 34));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 3, 4, 5], 10));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1], 1));
}

module.exports = hasTargetSum;
