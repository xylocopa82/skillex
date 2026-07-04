document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Mobile nav toggle ---------- */
  var hamburger = document.getElementById('hamburger');
  var mainNav = document.getElementById('mainNav');

  if (hamburger && mainNav) {
    hamburger.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    mainNav.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Active nav link on scroll ---------- */
  var sections = Array.from(document.querySelectorAll('main section[id], main[id]'));
  var navLinks = Array.from(document.querySelectorAll('.nav-link[href^="#"]'));

  function setActiveLink() {
    var scrollPos = window.scrollY + 140;
    var current = sections[0];
    sections.forEach(function (sec) {
      if (sec.offsetTop <= scrollPos) current = sec;
    });
    navLinks.forEach(function (link) {
      var targetId = link.getAttribute('href').replace('#', '');
      link.classList.toggle('active', targetId === current.id);
    });
  }
  window.addEventListener('scroll', setActiveLink, { passive: true });
  setActiveLink();

  /* ---------- Back to top button ---------- */
  var backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      backToTop.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Scroll reveal ---------- */
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealTargets = document.querySelectorAll(
    '.section-eyebrow, .section-title, .course-card, .about-visual, .about-copy, ' +
    '.gallery-grid img, .enquiry-copy, .enquiry-form, .contact-card, .map-wrap, .feature-item'
  );

  if (prefersReducedMotion) {
    revealTargets.forEach(function (el) { el.classList.add('in-view'); });
  } else {
    revealTargets.forEach(function (el) { el.setAttribute('data-reveal', ''); });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    revealTargets.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- Hero 3D parallax on mouse move (desktop only, subtle) ---------- */
  var stage = document.querySelector('.canvas-stage');
  if (stage && !prefersReducedMotion && window.matchMedia('(min-width: 901px)').matches) {
    document.querySelector('.hero').addEventListener('mousemove', function (e) {
      var rect = stage.parentElement.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      stage.style.transform = 'rotateY(' + (-14 + x * 10) + 'deg) rotateX(' + (6 - y * 10) + 'deg)';
    });
    document.querySelector('.hero').addEventListener('mouseleave', function () {
      stage.style.transform = '';
    });
  }

  /* ---------- Enquiry form -> WhatsApp ---------- */
  var form = document.getElementById('enquiryForm');
  var successMsg = document.getElementById('formSuccess');
  var WHATSAPP_NUMBER = '919207909190';

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var nameField = document.getElementById('fname');
      var phoneField = document.getElementById('fphone');
      var batchField = document.getElementById('fbatch');
      var msgField = document.getElementById('fmsg');

      var nameRow = nameField.closest('.form-row');
      var phoneRow = phoneField.closest('.form-row');

      var isValid = true;

      if (!nameField.value.trim()) {
        nameRow.classList.add('invalid');
        isValid = false;
      } else {
        nameRow.classList.remove('invalid');
      }

      var phonePattern = /^[0-9]{10}$/;
      if (!phonePattern.test(phoneField.value.trim())) {
        phoneRow.classList.add('invalid');
        isValid = false;
      } else {
        phoneRow.classList.remove('invalid');
      }

      if (!isValid) return;

      var name = nameField.value.trim();
      var phone = phoneField.value.trim();
      var batch = batchField.value;
      var message = msgField.value.trim();

      var text = 'Hi Skillex Digital Academy, ഞാൻ Graphic Design കോഴ്സിനെ കുറിച്ച് അന്വേഷിക്കുകയാണ്.%0A%0A' +
        'പേര്: ' + encodeURIComponent(name) + '%0A' +
        'ഫോൺ: ' + encodeURIComponent(phone) + '%0A' +
        'താല്പര്യമുള്ള ബാച്ച്: ' + encodeURIComponent(batch) +
        (message ? '%0Aസന്ദേശം: ' + encodeURIComponent(message) : '');

      var waUrl = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + text;

      successMsg.textContent = 'WhatsApp തുറക്കുന്നു... സന്ദേശം അയക്കാൻ "Send" അമർത്തൂ.';
      successMsg.classList.add('show');

      window.open(waUrl, '_blank', 'noopener');
      form.reset();
    });

    /* Remove invalid state as user types */
    ['fname', 'fphone'].forEach(function (id) {
      var field = document.getElementById(id);
      field.addEventListener('input', function () {
        field.closest('.form-row').classList.remove('invalid');
      });
    });
  }

});
