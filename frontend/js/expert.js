// Load Experts from Spring Boot

async function loadExperts() {

    try {

        const response = await fetch("http://localhost:8080/api/experts");

        const experts = await response.json();

        const container = document.getElementById("expertContainer");

        container.innerHTML = "";

        experts.forEach(expert => {

            container.innerHTML += `

            <div class="expert-card">

                <img src="assets/images/default-profile.png">

                <h3>${expert.name}</h3>

                <p>${expert.profession}</p>

                <p>₹${expert.meetingFee} / Meeting</p>

                <button onclick="viewProfile(${expert.id})">
                    View Profile
                </button>

            </div>

            `;

        });

    }

    catch(error){

        console.log(error);

    }

}

function viewProfile(id){

    localStorage.setItem("expertId", id);

    window.location.href = "expert-profile.html";

}

loadExperts();