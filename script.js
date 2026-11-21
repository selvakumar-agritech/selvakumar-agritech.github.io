// MOBILE NAVIGATION

const menuButton = document.getElementById("menu-toggle");

const navigation = document.getElementById("nav-links");

menuButton.addEventListener("click", function () {

    navigation.classList.toggle("active");

    const isOpen = navigation.classList.contains("active");

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.textContent = isOpen ? "✕" : "☰";

});


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function () {

        navigation.classList.remove("active");

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.textContent = "☰";

    });

});


// AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// WEBSITE CONSOLE MESSAGE

console.log(
    "Welcome to Selvakumar A's AgriTech Portfolio!"
);
