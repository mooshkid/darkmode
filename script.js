// THEME STUFF
// Check if a theme has been saved in localStorage
const currentTheme = localStorage.getItem("theme");

// Apply the saved theme on page load
if (currentTheme === "light-theme"){
  document.documentElement.classList.add("light-theme");
  document.querySelector("#toggle-switch input").checked = true;
}
else {
  document.documentElement.classList.add("dark-theme");
  document.querySelector("#toggle-switch input").checked = false;
}

// Called when toggle-switch is clicked
function toggleTheme() {
  // Toggle the "dark-theme" class on the documentElement (ie. html)
  document.documentElement.classList.toggle("dark-theme");
  document.documentElement.classList.toggle("light-theme");
  // Get the current theme
  const currentTheme = document.documentElement.classList.contains("dark-theme") ? "dark-theme" : "light-theme";
  // Save the current theme in localStorage
  localStorage.setItem("theme", currentTheme);
  // Check the toggle-switch input checkbox when the theme is light
  document.querySelector('#toggle-switch input[type="checkbox"]').checked = currentTheme === 'light-theme';
};



// ADD NAV STUFF HERE I THINK
// Hamburger button
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    const isOpened = hamburger.getAttribute('aria-expanded');
    if (isOpened === 'false') {
        hamburger.setAttribute('aria-expanded', 'true');
    }
    else {
        hamburger.setAttribute('aria-expanded', 'false');
    }
});