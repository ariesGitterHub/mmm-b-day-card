import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
  addMonths,
  startOfDay,
} from "date-fns";

import imgCake from "../assets/cake.svg";
import imgRabbit from "../assets/rabbit.svg";

const birthday = new Date("1951-09-14");
const today = new Date();
export const age = differenceInYears(today, birthday);

// console.log(`Age: ${age}`);

export function calculateExactAge(birthday, currentDate = new Date()) {
  // Ensure both dates are at the start of the day to avoid time issues
  const startDate = startOfDay(birthday);
  const endDate = startOfDay(currentDate);

  // Calculate the total years
  const years = differenceInYears(endDate, startDate);

  // Calculate the total months
  const birthdayThisYear = addMonths(startDate, years * 12);
  const months = differenceInMonths(endDate, birthdayThisYear);

  // Calculate the remaining days
  const birthdayThisMonth = addMonths(birthdayThisYear, months);
  const days = differenceInDays(endDate, birthdayThisMonth);

  return { years, months, days };
}

const currentDate = new Date(); // or any other date
const exactAge = calculateExactAge(birthday, currentDate);

// console.log(
//   `Age: ${exactAge.years} years, ${exactAge.months} months, and ${exactAge.days} days`
// );

function getOrdinalSuffix(number) {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return 'th';
  }

  switch (lastDigit) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

export function formatAgeWithSuffix(age) {
  const suffix = getOrdinalSuffix(age);
  return `${age}${suffix}`;
}

// Example usage
// console.log(`Age: ${formatAgeWithSuffix(age)}`); // Output: Age: 72nd

// import { differenceInSeconds, addYears } from "date-fns";

// // Function to get the next occurrence of September 14
// function getNextTargetDate(currentDate) {
//   const currentYear = currentDate.getFullYear();
//   let targetDate = new Date(currentYear, 8, 14); // September is month 8 (0-indexed)

//   if (currentDate > targetDate) {
//     // If the target date has already passed this year, set the target date to next year
//     targetDate = addYears(targetDate, 1);
//   }

//   return targetDate;
// }

// // Function to get the countdown to the target date
// function getCountdownToTargetDate(targetDate, currentDate = new Date()) {
//   const diffInSeconds = differenceInSeconds(targetDate, currentDate);
//   const days = Math.floor(diffInSeconds / (24 * 60 * 60));
//   const hours = Math.floor((diffInSeconds % (24 * 60 * 60)) / (60 * 60));
//   const minutes = Math.floor((diffInSeconds % (60 * 60)) / 60);
//   const seconds = diffInSeconds % 60;

//   return { days, hours, minutes, seconds };
// }

// // Function to update the countdown display
// export function updateCountdown() {
//   const now = new Date();
//   const nextTargetDate = getNextTargetDate(now);
//   const countdown = getCountdownToTargetDate(nextTargetDate);

//   return countdown
// }

// // Initial call to display the countdown immediately
// updateCountdown();

// export function isDayOrDays() {
//   let dayOrDays = "";
//   if (updateCountdown().days === 1) {
//     dayOrDays = "day";
//   } else {
//     dayOrDays = "days";
//   }
//   console.log(updateCountdown().days, updateCountdown().hours);
  
//   return dayOrDays;
// }

// export function isHourOrHours() {
//   let hourOrHours = "";
//   if (updateCountdown().hours === 1) {
//     hourOrHours = "hour";
//   } else {
//     hourOrHours = "hours";
//   }

//   return hourOrHours;
// }

import { differenceInSeconds, addYears } from "date-fns";

// Function to get the next occurrence of September 14
function getNextTargetDate(currentDate) {
  // Check if currentDate is defined and is a Date object
  if (!(currentDate instanceof Date)) {
    console.error("currentDate is not a valid Date object:", currentDate);
    return null;
  }

  const currentYear = currentDate.getFullYear();
  let targetDate = new Date(currentYear, 8, 14); // September is month 8 (0-indexed)

  if (currentDate > targetDate) {
    // If the target date has already passed this year, set the target date to next year
    targetDate = addYears(targetDate, 1);
  }

  return targetDate;
}

// Function to get the countdown to the target date
function getCountdownToTargetDate(targetDate, currentDate) {
  if (!(targetDate instanceof Date) || !(currentDate instanceof Date)) {
    console.error(
      "One or both dates are not valid Date objects:",
      targetDate,
      currentDate
    );
    return null;
  }

  const diffInSeconds = differenceInSeconds(targetDate, currentDate);
  const days = Math.floor(diffInSeconds / (24 * 60 * 60));
  const hours = Math.floor((diffInSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((diffInSeconds % (60 * 60)) / 60);
  const seconds = diffInSeconds % 60;

  return { days, hours, minutes, seconds };
}

// Function to update the countdown display
export function updateCountdown(currentDate = new Date()) {
  const nextTargetDate = getNextTargetDate(currentDate);
  if (!nextTargetDate) return null; // Exit if target date is not valid
  const countdown = getCountdownToTargetDate(nextTargetDate, currentDate);
  return countdown;
}

// Testing function to simulate different dates
// function testCountdown() {
//   // Test dates
//   const datesToTest = [
//     new Date("2024-09-13"), // Day before the target date
//     new Date("2024-09-14"), // On the target date
//     new Date("2024-09-15"), // Day after the target date
//     new Date("2024-08-01"), // Well before the target date
//     new Date("2024-12-31"), // End of the year
//   ];

//   // Test each date and log results
//   datesToTest.forEach((testDate) => {
//     const countdown = updateCountdown(testDate);
//     if (countdown) {
//       console.log(`Test Date: ${testDate}`);
//       console.log(
//         `Countdown: ${countdown.days} days, ${countdown.hours} hours, ${countdown.minutes} minutes, ${countdown.seconds} seconds`
//       );
//       console.log("--------------------------------------------");
//     }
//   });
// }

// Call the test function
// testCountdown();

export function isDayOrDays() {
  let dayOrDays = "";
  if (updateCountdown().days === 1) {
    dayOrDays = "day";
  } else {
    dayOrDays = "days";
  }
  // console.log(updateCountdown().days, updateCountdown().hours);
  
  return dayOrDays;
}

export function isHourOrHours() {
  let hourOrHours = "";
  if (updateCountdown().hours === 1) {
    hourOrHours = "hour";
  } else {
    hourOrHours = "hours";
  }

  return hourOrHours;
}


export function slideShow() {
  // Initial slide index
  let slideIndex = 1;

  // Function to show slides
  function showSlides() {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    // Hide all slides and reset all dots
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      dots[i].style.backgroundColor = "transparent";
    }

    // Display the current slide and highlight the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].style.backgroundColor = "var(--contrast)";
  }

  // Function to show the next slide
  function nextSlide() {
    slideIndex++;
    if (slideIndex > document.getElementsByClassName("slide").length) {
      slideIndex = 1; // Loop back to the first slide
    }
    showSlides();
  }

  // Function to show the previous slide
  function prevSlide() {
    slideIndex--;
    if (slideIndex < 1) {
      slideIndex = document.getElementsByClassName("slide").length; // Loop to the last slide
    }
    showSlides();
  }

  // Attach event listeners to buttons
  document.getElementById("btn-next").addEventListener("click", nextSlide);
  document.getElementById("btn-prev").addEventListener("click", prevSlide);

  // Start the slideshow and automatic slide change
  showSlides();
  setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

export function goHomeScreen() {
  const homeContent = document.querySelector("#home-content");
  const puzzleContent = document.querySelector("#puzzle-content");
  const titleImg = document.querySelector("#title-img");

  homeContent.style.display = "flex";
  puzzleContent.style.display = "none";
  titleImg.src = imgCake;
  // console.log("Showing home content");
}

export function goPuzzleScreen() {
  const homeContent = document.querySelector("#home-content");
  const puzzleContent = document.querySelector("#puzzle-content");
  const titleImg = document.querySelector("#title-img");
 
  homeContent.style.display = "none";
  puzzleContent.style.display = "flex";
  titleImg.src = imgRabbit;
  // console.log("Showing puzzle links");
}


