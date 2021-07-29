function convertToHoursMinutes(number) {
  let display = " ";
  let hours = Math.floor(number / 60);
  let minutes = number % 60;

  if (hours != 0 && minutes != 0) {
    display += hours + " " + (hours == 1 ? "hour" : "hours") + ", ";
  }
  if (hours != 0 && minutes == 0) {
    display += hours + " " + (hours == 1 ? "hour." : "hours.");
  }
  if (minutes != 0) {
    display += minutes + " " + (minutes == 1 ? "minute." : "minutes.");
  }
  return display;
}
console.log(convertToHoursMinutes(120));
