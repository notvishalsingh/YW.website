document.addEventListener('DOMContentLoaded', () => {
  // Handle form submission
  const forms = document.querySelectorAll('form');
  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your form has been submitted.');
      form.reset();
    });
  });

  // Wave animation effect
  const para = document.getElementById("wave-para");
  if (para) {
    const words = para.textContent.split(" ");
    para.innerHTML = words.map((word, i) =>
      `<span style="transition-delay:${(i % 7) * 0.12}s">${word} </span>`
    ).join(" ");
  }
});