/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.getElementById("menuButton");
const navbar = document.getElementById("navbar");

menuButton.addEventListener("click", function () {

    navbar.classList.toggle("active");

});


/* Close menu when clicking a navigation link */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");

    });

});


/* =========================================
   TYPING EFFECT
========================================= */

const typingText = document.getElementById("typingText");

const words = [
    "Data Science Student",
    "Python Developer",
    "Backend Developer",
    "Machine Learning Enthusiast",
    "Data Analyst"
];

let wordIndex = 0;

let characterIndex = 0;

let isDeleting = false;


function typingEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (characterIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typingEffect, 1500);

            return;

        }

    } else {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }


    let speed;

    if (isDeleting) {

        speed = 50;

    } else {

        speed = 100;

    }


    setTimeout(typingEffect, speed);

}


typingEffect();


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================
   BACK TO TOP
========================================= */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const subject =
        document.getElementById("subject").value;

    const message =
        document.getElementById("message").value;


    const mailBody =
        "Name: " + name +
        "\n\nEmail: " + email +
        "\n\nMessage:\n" + message;


    const mailtoLink =
        "mailto:jeevanpaulg49@gmail.com" +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(mailBody);


    window.location.href = mailtoLink;

});


/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const animatedElements =
    document.querySelectorAll(
        ".about-card, " +
        ".skill-card, " +
        ".project-card, " +
        ".timeline-item, " +
        ".certificate-card, " +
        ".contact-box"
    );


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


animatedElements.forEach(function (element) {

    observer.observe(element);

});