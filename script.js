var tabLinks = document.getElementsByClassName('tab-links');
var tabContents = document.getElementsByClassName('tab-contents');

function openTab(event, tabName) {
  for (const tabLink of tabLinks) {
    tabLink.classList.remove('active-link');
  }
  for (const tabContent of tabContents) {
    tabContent.classList.remove('active-tab');
  }
  event.currentTarget.classList.add('active-link');
  document.getElementById(tabName).classList.add('active-tab');
}

const sideMenu = document.getElementById('sidemenu');

function openMenu() {
  sideMenu.style.right = '0';
}

function closeMenu() {
  sideMenu.style.right = '-200px';
}
