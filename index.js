// function hasTargetSum(array, target) {
//   let integers={};
//   pairIntegers = [];
  
// for (let index=0; index<array.length; index++){
//     if (integers[array[index]]){
//         pairIntegers.push([integers[array[index]], array[index]])
//     }else{
//         integers[target-array[index]]=array[index];
//     }
// }
// return pairIntegers;
// }

function hasTargetSum(array, target) {
for (let startIndex=0; startIndex<array.length; startIndex++){
  // alternatively --- declare const remainder = target-array[startIndex];
  for (let endIndex=startIndex+1; endIndex<array.length; endIndex++){
    // alternatively --- if (array[endIndex]=== remainder)
    if (array[startIndex]+array[endIndex] === target)
  return true;
  }
}
return false;
}
/* 
  Write the Big O time complexity of your function here
  O(n to power 2)
*/

/* 
  Add your pseudocode here...

  the function hasTargetSum should have an argument that iterates through the given array
  then returns true if the sum of any two numbers in the array is equal to the target integer

  */

/*
  Add written explanation of your solution here...
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
}

module.exports = hasTargetSum;
