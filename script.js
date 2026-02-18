// ===============================
// NETFLIX CLONE ADVANCED JS
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // 1. EMAIL VALIDATION (REGEX)
    // ===============================
    const getStartedBtn = document.querySelector(".btn-red");
    const emailInput = document.querySelector(".hero-form input");

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    getStartedBtn.addEventListener("click", function () {
        const email = emailInput.value.trim();

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        getStartedBtn.innerText = "Loading...";
        getStartedBtn.disabled = true;

        setTimeout(() => {
            alert("Welcome! Account created for " + email);
            localStorage.setItem("userEmail", email);
            emailInput.value = "";
            getStartedBtn.innerText = "Get Started >";
            getStartedBtn.disabled = false;
        }, 1500);
    });


    // ===============================
    // 2. REAL FAQ ACCORDION
    // ===============================
    const faqItems = document.querySelectorAll(".faq details");

    faqItems.forEach(item => {
        item.addEventListener("click", function () {
            faqItems.forEach(other => {
                if (other !== item) {
                    other.removeAttribute("open");
                }
            });
        });
    });


    // ===============================
    // 3. SIGN-IN MODAL
    // ===============================
    const signInBtn = document.querySelector(".btn-red-sm");
    const modal = document.getElementById("signinModal");
    const closeBtn = document.querySelector(".close-btn");

    signInBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            modal.style.display = "none";
        }
    });


    // ===============================
    // 4. NAVBAR SCROLL EFFECT
    // ===============================
    const navbar = document.querySelector("nav");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "black";
        } else {
            navbar.style.backgroundColor = "transparent";
        }
    });


    // ===============================
    // 5. SCROLL REVEAL ANIMATION
    // ===============================
    const sections = document.querySelectorAll(".first");

    function revealOnScroll() {
        const triggerBottom = window.innerHeight * 0.8;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
        section.style.transition = "all 0.6s ease";
    });

    window.addEventListener("scroll", revealOnScroll);


    // ===============================
    // 6. HERO TYPING EFFECT
    // ===============================
    const heroTitle = document.querySelector(".hero h1");
    const originalText = heroTitle.innerText;
    heroTitle.innerText = "";

    let index = 0;

    function typeEffect() {
        if (index < originalText.length) {
            heroTitle.innerText += originalText.charAt(index);
            index++;
            setTimeout(typeEffect, 40);
        }
    }

    typeEffect();


    // ===============================
    // 7. BACK TO TOP BUTTON
    // ===============================
    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });


    // ===============================
    // 8. PAGE FADE-IN EFFECT
    // ===============================
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 1s ease";

    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);


    // ===============================
    // 9. AUTO FILL SAVED EMAIL
    // ===============================
    const savedEmail = localStorage.getItem("userEmail");
    if (savedEmail) {
        emailInput.value = savedEmail;
    }


    console.log("Advanced Netflix Clone Loaded Successfully 🚀🔥");

});
