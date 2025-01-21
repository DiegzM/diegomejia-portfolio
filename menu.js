var hamburgerButton = document.getElementById("hamburger-button");
var hamburgerIcon = document.getElementById("hamburger-icon");
var fullscreenMenu = document.getElementById("fullscreen-menu");
var topbar = document.querySelector(`.topbar`);
var topbarBackgroundColor = topbar.style.backgroundColor;
var isHomepage = topbar.classList.contains("topbar-homepage");

hamburgerButton.addEventListener("click", function() {
    // Toggle the menu visibility
    fullscreenMenu.style.display = fullscreenMenu.style.display === "flex" ? "none" : "flex";

    // Toggle the hamburger icon between hamburger and X
    if (fullscreenMenu.style.display === "flex") {
        hamburgerIcon.src = "/media/homepage/x_button.png";
        if (isHomepage) {
            console.log("on")
            topbar.classList.remove("topbar-homepage")
            topbar.style.backgroundColor = window.getComputedStyle(fullscreenMenu).backgroundColor;
        }
    } else {
        hamburgerIcon.src = "/media/homepage/hamburger_button.png";
        if (isHomepage) {
            console.log("off")
            topbar.classList.add("topbar-homepage")
            topbar.style.backgroundColor = topbarBackgroundColor;
        }
    }
});

    // Automatically close menu if window is resized to a large enough width
window.addEventListener("resize", function() {
    if (window.innerWidth > 1200) {
        fullscreenMenu.style.display = "none"; // Hide the menu on large screens
        hamburgerIcon.src = "/media/homepage/hamburger_button.png"; // Revert to hamburger icon
    }
});

