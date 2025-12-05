import { events } from "./eventsArray.js";
import { renderEvents } from "./eventsCardsScript.js";

// Filter featured events
const featuredEvents = events.filter((event) => event.featured === true);

// Render featured events on the home page
renderEvents(featuredEvents, "featured-list");
