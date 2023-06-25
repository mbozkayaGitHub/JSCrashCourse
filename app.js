
// Part 1 

// What is JAVASCRIPT? 

// High Level, interpreted programming language 

// Conforms to the ECMAscript specification 

// Multi-paradigm

// Runs on the client/browser as well as on the server ( Node.js)

//Others run on the server    

///////////**********Part 2 **************

// console.log("Hello World")
// console.error("this is an error")
// console.warn("this is a warning")


////////*************Part 3 ************* */


// let, const --- They have block-


// let age = 30 ;   // let can be reassigned 

// age = 31 
// console.log(age);


// const year  = 2023 ;  const can not be reassigned 

// year = 2023



///////////***************PArt 4  */


// String, Number, Boolean, null, undefined



// const name = " Mike"  // string 
// const age = 39  // number 
// const rating = 4.5 //
// const isCool = true ; // boolean
// const x = null; // null nothing 
// const y = undefined // undefined 
// let z ;


// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof isCool);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);


////////////**************part 5 *******


// const name = "Mike"
// const age = 38

// // Concatenation 

// // console.log("My name is  "  + name + " I am  " + age);

// // Template string 

// const hello = `My name is ${name} and I am ${age}`

// // console.log(`My name is ${name} and I am ${age}`);


// console.log(hello);



//********************************************************** */


// const s = "Hello World " 
// const it = "technology,computer,code,developer"

// console.log(s.length);

// console.log(s.toUpperCase());
// console.log(s.toLowerCase());

// console.log(s.substring(0,7));


// console.log(s.split(""));
// console.log(s.split(" "));

// console.log(it.split(","));


//***********ARRAYS ***********/ _ VARIABLES THAT HOLD MULTIPLE VALUES
//
//**************************** */




// const numbers = new Array(1,2,3,4,5)

// console.log(numbers);

// const fruits = ["apple","orange","pears"]
// const fruits = ["apple","orange","pears",10,true]


// fruits[5] = "grapes"  // adding to the end 

// fruits.push("mangos") // push method adding to the end  

// fruits.unshift("strawberries") // adding to the begining 

// fruits.pop()  // removing the last one 

// console.log(Array.isArray(fruits));
// console.log(Array.isArray("hi"));

// console.log(fruits.indexOf("orange"));

// console.log(fruits);


// console.log(fruits[2]);



//*******************************************
//*******************************************

// const person = {
//     firstname:"John",
//     lastname :"Dark",
//     age:33,
//     hobbies: ["music","movies","sport"],
//     address: {
//         street:"50 main st",
//         city:"Boston",
//         state:"MA"
//     }
// }


// console.log(person);
// console.log(person.firstname);

// console.log(person.hobbies[1]);


// console.log(person.address.city);



// const {firstname, lastname, address:{city}} = person 

// person.email = "john@gmail.com";

// console.log(person);
// console.log(firstname);

// console.log(city);

///*****************************************************************


const todos = [
    {
        id:1,
        text: "take out trash",
        isCompleted:true
    },
    {
        id:2,
        text: "meeting with boss",
        isCompleted:true
    },
    {
        id:1,
        text: "Dentist appt",
        isCompleted:false
    }
]


// console.log(todos);

// console.log(typeof todos);

// console.log(todos[1].text);

// // JSON FORMAT

// const todosJSON = JSON.stringify(todos);

// console.log(todosJSON);


// FOR 

// for(let i= 0; i <10; i++){
//     console.log(`for loop: ${i}`);
// }

// while 

// let i = 0; 
// while ( i <10) {
//        console.log(i);
//        i++
// }

//Use a for loop to iterate over an array. Use a for loop when you know the loop should execute n times. Use a while loop for reading a file into a variable. Use a while loop when asking for user input.

// ForEach,mao, filter 

todos.forEach(function(todos){
    // console.log(todos.text);
})


//map 

// todos.map(function(todos){
//     console.log(todos.text);
// })

const todoText = todos.map(function(todo){
    return todo.text;
})

// console.log(todoText);

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true ;
}).map(function(todo){
    return todo.text
})

// console.log(todoCompleted);

///***************************************************** */


// const x = 50;

//
// if(x === 10) {
//     console.log("x is 10 ");
// } else if (x > 10 ) {
//     console.log("x is greater than 10");
// } else {
//     console.log("x is less than 10");
// }

/////***********************************Multiple Conditions**********

// const x = 5 ;

// const y= 15 ;

// if(x > 6 || y >10 ) {
//     console.log("x imore than 5 or y is more than 10");
// }

// const x = 7 ;

// const y= 16 ;

// if(x > 6 && y >10 ) {
//     console.log("x is more than 5 and y is more than 10");
// }

///***********************TERNARY*****************************


// const x = 19 ;

// const DL = x >18 ? "you are eligible to get a driver licience" : "you are not eligible to get a driver licience"


// console.log(DL);

////******************************************************* */


// function addNums(num1, num2) {
//     return num1 + num2
// }

// console.log(addNums(4,5));

// const addNums = (num1, num2) =>  {
//     return num1 + num2
// }

// console.log(addNums(5,5));


///********************************************************* */

///----Constructive function----------------------////

// function Person(firstName,lastName,dob) {
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.dob=dob;



// }
//=========Instantiate Object=========/////////

// const person1 = new Person ("John","Doe","4-3-1980");


// console.log(person1.firstName);


//=========Single Element========///


// const form=document.getElementById("my-form")
// const form=document.querySelector("h1")

// console.log(form);

//=========Multiple Element==========///////


// console.log(document.querySelectorAll(".item"));

// console.log(document.getElementsByClassName("item"));
//  const items = document.querySelectorAll(".item")


// items.forEach((item)=> console.log(item))


// const ul = document.querySelector(".items")


// // ul.remove();

// // ul.lastElementChild.remove()

// ul.firstElementChild.textContent= "hello" ;
// ul.children[1].innerText = "Mahmut";
// ul.lastElementChild.innerHTML= "<h1>Good Bye<h1/>"



//***************************************************** */


// const btn = document.querySelector(".btn")

// btn.style.background = "red"


///***************************************** */

//  const btn = document.querySelector(".btn")
// btn.addEventListener("click", (e)=> {
//     e.preventDefault()
//     console.log("click");
// })


// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();


  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}

