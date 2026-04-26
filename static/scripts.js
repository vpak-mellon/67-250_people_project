// Navbar dropdown for mobile aspect ratio
const menuIcon = document.querySelector("#menu-button");
const navbar = document.querySelector(".navbar");
menuIcon.addEventListener("click", () => {
    console.log(navbar.classList);
    navbar.classList.toggle("active");
})

// GET EARLY ACCESS PAGE:
// Check if form is filled out and submit is hit, redirect to confirmation page
if (window.location.pathname.includes("access.html")) {
    document.querySelector(".form-container").addEventListener("submit", function(e) {
        e.preventDefault(); // stop default form submission
        const firstNameField = document.getElementById("first-name").value.trim();
        const lastNameField = document.getElementById("last-name").value.trim();
        const emailField = document.getElementById("email-address").value.trim();
        if (firstNameField !== "" && lastNameField !== "" && emailField !== "") {
            window.location.href = "success.html";
            console.log("REDIRECT");
        }
    });
}