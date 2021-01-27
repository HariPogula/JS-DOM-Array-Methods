const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionariesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
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

//Double Money
function doubleMoney() {
  data = data.map((item) => {
    return { ...item, money: item.money * 2 };
  });
  updateDOM();
}

//Sort By Richest (a-b will give ascending order[Default], b-a will give descnding)
function sortByRichest() {
  data.sort((a, b) => b.money - a.money);
  updateDOM();
}

//Show Milliionaries
function showMillionaries() {
  data = data.filter((user) => {
    return user.money > 1000000;
  });
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
doubleBtn.addEventListener("click", doubleMoney);
sortBtn.addEventListener("click", sortByRichest);
showMillionariesBtn.addEventListener("click", showMillionaries);
