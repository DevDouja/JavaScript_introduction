/**
 * This method basically checks that at least one element in an array passes the specified
 * test and returns true to that effect.
*/

console.log("\n******** Includes prime numbers?  *******");

const array = [4, 6, 7, 8, 9];


/*const isPrimeNumber = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}*/

console.log(array.some(number => number%2 !== 0)); // true

console.log("\n******** Includes vowels?  *******");
const letters = [ 'r', 's', 't', 'u', 'n', 'd'];
console.log(letters.some(letter => 'aeiou'.includes(letter))); //true