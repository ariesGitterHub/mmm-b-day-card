import { age, formatAgeWithSuffix, updateCountdown } from "./functions.js";
import imgCake from "../assets/cake.svg";

// import imgSlide1 from "../assets/MBC01.PNG";
// import imgSlide2 from "../assets/MBC02.PNG";
// import imgSlide3 from "../assets/MBC03.PNG";
// import imgSlide4 from "../assets/MBC04.PNG";
// import imgSlide5 from "../assets/MBC05.PNG";
// import imgSlide6 from "../assets/MBC06.PNG";


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
    timer.textContent = `Your next birthday is in 
    ${updateCountdown().days} days.`
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
    btnDays.textContent = "September 14th";

    const btnYear = document.createElement("button");
    btnYear.id = "btn-year";
    btnYear.classList.add("nav-btn");
    btnYear.textContent = "The Year: 1951";

    const slideshowContainer = document.createElement("div");
    slideshowContainer.id = "slideshow-container";

    // const slide1 = document.createElement("div");
    // slide1.classList.add("slide", "fade");

    // const slideImg1 = document.createElement("img");
    // slideImg1.classList.add("slide-img");
    // slideImg1.src = imgSlide1;

    // const slide2 = document.createElement("div");
    // slide2.classList.add("slide", "fade");

    // const slideImg2 = document.createElement("img");
    // slideImg2.classList.add("slide-img");
    // slideImg2.src = imgSlide2;

    // const slide3 = document.createElement("div");
    // slide3.classList.add("slide", "fade");

    // const slideImg3 = document.createElement("img");
    // slideImg3.classList.add("slide-img");
    // slideImg3.src = imgSlide3;

    // const slide4 = document.createElement("div");
    // slide4.classList.add("slide", "fade");

    // const slideImg4 = document.createElement("img");
    // slideImg4.classList.add("slide-img");
    // slideImg4.src = imgSlide4;

    // const slide5 = document.createElement("div");
    // slide5.classList.add("slide", "fade");

    // const slideImg5 = document.createElement("img");
    // slideImg5.classList.add("slide-img");
    // slideImg5.src = imgSlide5;

    // const slide6 = document.createElement("div");
    // slide6.classList.add("slide", "fade");

    // const slideImg6 = document.createElement("img");
    // slideImg6.classList.add("slide-img");
    // slideImg6.src = imgSlide6;

    // const prev = document.createElement("a");
    // prev.id = "prev";
    // prev.textContent = "\u{10094}";

    //   const next = document.createElement("a");
    // next.id = "next";
    // next.textContent = "\u{10095}";

    headerContent.append(titleImg, title, timer, navBar, slideshowContainer);

    // slideshowContainer.append(slide1, slide2, slide3, slide4, slide5, slide6
    //     // , prev, next
    // );
    // slide1.append(slideImg1);
    // slide2.append(slideImg2);
    // slide3.append(slideImg3);
    // slide4.append(slideImg4);
    // slide5.append(slideImg5);
    // slide6.append(slideImg6);

    navBar.append(btnHome, btnDays, btnYear);
}

