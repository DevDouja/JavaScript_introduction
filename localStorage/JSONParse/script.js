const todos = [
    {text: "go shopping", "author": "lina"},
    {text: "play tennis with miriam", "author": "lina"},
    {text: "go running", "author": "lina"}
  ];
  
  // console.log(JSON.stringify(todos));
  localStorage.setItem('todos', JSON.stringify(todos));
  
  const stored = localStorage.getItem('todos');
  // console.log(stored);
  
  console.log(JSON.parse(stored));