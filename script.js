// Basic interactive behavior: responsive nav, smooth scroll, and simple contact form handling.

document.addEventListener('DOMContentLoaded', () => {
  // Responsive nav toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle && navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // close mobile nav if open
        if (navLinks.classList.contains('show')) navLinks.classList.remove('show');
      }
    });
  });

  // Contact form (client-side only)
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        status.textContent = 'Please fill all fields.';
        status.style.color = 'tomato';
        return;
      }

      // Simple fake-send behavior; replace with real API endpoint as needed.
      status.style.color = '';
      status.textContent = 'Sending message...';

      // Simulate async send
      setTimeout(() => {
        status.style.color = '#6ee7b7';
        status.textContent = 'Message sent! I will get back to you soon.';
        form.reset();
      }, 900);
    });
  }
});
