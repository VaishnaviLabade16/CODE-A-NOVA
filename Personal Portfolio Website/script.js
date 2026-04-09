(function(){
    emailjs.init("YOUR_PUBLIC_KEY");
})();

document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault();

    emailjs.sendForm("service_u32noy5", "template_3zt8ogk", this)
    .then(() => {
        document.getElementById("status").innerText = "Message Sent Successfully!";
    }, () => {
        document.getElementById("status").innerText = "Failed to Send!";
    });
});