const sideMenu = document.querySelector('.sideMenu');
const sideMenuOpen = document.querySelector('.sideMenuButton');
const sideMenuClose = document.querySelector('.sideMenuCloseButton');

sideMenuOpen.addEventListener('click', () => {
	sideMenu.classList.add('menu-open');
	setTimeout(() => {
		sideMenu.style['boxShadow'] = '0px 4px 4px rgba(0, 0, 0, 0.25)';
	}, 1000);
});

sideMenuClose.addEventListener('click', () => {
	sideMenu.style['boxShadow'] = '0';
	sideMenu.classList.remove('menu-open');
});

const navBar = document.querySelector('.navBar');

document.addEventListener('DOMContentLoaded', () => {
	navBar.classList.add('navBar-animation-in');
});

const sforsTourWrapper = document.querySelector('.sfors-tour-wrapper');
setTimeout(() => {
	sforsTourWrapper.style.backgroundSize = 'auto';
	sforsTourWrapper.style.backgroundPosition = '90% 47%';
	document.body.style.overflow = 'auto';
	sforsTourWrapper.style.height = '240px';
	setTimeout(() => {
		document.querySelector('.tour-title').style.display = 'flex';
	}, 1000);
}, 1500);

const tourStopDiv = document.querySelector('.tour-grid-stops');
const tourIconDiv = document.querySelector('.tour-grid-side-icons');

let tourIcon = `<div class="side-icon-outer"><div class="side-icon-inner"></div></div><div class="gray-line"></div>`;

const sforsStops = [
	{
		stopNumber: '1',
		locationTitle: 'The Ferry Building',
		nextMinutes: '6',
		nextMiles: '.5',
		imageSRC: '../img/ferry-building.png',
		cardBgSize: '300%',
		cardBgPos: '50% 30%',
		mapURL:
			'https://www.google.com/maps/place/Ferry+Building/@37.7958379,-122.3937801,15z/data=!4m5!3m4!1s0x0:0x6cf7a313d6a53ec7!8m2!3d37.7958379!4d-122.3937801',
		shortDescription:
			'The San Francisco Ferry Building is a terminal for ferries that travel across the San Francisco Bay, a food hall and an office building.',
		fullDescription:
			'<p>The San Francisco Ferry Building is a terminal for ferries that travel across the San Francisco Bay, a foodhall and an office building. Designed in 1892 by American architect A. Page Brown in the Beaux Arts style, the ferry building was completed in 1898. At its opening, it was the largest project undertaken in the city up to that time. Brown designed the clock tower after the 12th-century Giralda bell tower in Seville, Spain, and the entire length of the building on both frontages is based on an arched arcade.</p>',
	},
	{
		stopNumber: '2',
		locationTitle: '343 Sansome',
		nextMinutes: '6',
		nextMiles: '.5',
		imageSRC: '../img/343-sansome.png',
		cardBgSize: '300%',
		cardBgPos: '50% 30%',
		mapURL:
			'https://www.google.com/maps/place/343+Sansome+Rooftop+Deck/@37.7936973,-122.401618,15z/data=!4m2!3m1!1s0x0:0x275dae1d752968bc?sa=X&ved=2ahUKEwipxLaJ4b_uAhWaJTQIHQZQDLMQ_BIwCnoECBcQBQ',
		shortDescription:
			'The San Francisco Ferry Building is a terminal for ferries that travel across the San Francisco Bay, a food hall and an office building.',
		fullDescription:
			'The San Francisco Ferry Building is a terminal for ferries that travel across the San Francisco Bay, a foodhall and an office building. Designed in 1892 by American architect A. Page Brown in the Beaux Arts style, the ferry building was completed in 1898. At its opening, it was the largest project undertaken in the city up to that time. Brown designed the clock tower after the 12th-century Giralda bell tower in Seville, Spain, and the entire length of the building on both frontages is based on an arched arcade.',
	},
	{
		stopNumber: '3',
		locationTitle: 'Transamerica Pyramid',
		nextMinutes: '6',
		nextMiles: '.5',
		imageSRC: '../img/transamerica-pyramid.png',
		cardBgSize: '300%',
		cardBgPos: '50% 30%',
		mapURL:
			'https://www.google.com/maps/place/Transamerica+Pyramid/@37.7951775,-122.4027787,15z/data=!4m2!3m1!1s0x0:0x65487a1b70f0a878?sa=X&ved=2ahUKEwiKz5Po4b_uAhU8JDQIHRTBBLEQ_BIwJ3oECEcQBQ',
		shortDescription:
			'The San Francisco Ferry Building is a terminal for ferries that travel across the San Francisco Bay, a food hall and an office building.',
		fullDescription:
			'The San Francisco Ferry Building is a terminal for ferries that travel across the San Francisco Bay, a foodhall and an office building. Designed in 1892 by American architect A. Page Brown in the Beaux Arts style, the ferry building was completed in 1898. At its opening, it was the largest project undertaken in the city up to that time. Brown designed the clock tower after the 12th-century Giralda bell tower in Seville, Spain, and the entire length of the building on both frontages is based on an arched arcade.',
	},
	{
		stopNumber: '4',
		locationTitle: 'Old Telephone Exchange',
		nextMinutes: '6',
		nextMiles: '.5',
		imageSRC: '../img/telephone-exchange.png',
		cardBgSize: '300%',
		cardBgPos: '50% 30%',
		mapURL:
			'https://www.google.com/maps/place/Old+Chinese+Telephone+Exchange/@37.7950842,-122.4084676,17z/data=!3m1!4b1!4m5!3m4!1s0x808580f4b2d763f9:0x90713231399e1178!8m2!3d37.79508!4d-122.4062736',
		shortDescription:
			'The San Francisco Ferry Building is a terminal for ferries that travel across the San Francisco Bay, a food hall and an office building.',
		fullDescription:
			'The San Francisco Ferry Building is a terminal for ferries that travel across the San Francisco Bay, a foodhall and an office building. Designed in 1892 by American architect A. Page Brown in the Beaux Arts style, the ferry building was completed in 1898. At its opening, it was the largest project undertaken in the city up to that time. Brown designed the clock tower after the 12th-century Giralda bell tower in Seville, Spain, and the entire length of the building on both frontages is based on an arched arcade.',
	},
	{
		stopNumber: '5',
		locationTitle: "Dragon's Gate",
		nextMinutes: '6',
		nextMiles: '.5',
		imageSRC: '../img/dragon-gate.png',
		cardBgSize: '300%',
		cardBgPos: '50% 30%',
		mapURL: `https://www.google.com/maps/place/Dragon's+Gate/@37.7950842,-122.4084676,17z/data=!4m5!3m4!1s0x808580896047c7e3:0x7f3069e3f9e27292!8m2!3d37.7912672!4d-122.4058137`,
		shortDescription:
			'The San Francisco Ferry Building is a terminal for ferries that travel across the San Francisco Bay, a food hall and an office building.',
		fullDescription:
			'The San Francisco Ferry Building is a terminal for ferries that travel across the San Francisco Bay, a foodhall and an office building. Designed in 1892 by American architect A. Page Brown in the Beaux Arts style, the ferry building was completed in 1898. At its opening, it was the largest project undertaken in the city up to that time. Brown designed the clock tower after the 12th-century Giralda bell tower in Seville, Spain, and the entire length of the building on both frontages is based on an arched arcade.',
	},
	{
		stopNumber: '6',
		locationTitle: 'Frank Lloyd Wright',
		nextMinutes: '6',
		nextMiles: '.5',
		imageSRC: '../img/frank-wright.png',
		cardBgSize: '300%',
		cardBgPos: '50% 30%',
		mapURL:
			'https://www.google.com/maps/place/Frank+Lloyd+Wright+designed+building/@37.7912714,-122.4080077,17z/data=!4m5!3m4!1s0x8085816a2ed10307:0x6f8d852fac721f51!8m2!3d37.7882844!4d-122.4059018',
		shortDescription:
			'The San Francisco Ferry Building is a terminal for ferries that travel across the San Francisco Bay, a food hall and an office building.',
		fullDescription:
			'The San Francisco Ferry Building is a terminal for ferries that travel across the San Francisco Bay, a foodhall and an office building. Designed in 1892 by American architect A. Page Brown in the Beaux Arts style, the ferry building was completed in 1898. At its opening, it was the largest project undertaken in the city up to that time. Brown designed the clock tower after the 12th-century Giralda bell tower in Seville, Spain, and the entire length of the building on both frontages is based on an arched arcade.',
	},
	{
		stopNumber: '7',
		locationTitle: 'Union Square',
		nextMinutes: '6',
		nextMiles: '.5',
		imageSRC: '../img/union-square.png',
		cardBgSize: '300%',
		cardBgPos: '50% 30%',
		mapURL:
			'https://www.google.com/maps/place/Union+Square,+San+Francisco,+CA+94108/@37.7882886,-122.4080958,17z/data=!4m5!3m4!1s0x8085808ed3fd40bb:0xfe41d9b5994cb6ba!8m2!3d37.7879938!4d-122.4074374',
		shortDescription:
			'The San Francisco Ferry Building is a terminal for ferries that travel across the San Francisco Bay, a food hall and an office building.',
		fullDescription:
			'The San Francisco Ferry Building is a terminal for ferries that travel across the San Francisco Bay, a foodhall and an office building. Designed in 1892 by American architect A. Page Brown in the Beaux Arts style, the ferry building was completed in 1898. At its opening, it was the largest project undertaken in the city up to that time. Brown designed the clock tower after the 12th-century Giralda bell tower in Seville, Spain, and the entire length of the building on both frontages is based on an arched arcade.',
	},
	{
		stopNumber: '8',
		locationTitle: 'Yerba Buena Gardens',
		nextMinutes: '6',
		nextMiles: '.5',
		imageSRC: '../img/yerba-buena.png',
		cardBgSize: '300%',
		cardBgPos: '50% 30%',
		mapURL:
			'https://www.google.com/maps/place/Yerba+Buena+Gardens/@37.7849926,-122.4045454,17z/data=!3m1!4b1!4m5!3m4!1s0x808580879c034b09:0x9426c73a3d692058!8m2!3d37.7849884!4d-122.4023514',
		shortDescription:
			'The San Francisco Ferry Building is a terminal for ferries that travel across the San Francisco Bay, a food hall and an office building.',
		fullDescription:
			'The San Francisco Ferry Building is a terminal for ferries that travel across the San Francisco Bay, a foodhall and an office building. Designed in 1892 by American architect A. Page Brown in the Beaux Arts style, the ferry building was completed in 1898. At its opening, it was the largest project undertaken in the city up to that time. Brown designed the clock tower after the 12th-century Giralda bell tower in Seville, Spain, and the entire length of the building on both frontages is based on an arched arcade.',
	},
	{
		stopNumber: '9',
		locationTitle: 'SF MoMA',
		nextMinutes: '6',
		nextMiles: '.5',
		imageSRC: '../img/sf-moma.png',
		cardBgSize: '300%',
		cardBgPos: '50% 30%',
		mapURL:
			'https://www.google.com/maps/place/San+Francisco+Museum+of+Modern+Art/@37.7857224,-122.4032448,17z/data=!3m1!4b1!4m5!3m4!1s0x8085807d623572e7:0xc87ca0dcbc7559fd!8m2!3d37.7857182!4d-122.4010508',
		shortDescription:
			'The San Francisco Ferry Building is a terminal for ferries that travel across the San Francisco Bay, a food hall and an office building.',
		fullDescription:
			'The San Francisco Ferry Building is a terminal for ferries that travel across the San Francisco Bay, a foodhall and an office building. Designed in 1892 by American architect A. Page Brown in the Beaux Arts style, the ferry building was completed in 1898. At its opening, it was the largest project undertaken in the city up to that time. Brown designed the clock tower after the 12th-century Giralda bell tower in Seville, Spain, and the entire length of the building on both frontages is based on an arched arcade.',
	},
	{
		stopNumber: '10',
		locationTitle: '140 New Montgomery',
		nextMinutes: '6',
		nextMiles: '.5',
		imageSRC: '../img/140-montgomery.png',
		cardBgSize: '300%',
		cardBgPos: '50% 30%',
		mapURL:
			'https://www.google.com/maps/place/140+New+Montgomery,+San+Francisco,+CA+94105/@37.7865036,-122.4021885,17z/data=!3m1!4b1!4m5!3m4!1s0x8085807d380012f5:0xf3923338188abd4a!8m2!3d37.7864994!4d-122.3999945',
		shortDescription:
			'The San Francisco Ferry Building is a terminal for ferries that travel across the San Francisco Bay, a food hall and an office building.',
		fullDescription:
			'The San Francisco Ferry Building is a terminal for ferries that travel across the San Francisco Bay, a foodhall and an office building. Designed in 1892 by American architect A. Page Brown in the Beaux Arts style, the ferry building was completed in 1898. At its opening, it was the largest project undertaken in the city up to that time. Brown designed the clock tower after the 12th-century Giralda bell tower in Seville, Spain, and the entire length of the building on both frontages is based on an arched arcade.',
	},
	{
		stopNumber: '11',
		locationTitle: 'Salesforce Park',
		nextMinutes: '6',
		nextMiles: '.5',
		imageSRC: '../img/salesforce-park.png',
		cardBgSize: '300%',
		cardBgPos: '50% 30%',
		mapURL:
			'https://www.google.com/maps/place/Salesforce+Park/@37.789438,-122.3986868,17z/data=!3m1!4b1!4m5!3m4!1s0x8085806348b6dc0b:0x68829c972fa3a749!8m2!3d37.7894338!4d-122.3964928',
		shortDescription:
			'The San Francisco Ferry Building is a terminal for ferries that travel across the San Francisco Bay, a food hall and an office building.',
		fullDescription:
			'The San Francisco Ferry Building is a terminal for ferries that travel across the San Francisco Bay, a foodhall and an office building. Designed in 1892 by American architect A. Page Brown in the Beaux Arts style, the ferry building was completed in 1898. At its opening, it was the largest project undertaken in the city up to that time. Brown designed the clock tower after the 12th-century Giralda bell tower in Seville, Spain, and the entire length of the building on both frontages is based on an arched arcade.',
	},
	{
		stopNumber: '12',
		locationTitle: 'The Rincon Center',
		nextMinutes: '6',
		nextMiles: '.5',
		imageSRC: '../img/rincon-center.png',
		cardBgSize: '300%',
		cardBgPos: '50% 30%',
		mapURL:
			'https://www.google.com/maps/place/Rincon+Center/@37.7918738,-122.3950836,17z/data=!3m1!4b1!4m5!3m4!1s0x80858065aac11b27:0xd6612c60009fc273!8m2!3d37.7918696!4d-122.3928896',
		shortDescription:
			'The San Francisco Ferry Building is a terminal for ferries that travel across the San Francisco Bay, a food hall and an office building.',
		fullDescription:
			'The San Francisco Ferry Building is a terminal for ferries that travel across the San Francisco Bay, a foodhall and an office building. Designed in 1892 by American architect A. Page Brown in the Beaux Arts style, the ferry building was completed in 1898. At its opening, it was the largest project undertaken in the city up to that time. Brown designed the clock tower after the 12th-century Giralda bell tower in Seville, Spain, and the entire length of the building on both frontages is based on an arched arcade.',
	},
];

const closeModalFunc = () => {
	document.querySelector('.stop-modal').remove();
	document.querySelector('.close-modal').remove();
	document.body.style.overflow = 'auto';
};

const changeModalFunc = (id) => {
	document.querySelector('.stop-modal').remove();
	document.querySelector('.close-modal').remove();
	stopModal(id);
};

const stopModal = (id) => {
	document.body.style.overflow = 'hidden';
	let modalDiv = document.createElement('div');
	modalDiv.classList += 'stop-modal';
	modalDiv.innerHTML += `
        <div class="modal-img" style="background: url('${sforsStops[id - 1].imageSRC}'); background-size: cover"></div>
        <div class="modal-title">${sforsStops[id - 1].locationTitle}</div>
        <div class="modal-number-map">
            <div class="modal-number-container">
                <div class="side-icon-outer">
                    <div class="side-icon-inner"></div>
                </div>
                <div class="modal-number">STOP <span>${sforsStops[id - 1].stopNumber}</span></div>
            </div>
                <a
                    class="modal-map"
                    target="_blank"
                    href="${sforsStops[id - 1].mapURL}"
                >
                    <img src="../img/orange-map-icon.png" alt="" />
                    <span class="orange-text">MAP</span>
                </a>
            </div>
            <div class="modal-description">${sforsStops[id - 1].fullDescription}
        </div>
        <div class="modal-buttons">
            <div class="modal-last-button">LAST</div>
            <div class="modal-tour-button">TOUR</div>
            <div class="modal-next-button">NEXT</div>
        </div>
</div>
    `;
	document.body.appendChild(modalDiv);
	let closeModal = document.createElement('div');
	closeModal.classList += 'close-modal';
	closeModal.innerHTML = '<img src="../img/x-icon.png" alt="" />';
	document.body.appendChild(closeModal);
	closeModal.addEventListener('click', closeModalFunc);
	document.querySelector('.modal-tour-button').addEventListener('click', closeModalFunc);
	if (id == 1) {
		document.querySelector('.modal-last-button').remove();
		document.querySelector('.modal-next-button').addEventListener('click', () => changeModalFunc(id + 1));
	} else if (id == sforsStops.length) {
		document.querySelector('.modal-last-button').addEventListener('click', () => changeModalFunc(id - 1));
		document.querySelector('.modal-next-button').remove();
	} else {
		document.querySelector('.modal-last-button').addEventListener('click', () => changeModalFunc(id - 1));
		document.querySelector('.modal-next-button').addEventListener('click', () => changeModalFunc(id + 1));
	}
};

for (i = 1; i <= sforsStops.length; i++) {
	let iconDiv = document.createElement('div');
	iconDiv.classList += 'side-icon';
	iconDiv.innerHTML = tourIcon;
	tourIconDiv.appendChild(iconDiv);
	let stopDiv = document.createElement('div');
	stopDiv.classList += 'tour-grid-stop';
	stopDiv.innerHTML = `<div class="tour-grid-stop-title">
    <span>STOP
        <span class="tour-stop-number">${sforsStops[i - 1].stopNumber}</span>
        <span class="tour-stop-minutes orange-text">${sforsStops[i - 1].nextMinutes}</span>/min
        <span class="tour-stop-miles orange-text">${sforsStops[i - 1].nextMiles}</span>/miles
    </span></div>
<div class="tour-grid-stop-card-container">
    <div class="tour-grid-stop-card" onclick="stopModal(${i})">
        <div class="tour-grid-stop-card-img" style="background:url('${sforsStops[i - 1].imageSRC}');background-size:${
		sforsStops[i - 1].cardBgSize
	};background-position:${sforsStops[i - 1].cardBgPos}"></div>
        <div class="tour-grid-stop-card-words">
            <div class="tour-grid-stop-card-words-title">${sforsStops[i - 1].locationTitle}</div>
            <div class="tour-grid-stop-card-words-descrip">${sforsStops[i - 1].shortDescription}</div>
        </div></div></div>`;
	tourStopDiv.appendChild(stopDiv);
}

tourIconDiv.children[sforsStops.length - 1].children[1].remove();
