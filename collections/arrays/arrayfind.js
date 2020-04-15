/**
 * Array.find()
 * This method finds the first element of an array that satisfies a specified condition.
 * 
 * Array.find() is great when we want to find the first element
 * of an array that meets a particular criterion.
*/

//we want to find the first even number in this array
console.log("\n******** find the even number *******");
const arr = [1, 3, 5, 6, 7, 8, 9];
const even = arr.find(num => num%2 === 0);
console.log(even); //6

/**
 * The loop runs until it gets to 6 and it returns 6. In a scenario where no element 
 * in the array meets the criteria, it returns undefined.
*/

console.log("\n******** find the even number *******");
// array
const playerArr = [
    { name: "Badar", age: 8},
    { name: "Lina", age: 15},
    { name: "Jana", age: 22},
    { name: "Inass", age: 17},
]

console.log("\n******** find the first person who can buy a car *******");
//Find the first person in this array that is old enough to buy a car(18).
const firstEligibleCandidate = playerArr.find(player => player.age > 18);
console.log(firstEligibleCandidate) //{ name: "Nedy", age: 22}