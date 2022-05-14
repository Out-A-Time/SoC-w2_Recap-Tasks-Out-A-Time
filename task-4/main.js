let importantThings = [];
//Selecting Input Fields
let input1 = document.querySelector("#important-thing");
let input2 = document.querySelector("#priority");
//Selecting buttons and listen for a click
let buttonAddToList = document.querySelector("#add-to-list");
buttonAddToList.addEventListener("click", addToArray);
let buttonOrderList = document.querySelector("#order-list");
buttonOrderList.addEventListener("click", orderPriority);
//Selecting <ul> and creating new <li> within
let CreateNewLi = document.querySelector("ul");
let obj;
function addToArray() {
  obj = { text: input1.value, priority: input2.value };
  importantThings.push(obj);
  let newLi = document.createElement("li");
  newLi.innerText = obj.text;
  CreateNewLi.appendChild(newLi);
}

function orderPriority() {
  while (CreateNewLi.hasChildNodes()) {
    CreateNewLi.removeChild(CreateNewLi.firstChild);
  }
  importantThings.sort(function (a, b) {
    return a.priority - b.priority;
  });

  for (let i = 0; i < importantThings.length; i++) {
    let orderedLi = document.createElement("li");
    orderedLi.innerText = `Priority: ${importantThings[i].priority} - ${importantThings[i].text}`;
    CreateNewLi.appendChild(orderedLi);
  }
}

//CODE BEFORE REFACTORING:
// let importantThings = [];
// let input1 = document.querySelector("#important-thing");
// input1.value;
// //Selecting button and listen for a click
// let buttonAddToList = document.querySelector("#add-to-list");
// buttonAddToList.addEventListener("click", addingToArray);

// function addingToArray() {
//   console.log(input1.value);
//   importantThings.push(input1.value);
//   //Selecting <ol> and creating new <li> within
//   let CreateNewLi = document.querySelector("ol");
//   let newLi = document.createElement("li");
//   newLi.innerText = input1.value;
//   CreateNewLi.appendChild(newLi);
// }
