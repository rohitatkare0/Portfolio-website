
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Footer year update
const footer = document.querySelector('footer p');
footer.innerHTML = `© ${new Date().getFullYear()} Rohit Atkare. All rights reserved.`;

![Portfolio Screenshot](screenshot.png)
