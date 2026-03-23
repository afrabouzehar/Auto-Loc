(() => {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelector('.nav-liens');
  if (!navbar || !navLinks) return;

  const links = [...navLinks.children];

  // ===== PC MENU =====
  navLinks.innerHTML = '';

  // 3 premiers liens
  links.slice(0, 3).forEach(li => navLinks.appendChild(li.cloneNode(true)));

  // Bouton "Plus"
  if (links.length > 3) {
    const more = document.createElement('li');
    more.textContent = 'Plus ▾';

    const dropdown = document.createElement('ul');

    links.slice(3).forEach(li => {
      dropdown.appendChild(li.cloneNode(true));
    });

    more.appendChild(dropdown);

    more.addEventListener('click', () => {
      dropdown.classList.toggle('open');
    });

    navLinks.appendChild(more);
  }

  // ===== MOBILE MENU =====
  const burger = document.createElement('button');
  burger.textContent = '☰';

  const mobileMenu = document.createElement('ul');
  mobileMenu.className = 'mobile-menu';

  links.forEach(li => {
    mobileMenu.appendChild(li.cloneNode(true));
  });

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    burger.textContent = mobileMenu.classList.contains('open') ? '✕' : '☰';
  });

  navbar.appendChild(burger);
  navbar.after(mobileMenu);
})();