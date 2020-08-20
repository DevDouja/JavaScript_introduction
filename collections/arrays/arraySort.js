
// example 1 - sorting strings
const names = ['lina', 'souraya', 'sara', 'miriam', 'zoe'];

// names.sort();
names.reverse();
console.log(names);

// example 2 - sorting numbers
const scores = [10, 50, 20, 5, 35, 70, 45];

// scores.sort();
scores.reverse();
console.log(scores);

// example 3 - sorting objects
const players = [
  {name: 'lina', score: 20},
  {name: 'souraya', score: 10},
  {name: 'sara', score: 50},
  {name: 'zoe', score: 30},
  {name: 'miriam', score: 70}
];

// players.sort((a,b) => {
//   if(a.score > b.score){
//     return -1;
//   } else if (b.score > a.score){
//     return 1;
//   } else {
//     return 0;
//   }
// });

players.sort((a,b) => b.score - a.score);

console.log(players);