let email = "douja@gmail.com";

// find the last index of a specific character in a string
console.log("last index:", email.lastIndexOf("a"));

// to extract a slice of characters from a string
console.log("slice", email.slice(2, 10));

// like slice but the second argument specify how many characters you want to extract
console.log("substr", email.substr(4, 10));

// replace a certain characters in the string with a nother characters
// only replace the first character that finds
console.log("replace", email.replace("m", "w"));

// template strings
const title = "Best way to heal your soul";
const author = "Lina";
const likes = 100;

// concatenation way
console.log(
  "Concatenation way: ",
  "The blog called " + title + " by " + author + " has " + likes + " likes"
);

// template string way
console.log(
  "Template string: ",
  `The blog called ${title} by ${author} has ${likes} likes`
);

// creating html templates
let html = `
  <h2>${title}</h2>
  <p>By ${author}</p>
  <span>This blog has ${likes} likes</span>
`;
console.log(html);
