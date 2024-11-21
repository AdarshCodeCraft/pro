document.addEventListener("DOMContentLoaded", () => {
    const themeSwitch = document.getElementById("theme-switch");

    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        themeSwitch.checked = savedTheme === "light-mode";
    }

    // Toggle theme on switch change
    themeSwitch.addEventListener("change", () => {
        if (themeSwitch.checked) {
            document.body.classList.add("light-mode");
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light-mode");
        } else {
            document.body.classList.add("dark-mode");
            document.body.classList.remove("light-mode");
            localStorage.setItem("theme", "dark-mode");
        }
    });
});



const menuIcon = document.getElementById("menu");
const sideMenu = document.getElementById("side-menu");


menuIcon.addEventListener("click", () => {
  // Toggle the side menu
  sideMenu.classList.toggle("open");

  // Slide in additional content
  additionalContent.classList.toggle("show");
});

