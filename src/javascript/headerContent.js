import { age, formatAgeWithSuffix, updateCountdown } from "./functions.js";
import imgCake from "../assets/cake.svg";

export function createHeader() {
    const headerContent = document.querySelector("#header-content");

    const title = document.createElement("h1");
    title.id = "title";
    title.textContent = `Happy ${formatAgeWithSuffix(age)} Birthday Mom!`

    const titleImg = document.createElement("img");
    titleImg.id = "title-img";
    titleImg.src = imgCake;
    titleImg.alt = "";

    const timer = document.createElement("p");
    timer.id = "timer";
    timer.textContent = `(Your next birthday is in 
    ${updateCountdown().days} days.)`
    // , ${updateCountdown().hours} hours, 
    // ${updateCountdown().minutes} minutes, and 
    // ${updateCountdown().seconds} seconds`;

    const navBar = document.createElement("div");
    navBar.id = "nav-bar";

    const btnHome = document.createElement("button");
    btnHome.id = "btn-home";
    btnHome.classList.add("nav-btn");
    btnHome.textContent = "Home";

    const btnDays = document.createElement("button");
    btnDays.id = "btn-days";
    btnDays.classList.add("nav-btn");
    btnDays.textContent = "This Year";

    const btnYear = document.createElement("button");
    btnYear.id = "btn-year";
    btnYear.classList.add("nav-btn");
    btnYear.textContent = "Prior Years";

    headerContent.append(titleImg, title, timer, navBar);

    navBar.append(btnHome, btnDays, btnYear);
}

