import "./styles/styles.css";
import { createHeader } from "./javascript/headerContent";
import { createHome } from "./javascript/homeContent";
import {
  slideShow,
  goHomeScreen,
  goPuzzleScreen,
} from "./javascript/functions.js";

document.addEventListener("DOMContentLoaded", () => {
createHeader();
createHome();
slideShow();

// const navBtns = document.querySelectorAll(".nav-btn");
// navBtns.forEach((btn) => btn.addEventListener("click", changeScreen))

const btnHome = document.querySelector("#btn-home");
btnHome.addEventListener("click", goHomeScreen);

const btnPuzzle = document.querySelector("#btn-puzzle");
btnPuzzle.addEventListener("click", goPuzzleScreen);
});