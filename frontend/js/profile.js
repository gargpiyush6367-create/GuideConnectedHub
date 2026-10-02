const expertId = localStorage.getItem("expertId");

async function loadProfile() {

    const response = await fetch("http://localhost:8080/api/experts/" + expertId);

    const expert = await response.json();

    document.getElementById("expertName").innerText = expert.name;

    document.getElementById("expertProfession").innerText = expert.profession;

    document.getElementById("expertExperience").innerText = expert.experience;

    document.getElementById("expertFee").innerText = expert.meetingFee;

    document.getElementById("linkedin").href = expert.linkedin;

    document.getElementById("instagram").href = expert.instagram;

    document.getElementById("expertDescription").innerText =
        expert.name + " is a verified " + expert.profession +
        " available for one-to-one consultation through ExpertConnect.";

}

loadProfile();