/**
 * A callback function is a function passed into another function as an
 * argument, which is then invoked inside the outer(externa) function to
 * complete some kind of routine or action.
 */
const booksDb = [
    {
        id: 1,
        title: "clean Code",
        authorId: 1
    },
    {
        id: 2,
        title: "The pragmatic programmer",
        authorId: 2
    },
    {
        id:3,
        title: "Web Development with Node.js",
        authorId: 2
    }
];

const authorDb = [
    {
        id:1,
        name: "Robert C. Martin"
    },
    {
        id:2,
        name: "Steve Forest"
    }

];

function getBookById(id){

    return new Promise((resolve, reject) =>{

        //find the book with the id in the array 
    const book = booksDb.find( book => book.id === id );

        //if book doesn't exist
        if(!book){
            const error = new Error();
            error.message = "Book not found!"
            reject(error);
        }
        // if book exist
        resolve(book);
    });
}

function getAuterById(id){

    return new Promise((resolve, reject) =>{
      
        const author = authorDb.find(author => author.id === id);
        //if author doesn't exist
        if(!author){
            const error = new Error();
            error.message = "Author not found!"
            reject(error);
        }
        // if author exist
        resolve(author);
    });
}

getBookById(1).then(book =>{
                    console.log(book);
                    return getAuterById(book.authorId);
                }).then(author => console.log(author))
              .catch(error => console.log(error.message));
