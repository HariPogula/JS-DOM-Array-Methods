const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionariesBtn = document.getElementById("show-millionaires");
const sort = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

//Fetch random user and add money

async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();

  console.log(data);

  const user = data.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  console.log("New User" + JSON.stringify(newUser));

  addData(newUser);
}
//Add new obj
function addData(obj) {
  data.push(obj);
  updateDOM();
}

//Update DOM
function updateDOM(providedData = data) {
  // clear main Div
  main.innerHTML = " <h2><strong>Person </strong>Wealth</h2>";

  providedData.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
    main.appendChild(element);
  });
}

// Format number as money - https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
function formatMoney(number) {
  return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

// Event Listeners
addUserBtn.addEventListener("click", getRandomUser);

// var mydata = JSON.parse(data1);
// console.log("My Data is " + mydata);

// getRandomUser();
// // Fetch random user and add money
// async function getRandomUser() {
//   const res = await fetch("https://randomuser.me/api?results=3");
//   const data = await res.json();

//   const user = data.results;

//   user.forEach((element) => {
//     console.log("Every user is " + element.name.first);
//     const nUser = {
//       name: `${element.name.first} ${element.name.last}`,
//       money: Math.floor(Math.random() * 1000000),
//     };
//     addData(nUser);
//   });
//   // // console.log("User is " + JSON.stringify(user) + " and " + user[0].name.first);
//   // let newU = user[0];
//   // const newUser = {
//   //   name: `${newU.name.first} ${newU.name.last}`,
//   //   money: Math.floor(Math.random() * 1000000),
//   // };
//   // console.log("New User is " + JSON.stringify(newUser));
//   // addData(newUser);
// }

// // Add new obj to data arr
// function addData(obj) {
//   console.log("Obj is " + JSON.stringify(obj));
//   data.push(obj);

//   updateDOM(JSON.stringify(obj));
// }

// // Update DOM
// function updateDOM(providedData) {
//   console.log("Provided DAta" + providedData);
//   // Clear main div
//   main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";

//   providedData.forEach((item) => {
//     const element = document.createElement("div");
//     element.classList.add("person");
//     element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
//     main.appendChild(element);
//   });
// }
