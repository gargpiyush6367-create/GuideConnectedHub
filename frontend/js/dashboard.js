// =====================================
// DASHBOARD JAVASCRIPT
// =====================================

// Welcome Message

window.addEventListener("load", () => {

    console.log("Dashboard Loaded Successfully.");

});

// ================================
// APPROVE BUTTON
// ================================

const approveButtons = document.querySelectorAll(".approve-btn");

approveButtons.forEach(button => {

    button.addEventListener("click", function () {

        alert("Meeting Approved Successfully!");

        this.innerHTML = "Approved";

        this.disabled = true;

        this.style.background = "#16a34a";

    });

});

// ================================
// REJECT BUTTON
// ================================

const rejectButtons = document.querySelectorAll(".reject-btn");

rejectButtons.forEach(button => {

    button.addEventListener("click", function () {

        alert("Meeting Rejected.");

        this.innerHTML = "Rejected";

        this.disabled = true;

        this.style.background = "#dc2626";

    });

});

// ================================
// JOIN BUTTON
// ================================

const joinButtons = document.querySelectorAll(".join-btn");

joinButtons.forEach(button => {

    button.addEventListener("click", () => {

        window.location.href = "meeting-room.html";

    });

});