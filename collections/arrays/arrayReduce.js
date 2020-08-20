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

  
const numbers = [10, 20, 60, 40, 70, 50, 30];

const result = numbers.reduce((acc, curr) => {
  if(curr > 50){
    acc++;
  }
  return acc;
}, 0);

console.log(result);

const scores = [
    {player: 'lina', score: 50},
    {player: 'sara', score: 30},
    {player: 'lina', score: 70},
    {player: 'nour', score: 60}
  ];
  
  const linaTotal = scores.reduce((acc, curr) => {
    if(curr.player === 'lina'){
      acc += curr.score;
    }
    return acc;
  }, 0);
  
  console.log(linaTotal);