/**
 * The XMLHttpRequest.readyState property returns the state an XMLHttpRequest client is in:
 * 0,1,2,3,4
 */
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
  // console.log(request);
  if(request.readyState === 4 && request.status === 200){
    console.log(request.responseText);
  } else if (request.readyState === 4){
    console.log('could not fetch the data');
  }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
request.send();