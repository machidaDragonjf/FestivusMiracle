let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let popup = document.querySelector(".popup");
let body1 = document.querySelector(".body");
let card1 = document.querySelector(".card1");
let showPopUp = function () {
  popup.classList.remove("hidden");
  btn1.classList.add("hidden");
  btn2.classList.remove("hidden");
  body1.classList.add("overlay");
  card1.classList.add("hidden");
};
let hidePopUp = function () {
  popup.classList.add("hidden");
  btn1.classList.remove("hidden");
  btn2.classList.add("hidden");
  body1.classList.remove("overlay");
  card1.classList.remove("hidden");
};

btn1.addEventListener("click", showPopUp);
btn2.addEventListener("click", hidePopUp);

document.addEventListener("keydown", function (event) {
  console.log(event);
  if (event.key === "Escape" && !popup.classList.contains("hidden")) {
    hidePopUp();
  }
});
