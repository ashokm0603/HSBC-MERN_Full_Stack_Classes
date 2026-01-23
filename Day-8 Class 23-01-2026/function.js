// // function displayEmpDetails(){

// //     console.log("EMP Name");
// //     console.log("EMP Role");
// //     console.log("EMP Salary");
// //     console.log("EMP Address");

// // }

// // displayEmpDetails()
// // displayEmpDetails()
// // displayEmpDetails()

// //      1. anonyms function

// // function (){

// // }

// // 2. named function / normal function
// function getFun() {
//   console.log("This is normal function");
// }
// getFun();

// // 2. named function with arguments/ parameters

// function displayStudentDetails(name, course, year) {
//   console.log(name, course, year);
// }

// displayStudentDetails("Ravi", "B.tech", "I year");
// displayStudentDetails("rani", "M.tech", "II year");

// // 3. named function with return  types

// function addition(a, b) {
//   return a + b;
// }

// console.log(addition(10, 20));
// let result = addition(50, 60);
// console.log(result);

// let getDetails = function (a, b) {
//   console.log("HEllo");
//   return a + b;
// };

// console.log(getDetails("java", "script"));
// ;

function loginDetails() {
  let userName = "admin@";
  let password = "admin#h799";

  return `${userName + " " + password}`;
}

console.log(loginDetails());

//5. Immediate invoking function

(function () {
  let userName = "admin@";
  let password = "admin#h799";
  console.log("UserName :", userName);
  console.log("Password : ", password);

  return `${password}`;
})();

/// Arrow Function
let arr = () => console.log("This is arrow function");

arr();
arr();
arr();
arr();
arr();

let arrowFunction = (c, d) => {
  console.log(c, d);
};

arrowFunction("javascript ", 50);

let num = 10;
function outerFun() {
  function innerFun() {
    num = num + 1;
    console.log(num);
  }

  console.log("This is outer Function");

  return innerFun;
}

let res = outerFun();

res();
res();
res();
res();
res();

function homePage(register, login) {
  console.log("This is LandingPage");
}

// homePage(
//   () => {
//     console.log("Register  Page");
//   }

//   ,
//   () => {
//     console.log("Login Page");
//   },
// );

function LoginPage() {
  console.log("User Login Successfully..");
}

function RegisterPage() {
  console.log("User Register Successfully..");
}

homePage(RegisterPage(), LoginPage());

//generator function

function* generatorFun() {
  yield (a = 10);
  yield (b = 50);
  console.log("Hey this generator function");
}

var result = generatorFun();

console.log(result.next().value);
console.log(result.next().value);

result.next();

// objects

//i. literal way -{}

let obj = {
  name: "sai",
  role: "developer",
  salary: 9523254,
  skills: ["React Js ", "Node Js ", "Express Js", "Vue Js"],
  address: {
    city: "Bangalore",
    pinCode: 562105,
  },
};

console.log(obj.name);

console.log(obj.address.city);
console.log(obj.address.pinCode);

console.log(obj.skills);

//new Keyword
let stdDetails = new Object({
  name: "Teja",
  course: "B.tech",
  rollNumber: "Hu2025",
});

console.log(stdDetails);

//Inbuilt Methods/functions in Object Class

let LoginDetails = {
  userName: "admin@123",
  password: "1234",
};

console.log(Object.values(LoginDetails));
console.log(Object.keys(LoginDetails));
console.log(Object.entries(LoginDetails));

Object.seal(LoginDetails)// update values ,


console.log(Object.isSealed(LoginDetails));


LoginDetails.password="Admin#@123"
delete LoginDetails.password


console.log(LoginDetails);

