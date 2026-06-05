alert("JavaScript Loaded");
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        document.getElementById("successMsg").innerHTML =
            "✅ Message Sent Successfully!";

        form.reset();
    });
}