// import { axios } from "axios";
const menBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");
const menu = document.querySelector(".menu");
const offset = 50;
menBtn.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
});
window.addEventListener("scroll", () => {
  if (pageYOffset > offset) {
    navbar.classList.add("navbar-active");
  } else {
    navbar.classList.remove("navbar-active");
  }
});

// funtion to import axios and get request from api
function getdata() {
  axios
    .get("https://api.github.com/users")
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
