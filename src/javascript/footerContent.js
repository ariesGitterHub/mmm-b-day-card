
export function createFooter() {
  const footerContent = document.querySelector("#footer-content");

  const footerText = document.createElement("p");
  footerText.id = "footer-text";
  footerText.textContent = "A Mad Muffin Man Design Studio Production Copyright 2024";

  footerContent.append(footerText);
}
