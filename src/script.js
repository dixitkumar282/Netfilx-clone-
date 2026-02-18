document.addEventListener("DOMContentLoaded", () => {
    initHeroForm();
    initFAQ();
    initNavbarScroll();
    initSignInModal();
});

/**
 * Handles the Hero Section email form
 */
function initHeroForm() {
    const submitBtn = document.getElementById("heroSubmit");
    const emailInput = document.getElementById("heroEmail");

    if (!submitBtn || !emailInput) return;

    // Load saved email
    const savedEmail = localStorage.getItem("userEmail");
    if (savedEmail) emailInput.value = savedEmail;

    submitBtn.addEventListener("click", () => {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            showValidationFeedback(emailInput, "Email is required");
            return;
        }

        if (!emailRegex.test(email)) {
            showValidationFeedback(emailInput, "Please enter a valid email address");
            return;
        }

        // Success state
        submitBtn.innerText = "Loading...";
        submitBtn.disabled = true;

        setTimeout(() => {
            localStorage.setItem("userEmail", email);
            submitBtn.innerText = "Get Started >";
            submitBtn.disabled = false;
            alert("Welcome! We've saved your email: " + email);
        }, 1000);
    });

    // Clear error on input
    emailInput.addEventListener("input", () => {
        emailInput.style.borderColor = "";
    });
}

/**
 * Toggles the FAQ accordion
 */
function initFAQ() {
    const faqBoxes = document.querySelectorAll(".faqbox");

    faqBoxes.forEach(box => {
        box.addEventListener("click", () => {
            const isActive = box.classList.contains("active");

            // Close all others
            faqBoxes.forEach(other => {
                if (other !== box) other.classList.remove("active");
            });

            // Toggle current
            box.classList.toggle("active", !isActive);
        });
    });
}

/**
 * Handles navbar transparency on scroll
 */
function initNavbarScroll() {
    const nav = document.querySelector("nav");
    if (!nav) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        } else {
            nav.style.backgroundColor = "transparent";
        }
    });
}

/**
 * Simple UI feedback for validation errors
 */
function showValidationFeedback(input, message) {
    input.style.borderColor = "#e50914";
    input.focus();
    alert(message);
}
/**
 * Handles the Sign In Modal
 */
function initSignInModal() {
    const signInBtn = document.querySelector(".btn-red-sm");
    const modal = document.getElementById("signinModal");
    const closeBtn = document.querySelector(".close-btn");

    if (!signInBtn || !modal || !closeBtn) return;

    signInBtn.addEventListener("click", () => {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden"; // Prevent scrolling
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });

    // Close on outside click
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
}
