
/**
 * A Promise is an object that contains a status, ([[PromiseStatus]]) and a value ([[PromiseValue]]). 
 * the PromiseStatus, can be one of three values:
 *  -fulfilled/resolved: The promise has been resolved. Everything went fine, no errors occurred within the promise 
 *  -rejected : The promise has been rejected.something went wrong..
 *  -pending: The promise has neither resolved nor rejected (yet), the promise is still pending.
 * The value of a promise, the value of [[PromiseValue]], is the value that we pass to the either
 * the resolved or rejected method as their argument.
 * there are built-in methods to get a promise's value. To a promise, we can attach 3 methods:
 *  .then(): Gets called after a promise resolved.  
 *  .catch(): Gets called after a promise rejected.
 *  .finally(): Always gets called, whether the promise resolved or rejected.
 * The .then method receives the value passed to the resolve method.
 * The .catch method receives the value passed to the rejected method
 */
const getTodos = (resource) => {

  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
  
      if(request.readyState === 4 && request.status === 200){
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4){
        reject('could not fetch the data');
      }
  
    });
    
    request.open('GET', resource);
    request.send();
  });

};

getTodos('json/sara.json').then(data => {
  console.log('promise resolved:', data);
}).catch(err => {
  console.log('promise rejected:', err);
});

// promise example
const getSomething = () => {

  return new Promise((resolve, reject) => {
    // do something (fetch data)
    // resolve('some data');
    reject('some error');
  });

};

// getSomething().then(data => {
//   console.log('promise resolved:', data);
// }, err => {
//   console.log('promise rejected:', err);
// });

// getSomething().then(data => {
//   console.log('promise resolved:', data);
// }).catch(err => {
//   console.log('promise rejected:', err);
// });