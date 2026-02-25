(function () {
  const nav = document.querySelector('[data-nav]');
  const toggle = document.querySelector('[data-nav-toggle]');
  const links = document.querySelectorAll('nav a[data-page]');
  const current = document.body.getAttribute('data-page');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });
  }

  links.forEach(function (link) {
    if (link.getAttribute('data-page') === current) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
})();
