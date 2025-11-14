// -----------------------------
// 1. Dark Mode Toggle
// -----------------------------
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});


// -----------------------------
// 2. Modal (About Section)
// -----------------------------
const modal = document.getElementById("info-modal");
const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");

openModal.addEventListener("click", () => {
  modal.setAttribute("aria-hidden", "false");
  modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modal.setAttribute("aria-hidden", "true");
  modal.style.display = "none";
});

// Close modal by clicking outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.setAttribute("aria-hidden", "true");
    modal.style.display = "none";
  }
});


// -----------------------------
// 3. Contact Form Submission
// -----------------------------
const form = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop form refresh

  formStatus.textContent = "Sending...";
  formStatus.style.color = "orange";

  setTimeout(() => {
    formStatus.textContent = "Message sent successfully!";
    formStatus.style.color = "green";

    form.reset();
  }, 1200);
});


// -----------------------------
// 4. Auto Update Footer Year
// -----------------------------
document.getElementById("year").textContent = new Date().getFullYear();


// -----------------------------
// 5. Close Navigation Menu on Link Click (Mobile)
// -----------------------------
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav-toggle").checked = false;
  });
});