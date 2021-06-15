import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
//import the bootstrap css to use Bootstrap styles with our components
import 'bootstrap/dist/css/bootstrap.min.css'
/*
   What is JSX?
   JSX is Javascript XML, it is the syntax used by React that extends JS so that it can co-extist react. The syntax provided by JSX is compiled and transformed from HTML-like syntax into standard JS objects.
*/
/*let name1 = "Pedro Smith III"
let name2 = "John dela Cruz Jr."
let city1 = "Quezon City"
let city2 = "Queens, New York"
*/
/*let person = {
   name: "Johnny Smith",
   address: "Brooklyn, New York",
   occupation: "Professor",
   age: 29,
   expenses: 25000,
   income: 30000
}*/
/*
   Mini-Activity:
   Create a paragraph element for each:
      -Show the Johnny's profession/occupation,
      -Show Johnny's age
      -Using the details about his expenses and income, show his current balance.
*/
/*
   let myElement = 
   <div>
      <h1>Hi, {person.name}</h1>
      <h3>Your address is {person.address}</h3>
      <p>Occupation: {person.occupation}</p>
      <p>Age: {person.age}</p>
      <p>Current Balance: {person.income - person.expenses}</p>
   </div>
*/
/*let ourClass = [
   {
      name: "Tee Jae",
      batch: "batch 109"
   },
   {
      name: "Vils",
      batch: "batch 109"
   },
   {
      name: "Vivs",
      batch: "batch 109"
   },
   {
      name: "Quibs",
      batch: "batch 109"
   },
   {
      name: "Roy",
      batch: "batch 109"
   }
]*/
/*
   Mini-Activity:
   In the h1 element, show your name from the array.
   In a new h3 element, show your current batch from the array.
*/
/*
   let myElement = 
   <div>
      <h1>Name: {ourClass[0]}</h1>
      <h3>Batch: {batches[batches.length-1]}</h3>
   </div>
*/
/*let accounts = [
   
   {
      name: "Jeff Bezos",
      age: 60,
      income: 60000,
      expense: 30000
   },
   {
      name: "William Gates",
      age: 68,
      income: 50000,
      expense: 10000
   },
   {
      name: "Steve Jobs",
      age: 59,
      income: 40000,
      expense: 20000
   },
   {
      name: "Elon Musk",
      age: 42,
      income: 50000,
      expense: 15000
   },
   {
      name: "Pepito Manaloto",
      age: 43,
      income: 45000,
      expense: 10500
   }
]
*/
   /*
      Mini-Activity:
      Map out the objects in the array to show each account in a separate div:
         Each div should have the following elements:
            -h3 element to show the account holder's name.
            -p element to show the account holder's age.
            -p element to show the account holder's income.
            -p element to show the account holder's expense.
            -p element to show the account holder's balance out of their income and expense details.
   */
/*let accountElements = accounts.map(holder => {
   return (
      <div>
         <h3>account holder: {holder.name}</h3>
         <p>age: {holder.age}</p>
         <p>income: {holder.income}</p>
         <p>expense: {holder.expense}</p>
         <p>balance: {holder.income - holder.expense}</p>
      </div>
      )
})*/
/*
   ReactDOM.render(<element>,selector)
   In JSX, adjacent elements should be wrapped in a fragment or in a single element.
   In JSX, we can also add expressions within our elements.
*/
ReactDOM.render(<App />,document.getElementById('root'));