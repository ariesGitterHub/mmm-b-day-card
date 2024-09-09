import "./styles/styles.css";

import { createHeader } from "./javascript/headerContent";
import { createHome } from "./javascript/homeContent";


import { slideShow } from "./javascript/functions.js";




document.addEventListener("DOMContentLoaded", () => {
createHeader();
createHome();
slideShow();

});