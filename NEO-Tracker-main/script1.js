// script.js

// Example: Loop navigation for arrows
// Not required if you manually set links, but useful for scalability

// This script assumes that each page has data attributes for previous and next pages

document.addEventListener("DOMContentLoaded", () => {
    const prevArrow = document.getElementById("prev-arrow");
    const nextArrow = document.getElementById("next-arrow");
  
    if (prevArrow && nextArrow) {
      prevArrow.href = prevArrow.dataset.prev;
      nextArrow.href = nextArrow.dataset.next;
    }
  });
  