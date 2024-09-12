import { 
    age, 
    formatAgeWithSuffix, 
    updateCountdown, 
    isDayOrDays, 
    isHourOrHours 
} from "./functions.js";
import imgCake from "../assets/cake.svg";
import imgRabbit from "../assets/rabbit.svg";

export function createHeader() {
    const headerContent = document.querySelector("#header-content");

    const titleImg = document.createElement("img");
    titleImg.id = "title-img";
    titleImg.src = imgCake;
    titleImg.alt = "";

    const title = document.createElement("h1");
    title.id = "title";
    title.textContent = `Happy ${formatAgeWithSuffix(age)} Birthday, Mom!`

    const timer = document.createElement("p");
    timer.id = "timer";
    timer.textContent = `(Your next birthday is in 
    ${updateCountdown().days} ${isDayOrDays()}, ${
      updateCountdown().hours
    } ${isHourOrHours()}.)`;
    // , ${updateCountdown().hours} hours, 
    // ${updateCountdown().minutes} minutes, and 
    // ${updateCountdown().seconds} seconds`;

    const navBar = document.createElement("div");
    navBar.id = "nav-bar";

    const btnHome = document.createElement("button");
    btnHome.id = "btn-home";
    btnHome.classList.add("nav-btn");
    btnHome.textContent = "Home";

    const btnPuzzle = document.createElement("button");
    btnPuzzle.id = "btn-puzzle";
    btnPuzzle.classList.add("nav-btn");
    btnPuzzle.textContent = "Puzzle Links";

    // const btnYear = document.createElement("button");
    // btnYear.id = "btn-year";
    // btnYear.classList.add("nav-btn");
    // btnYear.textContent = "Prior Years";

    // const footerImg = document.createElement("img");
    // footerImg.id = "footer-img";
    // footerImg.src = imgRabbit;
    // footerImg.alt = "";

    headerContent.append(titleImg, title, timer, navBar, 
        // footerImg
    );

    navBar.append(btnHome, btnPuzzle
        // , btnYear
    );
}

