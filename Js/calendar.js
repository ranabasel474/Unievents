import { events } from "./eventsArray.js";
import { renderEvents } from "./eventsCardsScript.js";

const registeredEventIds = [1, 3, 5];

// Get registered events for a specific date
function getEventsForDate(selectedDate) {
  const [year, month, day] = selectedDate.split("-");
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[parseInt(month) - 1];

  return events.filter(
    (event) =>
      registeredEventIds.includes(event.id) &&
      event.date.includes(monthName) &&
      event.date.includes(day) &&
      event.date.includes(year)
  );
}

// Get all registered events
function getRegisteredEvents() {
  return events.filter((event) => registeredEventIds.includes(event.id));
}

document.addEventListener("DOMContentLoaded", function () {
  const calendarInput = document.getElementById("calendar");
  const titleElement = document.getElementById("calendar-title");

  // Show all registered events by default
  renderEvents(
    getRegisteredEvents(),
    "calendar-events-list",
    false,
    "You have no registered events."
  );

  if (calendarInput) {
    calendarInput.addEventListener("change", (e) => {
      if (e.target.value) {
        titleElement.textContent = "Your Events";
        renderEvents(
          getEventsForDate(e.target.value),
          "calendar-events-list",
          false,
          "You have no registered events for this date."
        );
      } else {
        titleElement.textContent = "Your Upcoming Events";
        renderEvents(
          getRegisteredEvents(),
          "calendar-events-list",
          false,
          "You have no registered events."
        );
      }
    });
  }
});

export { registeredEventIds };
