import { events } from "./eventsArray.js";
import { renderEvents } from "./eventsCardsScript.js";

// Apply search and filter criteria to events
function applyFilters() {
  // Get filter values from input fields
  const searchText = document.getElementById("searchText").value.toLowerCase();
  const typeFilter = document.getElementById("typeSelect").value;
  const universityFilter = document.getElementById("universitySelect").value;

  const filteredEvents = events.filter((event) => {
    // Check search input text
    const matchesSearch =
      searchText === "" ||
      event.title.toLowerCase().includes(searchText) ||
      event.description.toLowerCase().includes(searchText) ||
      event.location.toLowerCase().includes(searchText);

    // Check selected type
    const matchesType =
      typeFilter === "All Categories" || event.type === typeFilter;

    // Check selected university
    const matchesUniversity =
      universityFilter === "" ||
      event.universityCode === universityFilter ||
      event.university === universityFilter;

    // Return true only if all filters match
    return matchesSearch && matchesType && matchesUniversity;
  });

  // Display filtered events
  renderEvents(filteredEvents, "events-list");
}

// Add event listener when page loads
document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("searchBtn");

  if (searchBtn) {
    searchBtn.addEventListener("click", applyFilters);
  }
});