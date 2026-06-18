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

// let apiUrl="https://jsonplaceholder.typicode.com/todos";

// async function getUser(api) {
//  let response=await fetch(ap

//  let todos=await response.json();

//  let comp=todos.filter(todo=>todo.completed===true);

//  console.log(comp);
// }

// getUser(apiUrl);

// !async It allows a task to run in the background without stopping the rest of the program.
// !await is used to wait for a Promise to finish before moving to the next line.

//? 6
// let apiUrl="https://jsonplaceholder.typicode.com/todos";

// async function getUser(api)
// {
// let response=await fetch(api);
// let todos=await response.json();

// let com=todos.filter(todo=>todo.completed===false);
// console.log(com);
// }
// getUser(apiUrl);


//?7
// let apiUrl = "https://jsonplaceholder.typicode.com/comments";

// async function getUser(api) {
//     let response = await fetch(api);
//     let comments=await response.json();
    
//     let posts=comments.filter(comment=>comment.postId===3);
//     console.log(posts);

// }

// getUser(apiUrl);

//? 8
// let apiUrl="https://jsonplaceholder.typicode.com/comments";

// async function getUser(api) {
//     let response=await fetch(api);
//     let comments=await response.json();
    
//     let emails=comments.filter(comment=>comment.email.endsWith(".biz"));
//     console.log(emails)
// }
// getUser(apiUrl);

//?9

// let apiUrl="https://jsonplaceholder.typicode.com/albums";

// async function getUser(api) {
//     let response=await fetch(api);
//     let albums=await response.json();

//     let users=albums.filter(album=>album.userId===2);
//     console.log(users);

// }

// getUser(apiUrl);

//?10 

// let apiUrl="https://jsonplaceholder.typicode.com/photos";

// async function getUser(api) {

//     let response=await fetch(api);
//     let photos=await response.json();
    
//     let Photo=photos.slice(0,5);

//     console.log(Photo);
// }
// getUser(apiUrl);


//?11
// let apiUrl="https://jsonplaceholder.typicode.com/posts";

// async function getUser(api)
// {
//     let response=await fetch(api);
//     let posts=await response.json();

//     let post=posts.filter(post=>post.title.toLowerCase().startsWith("s"));
//     console.log(post)
// }
// getUser(apiUrl)

//?12

// let apiUrl="https://jsonplaceholder.typicode.com/users";

// async function getUser(api)
// {
// let response=await fetch(api);
// let users=await response.json();

// let emails=users.filter(user=>user.email.includes("blz"));
// console.log(emails);
// }
// getUser(apiUrl);

//?13

// let apiUrl="https://jsonplaceholder.typicode.com/comments";

// async function getUser(api) {
//     let response=await fetch(api);
//     let comments=await response.json();

//     let comment=comments.slice(0,10);
//     console.log(comment);
    
// }
// getUser(apiUrl);

//?14

// let apiUrl="https://jsonplaceholder.typicode.com/todos";

// async function getUser(api)
// {
// let response=await fetch(api);
// let Users=await response.json();

// let titles=Users.filter(todo=>todo.title.toLowerCase().includes("est"));
// console.log(titles);

// }

// getUser(apiUrl);


//?15 

// let apiUrl="https://jsonplaceholder.typicode.com/photos";

// async function getUser(api)
// {
//     let response=await fetch(api);
//     let Users=await response.json();

//     let Photos=Users.slice(-7);
//     console.log(Photos)

// }
// getUser(apiUrl);