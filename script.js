
function toggleMenu() {
    const menu = document.querySelector(".nav-links");

    if (menu) {
        menu.classList.toggle("show");
    }
}


// Add a small fade-in effect when the page loads

document.addEventListener("DOMContentLoaded", function () {

    document.body.classList.add("loaded");

});


// Close mobile menu when a link is clicked

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        const menu = document.querySelector(".nav-links");

        if (menu) {
            menu.classList.remove("show");
        }

    });

});
