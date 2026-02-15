/* ============================================
   ANDREW HICKS — PERSONAL PORTFOLIO
   Main JavaScript
   ============================================ */

(function () {
  'use strict';

  /* --- Mobile Navigation --- */
  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelectorAll('.nav-links a:not(.nav-cta a)');

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      header.classList.toggle('nav-open');
      const isOpen = header.classList.contains('nav-open');
      navToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when a link is clicked
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        header.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close menu on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && header.classList.contains('nav-open')) {
        header.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        navToggle.focus();
      }
    });
  }


  /* --- Sticky Header Background on Scroll --- */
  function handleScroll() {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();


  /* --- Active Navigation State --- */
  function setActiveNav() {
    var path = window.location.pathname;
    var page = path.substring(path.lastIndexOf('/') + 1) || 'index.html';

    navLinks.forEach(function (link) {
      var href = link.getAttribute('href');
      if (href === page || (page === '' && href === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  setActiveNav();


  /* --- Scroll Reveal Animations --- */
  function initReveal() {
    var elements = document.querySelectorAll('[data-reveal]');
    if (!elements.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  initReveal();


  /* --- Contact Form Handling --- */
  var contactForm = document.getElementById('contact-form');

  if (contactForm) {
    var formSuccess = document.querySelector('.form-success');

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Clear previous errors
      var groups = contactForm.querySelectorAll('.form-group');
      groups.forEach(function (group) {
        group.classList.remove('has-error');
      });

      // Validate
      var isValid = true;
      var name = contactForm.querySelector('#name');
      var email = contactForm.querySelector('#email');
      var message = contactForm.querySelector('#message');

      if (!name.value.trim()) {
        showError(name, 'Please enter your name.');
        isValid = false;
      }

      if (!email.value.trim()) {
        showError(email, 'Please enter your email address.');
        isValid = false;
      } else if (!isValidEmail(email.value.trim())) {
        showError(email, 'Please enter a valid email address.');
        isValid = false;
      }

      if (!message.value.trim()) {
        showError(message, 'Please enter a message.');
        isValid = false;
      }

      if (!isValid) return;

      // Submit via Formspree
      var submitBtn = contactForm.querySelector('.form-submit .btn');
      var originalHTML = submitBtn.innerHTML;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      var formData = new FormData(contactForm);

      fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      }).then(function (response) {
        if (response.ok) {
          contactForm.style.display = 'none';
          formSuccess.classList.add('visible');
        } else {
          response.json().then(function (data) {
            submitBtn.innerHTML = originalHTML;
            submitBtn.disabled = false;
            var msg = (data && data.errors && data.errors.length)
              ? data.errors.map(function (e) { return e.message; }).join(', ')
              : 'Something went wrong.';
            alert(msg + ' Please try again or email me directly at ahicks5.nd@gmail.com');
          }).catch(function () {
            submitBtn.innerHTML = originalHTML;
            submitBtn.disabled = false;
            alert('Something went wrong. Please try again or email me directly at ahicks5.nd@gmail.com');
          });
        }
      }).catch(function () {
        submitBtn.innerHTML = originalHTML;
        submitBtn.disabled = false;
        alert('Connection error. Please try again or email me directly at ahicks5.nd@gmail.com');
      });
    });

    // Remove error on input
    contactForm.querySelectorAll('.form-input, .form-textarea, .form-select').forEach(function (input) {
      input.addEventListener('input', function () {
        this.closest('.form-group').classList.remove('has-error');
      });
    });
  }

  function showError(input, message) {
    var group = input.closest('.form-group');
    group.classList.add('has-error');
    var errorEl = group.querySelector('.form-error');
    if (errorEl) {
      errorEl.textContent = message;
    }
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }


  /* --- Smooth Scroll for Anchor Links --- */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });


  /* --- Copyright Year --- */
  var yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

})();
