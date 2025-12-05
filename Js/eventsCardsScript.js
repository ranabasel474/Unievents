import { events } from "./eventsArray.js";

export function renderEvents(
  list,
  containerId,
  showViewDetails = true,
  noResultsMessage = "No matching events found."
) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  if (!list || list.length === 0) {
    container.innerHTML = `
      <p class="text-gray-300">${noResultsMessage}</p>
    `;
    return;
  }

  list.forEach((event) => {
    let card = document.createElement("article");
    card.className = "event-card";

    // Build the button HTML separately
    let buttonHTML = "";
    if (showViewDetails) {
      buttonHTML = `<a class="primary-btn" href="eventDetails.html?id=${event.id}">View Details</a>`;
    }

    card.innerHTML = `
      <img src="${event.image}" alt="${event.title}" class="event-image"/>

      <p class="event-type"><strong>${event.type}</strong></p>

      <h3 class="event-title">${event.title}</h3>

      <div class="event-info-group">

        <p class="event-info">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#334155" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
            <path d="M22 10v6"></path>
            <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
          </svg>
          <strong>University:</strong> ${event.university}
        </p>

        <p class="event-info">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#334155" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M8 2v4"></path>
            <path d="M16 2v4"></path>
            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
            <path d="M3 10h18"></path>
          </svg>
          <strong>Date:</strong> ${event.date}
        </p>

        <p class="event-info">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#334155" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <strong>Location:</strong> ${event.location}
        </p>

      </div>

      ${buttonHTML}
    `;
    container.appendChild(card);
  });
}
if (document.getElementById("events-list")) {
  renderEvents(events, "events-list");
}
