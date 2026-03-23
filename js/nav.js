(() => {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelector('.nav-liens');

  if (!navbar || !navLinks) return;

  const links = Array.from(navLinks.querySelectorAll('li'));
  if (!links.length) return;

  const wrapper = document.createElement('div');
  wrapper.className = 'nav-menu-wrapper';

  navLinks.classList.add('nav-primary');
  navLinks.innerHTML = '';
  links.slice(0, 3).forEach((item) => navLinks.appendChild(item.cloneNode(true)));
  wrapper.appendChild(navLinks);

  const moreItems = links.slice(3);
  if (moreItems.length) {
    const moreContainer = document.createElement('div');
    moreContainer.className = 'nav-more';

    const moreButton = document.createElement('button');
    moreButton.className = 'nav-toggle nav-more-toggle';
    moreButton.type = 'button';
    moreButton.setAttribute('aria-expanded', 'false');
    moreButton.textContent = 'Plus ▾';

    const moreMenu = document.createElement('ul');
    moreMenu.className = 'nav-more-menu';
    moreItems.forEach((item) => moreMenu.appendChild(item.cloneNode(true)));

    moreButton.addEventListener('click', () => {
      const isOpen = moreContainer.classList.toggle('open');
      moreButton.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('click', (event) => {
      if (!moreContainer.contains(event.target)) {
        moreContainer.classList.remove('open');
        moreButton.setAttribute('aria-expanded', 'false');
      }
    });

    moreContainer.append(moreButton, moreMenu);
    wrapper.appendChild(moreContainer);
  }

  const burgerButton = document.createElement('button');
  burgerButton.className = 'nav-toggle nav-burger';
  burgerButton.type = 'button';
  burgerButton.setAttribute('aria-expanded', 'false');
  burgerButton.setAttribute('aria-label', 'Ouvrir le menu');
  burgerButton.textContent = '☰';

  const mobileMenu = document.createElement('div');
  mobileMenu.className = 'nav-mobile-menu';
  const mobileList = document.createElement('ul');
  links.forEach((item) => mobileList.appendChild(item.cloneNode(true)));
  mobileMenu.appendChild(mobileList);

  burgerButton.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    burgerButton.setAttribute('aria-expanded', String(isOpen));
    burgerButton.textContent = isOpen ? '✕' : '☰';
  });

  document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target)) {
      mobileMenu.classList.remove('open');
      burgerButton.setAttribute('aria-expanded', 'false');
      burgerButton.textContent = '☰';
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      mobileMenu.classList.remove('open');
      burgerButton.setAttribute('aria-expanded', 'false');
      burgerButton.textContent = '☰';
    }
  });

  navbar.appendChild(wrapper);
  navbar.appendChild(burgerButton);
  navbar.insertAdjacentElement('afterend', mobileMenu);
})();
