// console.log("hello");
// var a = 23;
// console.log(a);
// a = "hii";
// console.log(a);

const para = document.querySelector("p");

para.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  para.textContent = `Player 1: ${name}`;
}
