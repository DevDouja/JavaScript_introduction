

function foo(){

    setTimeout(() => console.log(1),3000);

    console.log(2);

    setTimeout(() => console.log(3),3000);

    console.log(4);

}

foo();
