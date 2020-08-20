// undefined and null both represent a complete lack of value
// the ony difference is that Null is an intentional lack of value but undefined isn't

// when we declare a variable without a value, it's automatically  has a value of undefined
let age;
console.log(age, age + 3, `the age is ${age}`); // undefined NaN the age is undefined

// we explicitly set null as a value of score that's mean is empty
let score = null;
console.log(age, age + 3, `the score is ${score}`); // null  3  the age is null
