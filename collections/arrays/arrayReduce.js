/**
 * Turns an entire array into one value. All this means is that it
 * loops through every element in the array, does something
 * with them and returns a final value. 
*/

function addTogether(total, num) {
    return(total + num);
}

var myArray = [2, 3, 5, 110];
console.log( myArray.reduce(addTogether) );
// => 120