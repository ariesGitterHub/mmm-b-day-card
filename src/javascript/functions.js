import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
  addMonths,
  startOfDay,
} from "date-fns";

const birthday = new Date("1951-09-14");
const today = new Date();
export const age = differenceInYears(today, birthday);

console.log(`Age: ${age}`);

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

console.log(
  `Age: ${exactAge.years} years, ${exactAge.months} months, and ${exactAge.days} days`
);

// export function exactAge() {

//   const exactCurrentAge = document.createElement("p");
//   exactCurrentAge.id = "exact-current-age";
//   exactCurrentAge.textContent = `You are exactly: ${age.years} years, ${age.months} months, and ${age.days} days young. `;

// }

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

console.log(`Age: ${formatAgeWithSuffix(age)}`); // Output: Age: 72nd




import { differenceInSeconds, addYears } from "date-fns";

// Function to get the next occurrence of September 14
function getNextTargetDate(currentDate) {
  const currentYear = currentDate.getFullYear();
  let targetDate = new Date(currentYear, 8, 14); // September is month 8 (0-indexed)

  if (currentDate > targetDate) {
    // If the target date has already passed this year, set the target date to next year
    targetDate = addYears(targetDate, 1);
  }

  return targetDate;
}

// Function to get the countdown to the target date
function getCountdownToTargetDate(targetDate, currentDate = new Date()) {
  const diffInSeconds = differenceInSeconds(targetDate, currentDate);
  const days = Math.floor(diffInSeconds / (24 * 60 * 60));
  const hours = Math.floor((diffInSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((diffInSeconds % (60 * 60)) / 60);
  const seconds = diffInSeconds % 60;

  return { days, hours, minutes, seconds };
}

// Function to update the countdown display
export function updateCountdown() {
  const now = new Date();
  const nextTargetDate = getNextTargetDate(now);
  const countdown = getCountdownToTargetDate(nextTargetDate);

//   console.log(
//     `Countdown to September 14: ${countdown.days} days, ${countdown.hours} hours, ${countdown.minutes} minutes, and ${countdown.seconds} seconds`
//   );

  return countdown
}

// Initial call to display the countdown immediately
updateCountdown();

// Set up an interval to update the countdown every second
// setInterval(updateCountdown, 1000);



export function slideShow() {
  // Initial slide index
  let slideIndex = 0;

  // Function to show slides
  function showSlides() {
    const slides = document.getElementsByClassName("slide");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // Increment slide index
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1; // Loop back to the first slide
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";

    // Change slide every 10 seconds
    setTimeout(showSlides, 10000);
  }

  // Start the slideshow
  showSlides();
}

