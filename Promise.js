let promise=new Promise((resolve,reject)=>
{
let success=false;
if(success)
{
resolve("Task completed");
}else{
reject("Task failed");
}
});
promise
.then((result)=>
{
    console.log(result);
})
.catch((error)=>
{
console.log(error)
});