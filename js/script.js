// ==========================
// WELCOME MESSAGE
// ==========================
window.onload = function () {
    let name = prompt("Enter your name:");
    if (!name) name = "Guest";

    const welcomeText = document.getElementById("welcome-speech");
    if (welcomeText) {
        welcomeText.innerHTML = "Hi " + name + ", I'm Hikmal Dwi Saputra";
    }
};


// ==========================
// CONTACT FORM (OUTPUT LANGSUNG MUNCUL, HILANG 1 MENIT)
// ==========================
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contact-form");
    const messageList = document.getElementById("message-list");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (name === "" || email === "" || message === "") {
                alert("Please fill all fields!");
                return;
            }

            // ==========================
            // BUAT CARD BARU
            // ==========================
            const messageCard = document.createElement("div");
            messageCard.classList.add("message-card");

            messageCard.innerHTML = `
                <h3>New Message</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `;

            messageList.appendChild(messageCard);

            form.reset();

            // ==========================
            // HILANG SETELAH 1 MENIT
            // ==========================
            setTimeout(function () {
                messageCard.classList.add("fade-out");

                setTimeout(function () {
                    messageCard.remove();
                }, 600); // tunggu animasi fade out selesai
            }, 60000); // 1 menit
        });
    }
});


// ==========================
// SCROLL REVEAL
// ==========================
function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {
        let windowHeight = window.innerHeight;
        let elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();