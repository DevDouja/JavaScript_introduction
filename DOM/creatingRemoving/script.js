const ul = document.querySelector("ul");
// ul.remove();

const button = document.querySelector("button");

button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "something new to do";
  //ul.appendChild(li);
  ul.prepend(li);
});

const items = document.querySelectorAll("li");

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    // e.target.style.textDecoration = 'line-through';
    e.target.remove();
  });
});

// console.log(content.innerHTML);
// content.innerHTML = '<h2>this is a new h2</h2>';

// content.innerHTML += '<h2>this is an h2 added to the content</h2>';

const people = ["sara", "lina", "miriam"];

people.forEach((person) => {
  content.innerHTML += `<p>${person}</p>`;
});
