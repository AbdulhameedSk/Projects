const firebaseConfig = {
    //   copy your firebase config informations
    apiKey: "AIzaSyC5f5Do5VNO2MW8jVIAHHTIdjhNEfoGAKE",
    authDomain: "contactform-331b0.firebaseapp.com",
    databaseURL: "https://contactform-331b0-default-rtdb.firebaseio.com",
    projectId: "contactform-331b0",
    storageBucket: "contactform-331b0.appspot.com",
    messagingSenderId: "759386829103",
    appId: "1:759386829103:web:c2bd3fed00e82e4561f1da"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");

    saveMessages(name, emailid, msgContent);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        emailid: emailid,
        msgContent: msgContent,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};