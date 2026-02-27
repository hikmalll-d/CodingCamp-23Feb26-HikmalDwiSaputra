// Welcome message
window.onload = function () {
    let name = prompt("Enter your name:");
    if (!name) name = "Guest";

    document.getElementById("welcome-speech")
        .innerHTML = "Hi " + name + ", I'm Hikmal Dwi Saputra";
};

// Form validation
document.getElementById("contact-form")
    .addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
        let result = document.getElementById("result");

        if (name === "" || email === "" || message === "") {
            result.style.color = "red";
            result.innerHTML = "Please fill all fields!";
            return;
        }

        result.style.color = "green";
        result.innerHTML = "Message sent successfully!";
        this.reset();
    });

// Scroll reveal
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