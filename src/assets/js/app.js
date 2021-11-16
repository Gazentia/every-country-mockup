function menuMobileHandler(e) {
  const menuBtn = e.target.closest('#menuBtn');
  const menuMobile = document.getElementById('menuMobile');
  const menuMobileState = menuMobile.classList;
  const menuBtnState = menuBtn.classList;
  const body = document.body.classList;
  if (!menuBtnState.contains('open')) {
    body.add('no-scroll');
    menuMobileState.add('open');
    menuBtnState.add('open');
  } else {
    body.remove('no-scroll');
    menuMobileState.remove('open');
    menuBtnState.remove('open');
  }
}

function sideMenuToggleHandler(e) {
  const sideMenu = document.getElementById("sideMenu");
  if (sideMenu) {
    sideMenu.classList.toggle('open');
  }
}

function sideMenuToggle() {
  const menuBtn = document.getElementById('sideMenuToggle');
  menuBtn.addEventListener('click', sideMenuToggleHandler);
}

function menuMobile() {
  const menuBtn = document.getElementById('menuBtn');
  menuBtn.addEventListener('click', menuMobileHandler);
}

function init() {
  menuMobile();
  sideMenuToggle();
}

init();
