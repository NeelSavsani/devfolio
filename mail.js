document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const parms = {
        first_name: document.querySelector('input[name="first_name"]').value,
        last_name: document.querySelector('input[name="last_name"]').value,
        email: document.querySelector('input[name="email"]').value,
        subject: document.querySelector('input[name="subject"]').value,
        message: document.querySelector('textarea[name="message"]').value,
    };

    console.log("Sending...", parms);

    emailjs.send("service_a1x5kf6", "template_ndnbaub", parms)
        .then(function (response) {
            console.log("SUCCESS", response);
            alert("✅ Email sent successfully!");
            document.getElementById("contactForm").reset();
        }, function (error) {
            console.error("ERROR", error);
            alert("❌ Failed to send email: " + error.text);
        });
});
