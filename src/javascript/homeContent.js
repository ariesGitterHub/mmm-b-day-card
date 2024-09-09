import imgSlide1 from "../assets/MBC01.png";
import imgSlide2 from "../assets/MBC02.png";
import imgSlide3 from "../assets/MBC03.png";
import imgSlide4 from "../assets/MBC04.png";
import imgSlide5 from "../assets/MBC05.png";
import imgSlide6 from "../assets/MBC06.png";

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

  // const prev = document.createElement("a");
  // prev.id = "prev";
  // prev.textContent = "\u{10094}";

  //   const next = document.createElement("a");
  // next.id = "next";
  // next.textContent = "\u{10095}";

  homeContent.append(slideshowContainer);

  slideshowContainer.append(
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6
    // , prev, next
  );
  slide1.append(slideImg1);
  slide2.append(slideImg2);
  slide3.append(slideImg3);
  slide4.append(slideImg4);
  slide5.append(slideImg5);
  slide6.append(slideImg6);
}
