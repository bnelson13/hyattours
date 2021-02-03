const sideMenu = document.querySelector('.sideMenu');
const sideMenuOpen = document.querySelector('.sideMenuButton');
const sideMenuClose = document.querySelector('.sideMenuClose');

sideMenuOpen.addEventListener('click', () => {
	sideMenu.style.display = 'block';
});

sideMenuClose.addEventListener('click', () => {
	sideMenu.style.display = 'none';
});
