import imgRabbit from "../assets/rabbit.svg";

export function createFooter() {
  const footerContent = document.querySelector("#footer-content");

  const footerImg = document.createElement("img");
  footerImg.id = "footer-img";
  footerImg.src = imgRabbit;
  footerImg.alt = "";

  footerContent.append(footerImg);
}
