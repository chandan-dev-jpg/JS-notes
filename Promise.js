// A Promise is an object that represents the result of an asynchronous operation that may complete in the future.

// let promise=new promise((resolve,reject)=>
// {
// let success=true;

// if(success)
// {
// resolve("Task Completed");
// }else{
//     reject("Task failed");
// }
// });

// promise
// .then((result) => {
//     console.log(result)
// })
// .catch((error) => {
//     console.log(error);
// });

//?1
// Question 1: Basic Promise

// Task: Create a Promise that resolves with "Hello World" and print it using .then().

// let promise=new Promise((resolve,reject)=>
// {
// resolve("hello world");
// });

// promise
// .then((result) => {
//     console.log(result)
// });

//?2
// 2. Promise Reject

// Create a Promise that rejects with "Something went wrong" and handle it using .catch().

// let promise=new Promise((resolve,reject)=>
// {
//     reject("Something went wrong");
// });

// promise.catch((Error)=>
// {
// console.log(Error)
// });

// 3. Check Number

// Create a Promise that:

// Resolves with "Even Number" if the number is even.
// Rejects with "Odd Number" if the number is odd.

// let promise=new Promise((resolve,reject)=>
// {
//     let num=prompt("Enter your number");
//     if(num%2==0)
//     {
// resolve("it is Even number");
//     }else{
// reject("it is Odd number");
//     }
// });
// promise
// .then((result)=>
// {
//     console.log(result);
// })
// .catch((Error)=>
// {
// console.log(Error);
// });

//?4
// Create a Promise that:
// Resolves with "Eligible to Vote" if age is 18 or above.
// Rejects with "Not Eligible to Vote" otherwise.

// let promise=new Promise((resolve,reject)=>
// {
// let age=prompt("Enter your age");
// if(age>=18)
// {
// resolve("Eligible to vote");
// }else{
// reject("Not eligible to vote");
// }
// });
// promise.then((result)=>{
// console.log(result);
// }).catch((Error)=>
// {
// console.log(Error);
// });

//?5
// Create a Promise that:
// Resolves with "Valid String" if string length is 5 or more.
// Rejects with "String Too Short" otherwise.


// let promise=new Promise((resolve,reject)=>
// {
// let str=prompt("Enter name");
// if(str.length>=5)
// {
// resolve("Valid String");
// }else{
//     reject("String Too Short");
// }
// });

// promise.then((result)=>
// {
//     console.log(result)
// }).catch((Error)=>
// {
// console.log(Error);
// });


//?6
// Create a Promise that:
// Resolves with "Leap Year" if the year is a leap year.
// Rejects with "Not a Leap Year" otherwise.
let promise=new Promise((resolve,reject)=>
{
    let year=prompt("Enter year");
if(year%4==0)
{
resolve("Leap Year");
}
else{
    reject("not a leap year");

}
});

promise.then((result)=>
{
    console.log(result)
}).catch((Error)=>
{
console.log(Error);
});

// ?7
// Create a Promise that:
// Resolves with "Username Valid" if username is not empty.
// Rejects with "Username Required" otherwise.



//?8
// Create a Promise that:
// Resolves with "Array Has Elements" if array is not empty.
// Rejects with "Array is Empty" otherwise.

