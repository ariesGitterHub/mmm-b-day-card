// export function createFooter() {
//   const footerContent = document.querySelector("#footer-content");

//   const footerText = document.createElement("p");
//   footerText.id = "footer-text";
//   footerText.textContent = "A Mad Muffin Man Design Studio Production Copyright 2024";

//   footerContent.append(footerText);
// }

function createTextElement(tag, id, textContent) {
  const element = document.createElement(tag);
  element.id = id;
  element.textContent = textContent;
  return element;
}

export function createFooter() {
  const footerContent = document.querySelector("#footer-content");

  const footerText = createTextElement(
    "p",
    "footer-text",
    "A Mad Muffin Man Design Studio Production © 2024"
  );

  footerContent.append(footerText);
}


