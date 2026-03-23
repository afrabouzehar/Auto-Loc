(() => {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelector('.nav-liens');

  if (!navbar || !navLinks) return;

  const items = [...navLinks.querySelectorAll('li')].map((li) => li.cloneNode(true));
  if (items.length === 0) return;

  // ===== DESKTOP MENU =====
  navLinks.innerHTML = '';
  navLinks.classList.add('nav-primary');

  items.slice(0, 3).forEach((item) => navLinks.appendChild(item));

  if (items.length > 3) {
    const moreItem = document.createElement('li');
    moreItem.className = 'nav-more';

    const moreButton = document.createElement('button');
    moreButton.type = 'button';
    moreButton.className = 'nav-toggle';
    moreButton.setAttribute('aria-expanded', 'false');
    moreButton.textContent = 'Plus ▾';

    const moreMenu = document.createElement('ul');
    moreMenu.className = 'nav-more-menu';

    items.slice(3).forEach((item) => {
      moreMenu.appendChild(item.cloneNode(true));
    });

    moreButton.addEventListener('click', () => {
      const isOpen = moreItem.classList.toggle('open');
      moreButton.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('click', (event) => {
      if (!moreItem.contains(event.target)) {
        moreItem.classList.remove('open');
        moreButton.setAttribute('aria-expanded', 'false');
      }
    });

    moreItem.append(moreButton, moreMenu);
    navLinks.appendChild(moreItem);
  }

  // ===== MOBILE MENU (PHONE ONLY, via CSS media query) =====
  const burger = document.createElement('button');
  burger.type = 'button';
  burger.className = 'nav-burger';
  burger.setAttribute('aria-label', 'Ouvrir le menu de navigation');
  burger.setAttribute('aria-expanded', 'false');
  burger.textContent = '☰';

  const mobileContainer = document.createElement('div');
  mobileContainer.className = 'nav-mobile-menu';

  const mobileList = document.createElement('ul');
  items.forEach((item) => {
    mobileList.appendChild(item.cloneNode(true));
  });

  mobileContainer.appendChild(mobileList);

  burger.addEventListener('click', () => {
    const isOpen = mobileContainer.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(isOpen));
    burger.setAttribute(
      'aria-label',
      isOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'
    );
    burger.textContent = isOpen ? '✕' : '☰';
  });

  mobileContainer.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      mobileContainer.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Ouvrir le menu de navigation');
      burger.textContent = '☰';
    }
  });

  navbar.appendChild(burger);
  navbar.insertAdjacentElement('afterend', mobileContainer);
})();
