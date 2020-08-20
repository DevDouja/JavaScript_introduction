// async & await
/**
 * Asynchronous functions always return promises. It doesn't matter what you return. The returned value will always be a promise.
 * The await keyword lets you wait for the promise to resolve. Once the promise is resolved, it returns the parameter passed into the then call.
 * Only the async functions encountering await will be suspended, other functions - that don't depend on the awaited result - still run.
 */
const getTodos = async () => {

  let response = await fetch('json/lina.json');
  let data = await response.json();
  return data;

};

console.log(1);
console.log(2);

getTodos()
  .then(data => console.log('resolved:', data));

console.log(3);
console.log(4);

// console.log(getTodos());