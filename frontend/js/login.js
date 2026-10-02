// ===============================
// LOGIN FORM
// ===============================

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {

        alert("Please fill all fields.");

        return;
    }

    // Backend API will be connected later

    alert("Login Successful!");

    // Temporary redirect
    window.location.href = "expert-list.html";

});