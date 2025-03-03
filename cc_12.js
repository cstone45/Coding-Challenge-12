//Task 1: Business Dashboard - DOM Element Selection and Creation
const contentDiv = document.getElementById(`dashboard`); //Adds a method to select the Dashboard container
const firstMessage = document.querySelector(`.dashboard`); //Adds another method to select the Dashboard container
const newMetric = document.createElement(`Revenue`); //Creates the Revenue Element
setAttribute(class, "metric-card"); //Creates an Attribute "Method-Card"
setAttribute(Id, "revenueCard"); //Creates an Attribute "RevenueCard"
let title = "Revenue" //Creates a Title, Revenue
let placeHolderValue = 0 //Sets the intial placeholder value at $0
Revenue.appendChild(newMetric); //Logst the new metric and its components

//Task 2: Updating Dashboard Metrics - Working with NodeLists and Arrays
const allMessages = document.querySelectorAll(`.metric-card`); //Selects the Metric Card
const arrayOfNodes = Array.from(allMessages); //Changes the node format to an Array
allMessages.forEach(background-color: "Light-Green"); //Changes the background color for each component in the metric-card information set to light green

//Task 3: Dynamic Inventory Management - Adding and Removing Items
const newProduct = document.createElement(`li`) //Creates a new li Element
newProduct.textContent = "smartwatch"; //Establishes the name (specifics) of a new li product
setAttribute(class, "product-item"); //Adds the product-item class to the new element
newProduct.appendChild(newElement); //Appends the new product into the inventory list
const oldProduct = document.removeElement.uponClick(`li`); //Creates a new function which will remove the "old" li product
oldProduct.removeChild(inventory); //Removes the clicked item

//Task 4: Business Customer Section - Handling Event Bubbling
const customerSection = document.getElementById("customers"); //Attaches a click event to customerSection
const customerCard = document.getElementById("customer"); //Attaches a click element to customer-card
console.log(customerCard("Customer Card Clicked")) //Estalishes a message for the event handler
stopPropagation(); //Prevents the parents even handler from triggering
