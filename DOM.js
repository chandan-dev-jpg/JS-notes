// "The DOM (Document Object Model) is a tree-like representation of an HTML document that enables JavaScript to access and manipulate web page elements dynamically."

let btn = document.getElementById("themeBtn");
let box = document.getElementById("box");

btn.addEventListener("click", function () {
    box.classList.add("dark");
    console.log(box)
});