const domain = "meet.jit.si";

const options = {

    roomName: "expertconnect-demo",

    width: "100%",

    height: "100%",

    parentNode: document.querySelector("#jitsi-container"),

    userInfo: {

        displayName: "ExpertConnect User"

    }

};

const api = new JitsiMeetExternalAPI(domain, options);