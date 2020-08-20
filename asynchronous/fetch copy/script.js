// fetch API
/**
 * JavaScript Fetch API provides a simple interface for fetching resources.
 * is the newest standard for handling network requests
 * The fetch() method is available in the global window scope, with the first parameter being the URL you
 * want to call. By default, the Fetch API makes a GET request.
 * The fetch() method returns a promise that calls the then() method with response object when fulfilled.
 * The response object has several methods to handle the response the way we want to do:
 *  - json() — Resolves the promise with a JSON object
 *  - ext() — Resolves the promise with plain text
 *  - blob() — Resolves the promise with a Blob object
 *  - formData() — Resolves the promises with a FormData object
 */
fetch('json/sara.json').then(response => {
  console.log(response);
  return response.json();
}).then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
});