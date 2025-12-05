import { events } from "./eventsArray.js";

document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const eventId = parseInt(params.get("id"));

  const event = events.find((e) => e.id === eventId);

  // Populate elements using their IDs
  document.getElementById("eventImage").src = event.image;
  document.getElementById("eventImage").alt = event.title;
  document.getElementById("eventType").textContent = event.type;
  document.getElementById("eventTitle").textContent = event.title;
  document.getElementById("eventUniversity").textContent = event.university;
  document.getElementById("eventDate").textContent = event.date;
  document.getElementById("eventTime").textContent = event.time;
  document.getElementById("eventLocation").textContent = event.location;
  document.getElementById("eventDescription").textContent = event.description;
});
