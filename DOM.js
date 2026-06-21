// "The DOM (Document Object Model) is a tree-like representation of an HTML document that enables JavaScript to access and manipulate web page elements dynamically."

let btn=document.getElementById('Btn');

function showAlert()
{
alert("Button Clicked");
}

btn.addEventListener("click",showAlert);

 // Remove click event after 3 seconds
    setTimeout(() => {
        btn.removeEventListener("click", showAlert);
        console.log("Click event removed");
    }, 3000);
    console.log(btn)