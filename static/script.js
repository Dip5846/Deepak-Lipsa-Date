// Initialize EmailJS
emailjs.init("j-H47jkQxmDsL5IOJ");

const music = document.getElementById("bgMusic");

function showPage(id) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}

function startJourney() {
    music.play().catch(() => {
        console.log("Autoplay blocked until user interaction.");
    });

    showPage("love");
}

// Playful "No" button
const noBtn = document.getElementById("noBtn");

if (noBtn) {
    noBtn.addEventListener("mouseover", () => {
        noBtn.style.position = "absolute";
        noBtn.style.left = Math.random() * 70 + "%";
        noBtn.style.top = Math.random() * 70 + "%";
    });
}

function finish(food) {

    const date = document.getElementById("dateValue").value;

    if (date === "") {
        alert("📅 Please select a date first.");
        return;
    }

    // Save to Flask backend
    fetch("/success", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            date: date,
            food: food
        })
    });

    // Send Email
    emailjs.send(
        "service_x91kebh",
        "template_6lhj7ae",
        {
            to_name: "Deepak",
            selected_date: date,
            selected_food: food
        }
    ).then(function(response) {
        console.log("Email Sent Successfully!", response);
    }).catch(function(error) {
        console.log("Email Failed:", error);
    });

    document.getElementById("summary").innerHTML =
        `❤️ Our Date: <b>${date}</b><br><br>
         🍽️ Food: <b>${food}</b><br><br>
         I'm really looking forward to spending time with you. 🌹`;

    // Confetti
    if (typeof confetti === "function") {
        confetti({
            particleCount: 180,
            spread: 120
        });
    }

    showPage("thanks");
}