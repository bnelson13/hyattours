const sforsBackground = document.querySelector('.sfors-background');
const sforsBackgroundButton = document.querySelector('.sfors-background-button');

const sforsActivitiesBackground = document.querySelector('.sfors-activities-background');
const sforsActivitieBackgroundButton = document.querySelector('.sfors-activities-background-button');

const mainBackground = document.querySelector('.main-background');

sforsBackgroundButton.addEventListener('click', () => {
	console.log('click');
	sforsActivitiesBackground.style.display = 'block';
	sforsBackground.style.display = 'none';
	window.scrollTo(0, 0);
});

sforsActivitieBackgroundButton.addEventListener('click', () => {
	console.log('2 click');
	mainBackground.style.display = 'block';
	sforsActivitiesBackground.style.display = 'none';
});
