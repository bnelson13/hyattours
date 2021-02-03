// Ensure widow is exact height of viewscreen on mobile
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const welcomePageLoader = document.querySelector('.welcome-page-loader');
const startTourButton = document.querySelector('.start-tour-button');

startTourButton.addEventListener('click', () => {
	welcomePageLoader.classList.add('welcome-page-loader-animation-out');
	setTimeout(() => {
		window.location.href = './pages/hrsf-tour.html';
	}, 1500);
});

document.addEventListener('DOMContentLoaded', () => {
	welcomePageLoader.classList.add('welcome-page-loader-animation-in');
	setTimeout(() => {
		startTourButton.style.opacity = '1';
	}, 3000);
});
