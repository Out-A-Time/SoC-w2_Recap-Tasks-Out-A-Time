let pTag = document.querySelector("#count");
pTag.textContent = "0";

setInterval(count, 1000);
let i = 0;
function count() {
  if (i < 12) {
    i = i + 1;
    pTag.textContent = i;
    console.log(i);
  } else {
    clearInterval(setInterval);
  }
}
