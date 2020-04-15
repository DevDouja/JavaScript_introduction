/**
 * Array.prototype.filter()
 * The filter() method creates a new array with all elements that pass the
 * test implemented by the provided function.
 * 
 * the filter() method doesn't mutate the original array instead it creates
 * a new array and stores the elements of the previous array
 * that pass the condition set.
 * 
 * It doesn't mutate the original array
*/

//We could achieve this with a for ... loop by doing this:
console.log("\n******** filter array  by loop *******");
const numbers = [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbers = [];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i]%2 === 0) {
    newNumbers.push(numbers[i])
  }
}

console.log(newNumbers) // [2, 4, 6, 8, 10]

console.log("\n******** filter by array by  Array.prototype.filter() *******");
const numbersArray = [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbersArray = numbersArray.filter(number => number%2 === 0);

console.log(evenNumbersArray) // [2, 4, 6, 8, 10]

console.log("\n******** Filter an object *******");

const animals = [
    { name: "duck", type: "pet"},
    { name: "panther", type: "wild"},
    { name: "Rabbits", type: "pet"},
    { name: "cat", type: "pet"},
    { name: "fish", type: "pet"},
    { name: "lion", type: "wild"},
    { name: "fox", type: "wild"}
  ]
  
  const petAnimals = animals.filter(animal => animal.type === "pet");
  console.log(petAnimals);
