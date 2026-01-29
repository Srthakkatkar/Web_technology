/****************************************************
 * dateTime.js
 * Aim: Practice Date and Time methods in JavaScript
 * Author: Shreya
 ****************************************************/

/* =========================
   WHY DATE & TIME METHODS
   ========================= */

// Date & Time methods are used to:
// - Show current date and time
// - Store timestamps (exact moment)
// - Calculate difference between dates
// - Logging, tracking, attendance, payments, OTP expiry

console.log("Date & Time Methods Practice Started");


/* =========================
   CREATING DATE OBJECT
   ========================= */

// Current date and time
let currentDate = new Date();
console.log("Current Date & Time:", currentDate);

// Custom date (Year, Month, Day)
// NOTE: Month starts from 0 (0 = January)
let customDate = new Date(2026, 0, 27);
console.log("Custom Date:", customDate);


/* =========================
   GET DATE METHODS
   ========================= */

console.log("Year:", currentDate.getFullYear());
console.log("Month (0-11):", currentDate.getMonth());
console.log("Date:", currentDate.getDate());
console.log("Day (0-Sun):", currentDate.getDay());
console.log("Hours:", currentDate.getHours());
console.log("Minutes:", currentDate.getMinutes());
console.log("Seconds:", currentDate.getSeconds());
console.log("Milliseconds:", currentDate.getMilliseconds());


/* =========================
   SET DATE METHODS
   ========================= */

let setDateExample = new Date();
setDateExample.setFullYear(2025);
setDateExample.setMonth(11); // December
setDateExample.setDate(31);
console.log("Modified Date:", setDateExample);


/* =========================
   DATE FORMATTING
   ========================= */

console.log("toDateString():", currentDate.toDateString());
console.log("toTimeString():", currentDate.toTimeString());
console.log("toLocaleDateString():", currentDate.toLocaleDateString());
console.log("toLocaleTimeString():", currentDate.toLocaleTimeString());


/* =========================
   TIMESTAMPS
   ========================= */

// Timestamp = number of milliseconds since
// 1 January 1970 (Unix Epoch)

// Current timestamp
let currentTimestamp = Date.now();
console.log("Current Timestamp:", currentTimestamp);

// Timestamp from Date object
let dateTimestamp = currentDate.getTime();
console.log("Date Timestamp:", dateTimestamp);


/* =========================
   HOW TIMESTAMPS WORK
   ========================= */

// Example: OTP expiry (valid for 2 minutes)

let otpGeneratedTime = Date.now();
let otpExpiryTime = otpGeneratedTime + (2 * 60 * 1000); // 2 minutes

console.log("OTP Generated Time:", otpGeneratedTime);
console.log("OTP Expiry Time:", otpExpiryTime);

// Check OTP validity
let now = Date.now();
if (now <= otpExpiryTime) {
    console.log("OTP is valid");
} else {
    console.log("OTP expired");
}


/* =========================
   DATE DIFFERENCE
   ========================= */

// Difference between two dates (in days)
let startDate = new Date(2026, 0, 1);
let endDate = new Date(2026, 0, 27);

let diffMilliseconds = endDate - startDate;
let diffDays = diffMilliseconds / (1000 * 60 * 60 * 24);

console.log("Difference in Days:", diffDays);


/* =========================
   REAL-TIME / COMPANY USAGE
   ========================= */

// 1. Attendance system
// 2. Login session timeout
// 3. Order tracking
// 4. Payment timestamps
// 5. Exam time limits

console.log("Date & Time Methods Practice Completed");
