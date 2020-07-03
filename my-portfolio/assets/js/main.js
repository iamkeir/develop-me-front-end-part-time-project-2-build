/* MOBILE NAV */

// Get toggle element
var toggle = document.getElementsByClassName('js-nav-toggle')[0];
var nav = document.getElementsByClassName('js-nav')[0];

// Listen for click event
toggle.addEventListener('click', function(e){
  e.preventDefault(); // prevent default behaviour of link
  nav.classList.toggle('is-visible'); // toggle visibility of nav
});