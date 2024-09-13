// import { 
//     age, 
//     formatAgeWithSuffix, 
//     updateCountdown, 
//     isDayOrDays, 
//     isHourOrHours 
// } from "./functions.js";
// import imgCake from "../assets/cake.svg";

// export function createHeader() {
//     const headerContent = document.querySelector("#header-content");

//     const titleImg = document.createElement("img");
//     titleImg.id = "title-img";
//     titleImg.src = imgCake;
//     titleImg.alt = "";

//     const title = document.createElement("h1");
//     title.id = "title";
//     title.textContent = `Happy ${formatAgeWithSuffix(age)} Birthday, Mom!`

//     const timer = document.createElement("p");
//     timer.id = "timer";
//     timer.textContent = `(Your next birthday is in 
//     ${updateCountdown().days} ${isDayOrDays()}, ${updateCountdown().hours} ${isHourOrHours()}.)`;

//     const navBar = document.createElement("div");
//     navBar.id = "nav-bar";

//     const btnHome = document.createElement("button");
//     btnHome.id = "btn-home";
//     btnHome.classList.add("nav-btn");
//     btnHome.textContent = "Home";

//     const btnPuzzle = document.createElement("button");
//     btnPuzzle.id = "btn-puzzle";
//     btnPuzzle.classList.add("nav-btn");
//     btnPuzzle.textContent = "Puzzle Links";

//     headerContent.append(titleImg, title, timer, navBar );

//     navBar.append(btnHome, btnPuzzle);
// }

import {
  age,
  formatAgeWithSuffix,
  updateCountdown,
  isDayOrDays,
  isHourOrHours,
} from "./functions.js";
import imgCake from "../assets/cake.svg";

function createImageElement(id, src, alt = "") {
  const img = document.createElement("img");
  img.id = id;
  img.src = src;
  img.alt = alt;
  return img;
}

function createTextElement(tag, id, textContent) {
  const element = document.createElement(tag);
  element.id = id;
  element.textContent = textContent;
  return element;
}

function createButton(id, text) {
  const button = document.createElement("button");
  button.id = id;
  button.classList.add("nav-btn");
  button.textContent = text;
  return button;
}

export function createHeader() {
  const headerContent = document.querySelector("#header-content");

  const titleImg = createImageElement("title-img", imgCake);
  const title = createTextElement(
    "h1",
    "title",
    `Happy ${formatAgeWithSuffix(age)} Birthday, Mom!`
  );

  const countdown = updateCountdown();
  const timerText = `(Your next birthday is in ${
    countdown.days
  } ${isDayOrDays()}, ${countdown.hours} ${isHourOrHours()}.)`;
  const timer = createTextElement("p", "timer", timerText);

  const navBar = document.createElement("div");
  navBar.id = "nav-bar";

  const btnHome = createButton("btn-home", "Home");
  const btnPuzzle = createButton("btn-puzzle", "Puzzle Links");

  headerContent.append(titleImg, title, timer, navBar);
  navBar.append(btnHome, btnPuzzle);
}
