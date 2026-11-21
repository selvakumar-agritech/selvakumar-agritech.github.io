// Website loading message

console.log(
    "Welcome to Selvakumar A's AgriTech Portfolio!"
);


// Display current year in the footer

const footer = document.querySelector("footer");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()}
        Selvakumar A. All Rights Reserved.`;

}


// Welcome message

console.log(
    "Exploring Agriculture Through Technology."
);
