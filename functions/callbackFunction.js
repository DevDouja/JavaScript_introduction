/**
 * A callback function is a function passed into another function as an
 * argument, which is then invoked inside the outer(externa) function to
 * complete some kind of routine or action.
 */
const booksDb = [
    {
        id:1,
        title: "clean Code"
    },
    {
        id:2,
        title: "The pragmatic programmer"
    },
    {
        id:3,
        title: "Web Development with Node.js"
    }
];

function getBookById(id, callBack){

    //find the book with the id in the array 
    const book = booksDb.find( book => book.id === id );

    //if book doesn't exist
    if(!book){
        const error = new Error();
        error.message = "Book not found!"
        return callBack(error);
    }
    // if book exist
    callBack(null,book);
}

getBookById(5 , (error,book)=>{

    if(error){
        return console.log(error.message);
    }

    return console.log(book);
});
