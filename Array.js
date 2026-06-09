
/*
! An Array is used to store multiple values in a single variable.
? what is an Array : 
* it is Data structure : it is a way to structure the data so that we can perform Crud operation easily 

1. it is a non-primitive data  type
2. it stores in heap memory 
3. it pass by reference
4. In this u can store same DT values or different DT values 
5. there is no fixed size  in js 

? HW : in Js arrays stores in the form of ? 

todo : syntax : 

let arr = [1,2,3,4,5,6,7]

>> u can pass the one or more than one DT values , all the values should be enclosed in [] and all the values are separated by comma and assign this to the variable declaration 
*/

let num_arr = [1, 2, 3, 4, 5];
console.log(num_arr);

let str_arr = ["1", "2", "4"];
console.log(str_arr);

let boolean_arr = [true, false];
console.log(boolean_arr);

let primitive_DT_arr = [
  "number",
  "string",
  "boolean",
  "bigint",
  null,
  undefined,
  "symbol",
  true,
  false,
  22,
];

console.log(primitive_DT_arr);

console.clear();

// ? interview question
let arr = [];

console.clear();

/*
1. what is an array : 
2. how to create array in js 
let arr = [1,2,2,4,5]

3. in js - types of array ** 

4. CRUD OPERATION

create 
let arr = [1,2,3,6,7]

Read 
clg(arr)

Update

Delete


*/

// ! update

// todo : 1.  modification / replace / edit
//   we change  the existing value with new value
let arr_01 = [10, 20, 30];
console.log(arr_01);

// ? how to print 10 / first value of an array
// todo :  arrayName[indexValue]
// ! index value starts with : 0
// ! length starts with : 1

console.log(arr_01[0]); // value at 0th index in a arr_01 : 10

// ! i can assign the value as well
arr_01[0] = "new value";
console.log(arr_01); // ['new value' , 20 , 30]

console.log(arr_01[0]); // * new value

console.clear();
// todo: 2. insertion
// insert the new value or add the new value

console.log(arr_01);
let idx = arr_01.length;
console.log(idx);

arr_01[idx] = "insert new value at last";
console.log(arr_01);
console.clear();

// ! methods for - Upadation
//  unshift : Inserts new elements at the start of an array, and returns the new length of the array.

console.log(arr_01);

// ! insert the value at the 0th index / starting of an array
// arr_01.unshift("insert value at 0th index by unshift");

/*
! it adds / inserts the value in the starting of an array in the same sequence like
indexValue : value 
0          : "insert value at 0th index by unshift"
1          : "2" ,
2          : 3
*/
// arr_01.unshift("insert value at 0th index by unshift", "2", 3);
console.log(arr_01);

console.clear();

let arr_02 = [10, 20, 30];

console.log(arr_02); // [10,20 ,30]
arr_02.unshift(true);

console.log(arr_02); // [true , 10 , 20 , 30]

arr_02.unshift(true, false, true);

console.log(arr_02); // [true , false , true , true , 10 , 20 , 30]

// ?  what is the return of unshift()
// updated length of an array

console.clear();

// ! push : Appends new elements to the end of an array, and returns the new length of the array.

let arr_03 = [11, 22, 33];
console.log(arr_03); // [11,22,33]

// arr_03.push("insert the value at the ending of an array / array.length ");
// console.log(arr_03);

// arr_03.push(true, false); // [11,22,33,true , false]
// console.log(arr_03)

/*
todo : summary  
insert the element at starting  : unshift('value')
insert the element at ending    : push('value')

*/

console.clear();
// ! ------------- delete --------------------

// ? shift : remove the starting value / first value /0th index value of an array
// * return : deleted item

let arr_04 = [20, 34, 23];
console.log(arr_04);

// Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

console.log(arr_04.shift()); // deleted item : 0th index : 20
console.log(arr_04);

console.log("----------------------------");
// ! pop : Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// * return : deleted item
console.log(arr_04); // [34, 23]
console.log(arr_04.pop()); // 23
console.log(arr_04); // [34]

console.clear();

// ! ========================================

let arr_05 = [10, 20, 30, 40];

console.log("arr_05 before any operation : ", arr_05);

arr_05.unshift("item_01");
console.log("arr_05 after unshift : ", arr_05);

console.log(" return value of shift : ", arr_05.shift());

console.log("arr_05 after shift : ", arr_05);

arr_05.push("ending_item");

console.log("arr_05 after push : ", arr_05);

console.log("return of pop :", arr_05.pop());
console.log("arr_05 after pop : ", arr_05);

console.clear()