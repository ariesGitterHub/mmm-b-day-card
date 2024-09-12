import imgSlide1 from "../assets/MBC01.png";
import imgSlide2 from "../assets/MBC02.png";
import imgSlide3 from "../assets/MBC03.png";
import imgSlide4 from "../assets/MBC04.png";
import imgSlide5 from "../assets/MBC05.png";
import imgSlide6 from "../assets/MBC06.png";
import imgPrev from "../assets/prev.svg";
import imgNext from "../assets/next.svg";

export function createHome() {
  const homeContent = document.querySelector("#home-content");

  const slideshowContainer = document.createElement("div");
  slideshowContainer.id = "slideshow-container";

  const slide1 = document.createElement("div");
  slide1.classList.add("slide", "fade");

  const slideImg1 = document.createElement("img");
  slideImg1.classList.add("slide-img");
  slideImg1.src = imgSlide1;

  const slide2 = document.createElement("div");
  slide2.classList.add("slide", "fade");

  const slideImg2 = document.createElement("img");
  slideImg2.classList.add("slide-img");
  slideImg2.src = imgSlide2;

  const slide3 = document.createElement("div");
  slide3.classList.add("slide", "fade");

  const slideImg3 = document.createElement("img");
  slideImg3.classList.add("slide-img");
  slideImg3.src = imgSlide3;

  const slide4 = document.createElement("div");
  slide4.classList.add("slide", "fade");

  const slideImg4 = document.createElement("img");
  slideImg4.classList.add("slide-img");
  slideImg4.src = imgSlide4;

  const slide5 = document.createElement("div");
  slide5.classList.add("slide", "fade");

  const slideImg5 = document.createElement("img");
  slideImg5.classList.add("slide-img");
  slideImg5.src = imgSlide5;

  const slide6 = document.createElement("div");
  slide6.classList.add("slide", "fade");

  const slideImg6 = document.createElement("img");
  slideImg6.classList.add("slide-img");
  slideImg6.src = imgSlide6;

  const slideBtnDotRow = document.createElement("div");
  slideBtnDotRow.id = "slide-btn-dot-row";

  const btnPrev = document.createElement("button");
  btnPrev.id = "btn-prev";
 
  const btnPrevImg = document.createElement("img");
  btnPrevImg.id = "btn-prev-img";
  btnPrevImg.src = imgPrev;

  const dot1 = document.createElement("span");
  dot1.classList.add("dot");
  const dot2 = document.createElement("span");
  dot2.classList.add("dot");
  const dot3 = document.createElement("span");
  dot3.classList.add("dot");
  const dot4 = document.createElement("span");
  dot4.classList.add("dot");
  const dot5 = document.createElement("span");
  dot5.classList.add("dot");
  const dot6 = document.createElement("span");
  dot6.classList.add("dot");

  const btnNext = document.createElement("button");
  btnNext.id = "btn-next";
  
  const btnNextImg = document.createElement("img");
  btnNextImg.id = "btn-next-img";
  btnNextImg.src = imgNext;

  homeContent.append(slideshowContainer);

  slideshowContainer.append(
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slideBtnDotRow,
  );

  slideBtnDotRow.append(btnPrev, dot1, dot2, dot3, dot4, dot5, dot6, btnNext);

  slide1.append(slideImg1);
  slide2.append(slideImg2);
  slide3.append(slideImg3);
  slide4.append(slideImg4);
  slide5.append(slideImg5);
  slide6.append(slideImg6);

  btnPrev.append(btnPrevImg);
  btnNext.append(btnNextImg);
}
