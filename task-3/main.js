let globalData;
//Fetching API
async function getRandomCat() {
  let response = await fetch("https://api.thecatapi.com/v1/images/search", {
    headers: { accept: "application/json" },
  });
  let data = await response.json();
  //Adding Photo URL to IMG src
  globalData = data[0].url;
  let imgTAG = document.querySelector("#cat-here");
  imgTAG.setAttribute("src", globalData);
}
getRandomCat();

let button = document.querySelector("#get-new-cat");
button.addEventListener("click", getRandomCat);
