// =========================================
// REGISTER PAGE
// =========================================

const role = document.getElementById("role");
const expertFields = document.getElementById("expertFields");

// Show/Hide Expert Fields
function toggleExpertFields() {

    if (role.value === "EXPERT") {

        expertFields.style.display = "block";

    } else {

        expertFields.style.display = "none";

    }

}

// Initial Load
toggleExpertFields();

// On Change
role.addEventListener("change", toggleExpertFields);


// =========================================
// REGISTER FORM
// =========================================

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (name === "" || email === "" || password === "") {

        alert("Please fill all required fields.");

        return;

    }

    if (role.value === "USER") {

        alert("User Registration Successful!");

    } else {

        const profession = document.getElementById("profession").value;
        const fee = document.getElementById("fee").value;

        if (profession === "" || fee === "") {

            alert("Please complete Expert Details.");

            return;

        }

        alert("Expert Registration Successful!");

    }

    // Backend API will be connected later

    window.location.href = "login.html";

});