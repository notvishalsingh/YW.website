document.addEventListener("DOMContentLoaded", () => {
  // Handle form submission
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! Your form has been submitted.");
      form.reset();
    });
  });
});

