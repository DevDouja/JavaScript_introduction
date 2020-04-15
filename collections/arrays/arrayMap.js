
/**
 * This is an array method then iterates over an array and performs a specified
 * statment on every element of the array and stores the result in a new array
 * 
 * The Map method executes a statement on each element of an array and stores
 * them in a new array.
 * 
 * The map method itself does not mutate the original array, this means that the
 * original array is left untouched by the map method.
 */

// A function to square all the numbers in an array
const unSquaredArray = [1, 2, 3, 4, 5];
const squaredArray = unSquaredArray.map(item => item * item);
console.log("squaredArray", squaredArray) // [1, 4, 9, 16, 25]


// A function to divide all even numbers in an array by 2
const numberArray = [4, 6, 7, 8, 9]
const formattedArray = numberArray.map(number => {
    if (number % 2 === 0) {
      return number/2;
    }
    return number;
});

console.log("\nnumberArray", numberArray)
console.log("formattedArray", formattedArray) // [2, 3, 7, 4, 9]

console.log("\n******** Iterate an object *******");
//A map function can also be used to reformat an array of objects.
const humans = [
    { name: "katti", age: 7},
    { name: "Lina", age: 16},
    { name: "Jana", age: 23},
    { name: "María", age: 17},
    { name: "LIII", age: 80},
]

const formattedHumansArray = humans.map(human => {
    if(human.age <= 12) {
      return `${human.name} is a child`;
    } else if(human.age > 12 && human.age <= 19) {
      return `${human.name} is a teenager`;
    } else {
      return `${human.name} is an adult`;
    }
})

console.log('The object humans',humans);
console.log('New array of humans',formattedHumansArray);
 