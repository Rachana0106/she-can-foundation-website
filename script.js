// =========================
// AOS INITIALIZATION
// =========================

AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(255,255,255,0.95)";
        navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";

    } else {

        navbar.style.background = "rgba(255,255,255,0.75)";
        navbar.style.boxShadow = "none";

    }

});

// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = "✕";
    } else {
        menuBtn.innerHTML = "☰";
    }

});

// =========================
// SMOOTH SCROLLING
// =========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

        navLinks.classList.remove("active");
        menuBtn.innerHTML = "☰";

    });

});

// =========================
// GALLERY LIGHTBOX
// =========================

const galleryImages =
    document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        const lightbox =
            document.createElement("div");

        lightbox.classList.add("lightbox");

        lightbox.innerHTML = `
            <span class="close-btn">&times;</span>
            <img src="${image.src}">
        `;

        document.body.appendChild(lightbox);

        lightbox.addEventListener("click", () => {
            lightbox.remove();
        });

    });

});

// =========================
// CONTACT FORM
// =========================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", () => {

        const button =
            form.querySelector("button");

        button.innerHTML = "Sending...";

        setTimeout(() => {

            button.innerHTML =
                "Message Sent ✓";

        }, 2000);

    });

}

// =========================
// PARALLAX HERO IMAGE
// =========================

const blobImage =
    document.querySelector(".blob");

window.addEventListener("mousemove", (e) => {

    if (!blobImage) return;

    let x =
        (window.innerWidth / 2 - e.pageX) / 60;

    let y =
        (window.innerHeight / 2 - e.pageY) / 60;

    blobImage.style.transform =
        `translate(${x}px, ${y}px)`;

});

// =========================
// REVEAL ELEMENTS ON SCROLL
// =========================

const revealElements =
    document.querySelectorAll(
        ".impact-card, .focus-card, .step"
    );

const revealObserver =
    new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add(
                    "show-card"
                );

            }

        });

    }, {
        threshold: 0.2
    });

revealElements.forEach(element => {

    revealObserver.observe(element);

});

// =========================
// FLOATING DOODLE EFFECT
// =========================

const doodles =
    document.querySelectorAll(".floating");

doodles.forEach((doodle, index) => {

    setInterval(() => {

        doodle.style.transform =
            `translateY(${
                Math.random() * 15 - 8
            }px)`;

    }, 2000 + index * 500);

});

// =========================
// DONATION BUTTON EFFECT
// =========================

const donateButtons =
    document.querySelectorAll(
        ".donate-btn, .primary-btn"
    );

donateButtons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
            "translateY(-4px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translateY(0) scale(1)";

    });

});

// =========================
// PAGE LOADER (OPTIONAL)
// =========================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

// =========================
// CONSOLE MESSAGE
// =========================

console.log(
    "%cShe Can Foundation Website Loaded Successfully 💜",
    "font-size:16px;color:#B48CFF;font-weight:bold;"
);