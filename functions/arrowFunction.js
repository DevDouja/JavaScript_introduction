//regular function
function helloWorldRegular(name) {
    console.log('Hello Regular function with parm: ' + name);
}
helloWorldRegular('Lina');

//arrow function
/**
 * we're now declaring our arrow function as a variable. That's because
 * arrow functions are anonymous functions or functions that are
 * declared without a name.
 */
const helloWorldArrow = name => {
    console.log('Hello Arrow function with parm: ' + name);
}
helloWorldArrow('Lina');

/**
 * If you only have one parameter the parentheses are optional. If you don't
 * have any parameters then you'll need to use empty parentheses.
*/
const helloWorldMultiParm = (name, age) => {
    console.log('Hello arrow function multiParm: ' + name + ',' + age);
}
helloWorldMultiParm('Lina',3);

// Function arrow without parameters
const helloWorldZeroParm = () => {
    console.log("Hello I'm arrow function and I don't have parameters");
}
helloWorldZeroParm();

//implicite return 
const helloWorldSingleReturn = name => 'Hello '+ name +' single return';
console.log(helloWorldSingleReturn('arrow function'));