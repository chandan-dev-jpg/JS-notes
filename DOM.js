// "The DOM (Document Object Model) is a tree-like representation of an HTML document that enables JavaScript to access and manipulate web page elements dynamically."

let list = document.getElementById("list");

list.innerHTML = `
<li>Mango</li>
<li>Banana</li>
<li>Orange</li>
`;
console.log(list)