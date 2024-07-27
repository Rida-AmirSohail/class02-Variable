
//variable Declaration
// Method 1

var username:string="Rida";
console.log(username);

//Method 2

var username:string;
console.log(username);

//Method 3

var myvariable="abc";
console.log(myvariable);

//Method 4
var myaddress;
console.log(myaddress);

//concatenate

var username ="Rida";
var userlocation:string="karachi";
var marks=500;
var percentage:number=100
console.log("name",username);
console.log("location",userlocation);
console.log("marks",marks);
console.log("percentage",percentage);
console.log(myaddress);

// Variable with let

let myNumber:number=4;
console.log(myNumber);

// Variable by const

const my_number:number=7;
console.log(my_number);

//Difference Between Let and Var

let currentbalance=35000;//value can change
currentbalance=32000;
console.log(currentbalance);
const accountnymber=123456 //value remains constant
console.log(accountnymber);

// Example let

let favoriteColor="blue";
console.log(favoriteColor); 
favoriteColor="green"; //we can change value but cannot redeclare
console.log(favoriteColor);

// Example var

var myName="Amir";
console.log(myName);
var myName="Rida";
console.log(myName);
var myName="sania";
console.log(myName);

// Example Const

const myAge:number=24;
console.log(myAge);//const value cannot change