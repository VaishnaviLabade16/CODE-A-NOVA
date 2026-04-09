(function(){
    emailjs.init("prI_sE2uc0yUsF4SR");
})();

function showDetails(text) {
    alert(text);
}

function toggle(element) {
     element.classList.toggle("active");
}

document.getElementById("appointment-form").addEventListener("submit", function(e){
    e.preventDefault();

    emailjs.sendForm("service_u32noy5", "template_3zt8ogk", this)
    .then(() => {
        alert("Appointment Booked!");
    }, () => {
        alert("Failed!");
    });
});

document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault();

    emailjs.sendForm("service_u32noy5", "template_3zt8ogk", this)
    .then(() => {
        alert("Message Sent!");
    }, () => {
        alert("Failed!");
    });
});