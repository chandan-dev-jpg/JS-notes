//?1
// let apiUrl="https://jsonplaceholder.typicode.com/users";

// async function fetchData(api)
// {
//     let response=await fetch(api);
//     let users=await response.json();

//     let names=users.map(user=>user.name);

//     names.forEach(name => {
//         console.log(name)
//     });
// }
// fetchData(apiUrl);

//?2
// let apiUrl="https://jsonplaceholder.typicode.com/users";

// async function fetchData(api)
// {
// let response=await fetch(api);
// let users=await response.json();

// let cites=users.filter(user=>user.address.city === "South Christy");

// console.log(cites)

// }
// fetchData(apiUrl);

//?3

// let apiUrl="https://jsonplaceholder.typicode.com/posts";

// async function getUser(api)
// {
// let response=await fetch(api);
// let users=await response.json();

// let userIds=users.filter(user=>user.userId==1);
// console.log(userIds);
// }

// getUser(apiUrl);

//?4

// let apiUrl="https://jsonplaceholder.typicode.com/posts";
// async function getUser(api) {
// let response=await fetch(api); 
// let users=await response.json();

// let titles=users.map(user=>user.title);
// console.log(titles);
// }
// getUser(apiUrl);

//? 5

let apiUrl="https://jsonplaceholder.typicode.com/todos";

async function getUser(api) {
 let response=await fetch(api);
 let todos=await response.json();
 
 let comp=todos.filter(todo=>todo.completed===true);

 console.log(comp);
}

getUser(apiUrl);