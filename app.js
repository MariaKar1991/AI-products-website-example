// Select the mobile menu button by its ID
const menu = document.querySelector("#mobile-menu");

// Select the menu links container by its class
const menuLinks = document.querySelector(".navbar__menu");

// Add a click event listener to the mobile menu button
menu.addEventListener("click", function () {
  // Toggle the "is-active" class on the mobile menu button for styling changes
  menu.classList.toggle("is-active");

  // Toggle the "active" class on the menu links container for showing/hiding navigation links
  menuLinks.classList.toggle("active");
});
