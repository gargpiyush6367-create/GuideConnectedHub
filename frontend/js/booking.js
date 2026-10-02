// ==========================================
// BOOKING PAGE JAVASCRIPT
// ==========================================

// Booking Form

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const date = document.getElementById("meetingDate").value;
        const time = document.getElementById("meetingTime").value;
        const duration = document.getElementById("duration").value;
        const agenda = document.getElementById("agenda").value;

        if (date === "" || time === "") {

            alert("Please select meeting date and time.");

            return;

        }

        // Backend API will be connected tomorrow

        alert("Meeting Request Sent Successfully!");

        window.location.href = "my-bookings.html";

    });

}

// ==========================================
// JOIN BUTTON
// ==========================================

const joinButtons = document.querySelectorAll(".join-btn");

joinButtons.forEach(button => {

    button.addEventListener("click", function () {

        window.location.href = "meeting-room.html";

    });

});