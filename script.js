const toggleBtn = document.getElementById("toggle-btn");

// Check if a theme has been saved in localStorage
const currentTheme = localStorage.getItem("theme");

// Apply the saved theme on page load
if(currentTheme === "dark-theme"){
  document.body.classList.add("dark-theme")
}else{
  document.body.classList.add("light-theme")
}

toggleBtn.addEventListener("click", function() {
  // Toggle the "dark-theme" class on the body
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");
  // Get the current theme
  const currentTheme = document.body.classList.contains("dark-theme") ? "dark-theme" : "light-theme";
  // Save the current theme in localStorage
  localStorage.setItem("theme", currentTheme);
});
