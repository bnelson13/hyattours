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
		nextMinutes: '3',
		nextMiles: '.1',
		imageSRC: '../img/ferry-building/ferry-building.png',
		cardBgSize: '300%',
		cardBgPos: '50% 30%',
		mapURL:
			'https://www.google.com/maps/place/Ferry+Building/@37.7958379,-122.3937801,15z/data=!4m5!3m4!1s0x0:0x6cf7a313d6a53ec7!8m2!3d37.7958379!4d-122.3937801',
		shortDescription:
			'The San Francisco Ferry Building is a terminal for ferries that travel across the San Francisco Bay, a food hall and an office building.',
		fullDescription: `<p>
			The San Francisco Ferry Building is a terminal for ferries that travel across the San Francisco Bay, a foodhall and an
			office building. Designed in 1892 by American architect A. Page Brown in the Beaux Arts style, the ferry building was
			completed in 1898.
		</p>
		<p><img class="modal-stop-inner-img" src="../img/ferry-building/historical.jpg" /></p>
		<span class="modal-stop-inner-img-caption">The Grand Nave as it appared in 1898</span>
		<p>
			At its opening, it was the largest project undertaken in the city up to that time. Brown designed the clock tower
			after the 12th-century Giralda bell tower in Seville, Spain, and the entire length of the building on both frontages
			is based on an arched arcade.
		</p>
		<p>
			It was so well built, with it's arched arcades, that it survived both the 1906 and 1989 earthquakes with very little
			damage. Today is serves Ferry's from Sausalito, Larkspur, Alameda, and Vallejo.
		</p>
		<p>
			<img class="modal-stop-inner-img" src="../img/ferry-building/historical-2.jpg" alt="" />
		</p>
		<span class="modal-stop-inner-img-caption">The Ferry Building after the 1906 Earthquake</span>
		<p>
			Before the Golden Gate or Bay Bridges were completed, ferry boats were the only way travelers and commuters could
			reach the city except by way of the Peninsula, a much longer voyage. At this time it was the 2nd busiest transit
			terminal in the world, second only to Charing Cross in London. When the bridges were built the Ferry building was
			rarely used and fell into disrepair. It was converted to standard office space.
		</p>
		<p>
			Than, in the 1950s the Embarcadero Freeway was built which passed directly in front of the Ferry Building but when
			this was damaged in the 1989 Loma Prieta earthquake it was decided to remove this freeway altogether and a beautiful
			waterfront boulevard was developed.
		</p>
		<p><img class="modal-stop-inner-img" src="../img/ferry-building/historical-3.jpg" alt="" /></p>
		<span class="modal-stop-inner-img-caption">Embaradero Freeway limiting access to the Ferry Building</span>
		<p>
			In 1999 an extensive restoration was commenced and the Ferry Building opened 4 years later. The ground floor of the
			building was redesigned as a marketplace featuring about 50 restaurants, retail shops and food purveyors, most of
			which are open seven days a week. On Tuesdays, Thursdays, and Saturdays there is an expansive outdoor Ferry Plaza
			Farmer's Market.
		</p>
		`,
	},
	{
		stopNumber: '2',
		locationTitle: '343 Sansome',
		nextMinutes: '13',
		nextMiles: '.6',
		imageSRC: '../img/343-sansome/343-sansome.png',
		cardBgSize: '290%',
		cardBgPos: '80% 60%',
		mapURL:
			'https://www.google.com/maps/place/343+Sansome+Rooftop+Deck/@37.7936973,-122.401618,15z/data=!4m2!3m1!1s0x0:0x275dae1d752968bc?sa=X&ved=2ahUKEwipxLaJ4b_uAhWaJTQIHQZQDLMQ_BIwCnoECBcQBQ',
		shortDescription:
			'Located in the heart of the city’s financial district, 343 Sansome has a charming classical appearance and on weekdays features a beautiful rooftop garden.',
		fullDescription: `<p>
			A landmark building, 343 Sansome was designed by John Galen Howard, the founder of the U.C. School of Architecture and
			constructed in 1908. In 1929, five stories were added and the building was decorated in an elegant art deco design. In
			1990, a 15-story tower was added adjacent to the initial 13-storied tower and the two buildings were combined.
		</p>
		<p><img class="modal-stop-inner-img" src="../img/343-sansome/historical-2.jpeg" alt="" /></p>
		<span class="modal-stop-inner-img-caption">The impressive facade of 343 Sansome</span>
		<p>
			On weekdays from 10:00 AM to 5:00 PM anyone can visit the rooftop garden deck. Located on the 15th floor and
			accessible by elevator, you are welcome to bring snacks and drinks and enjoye the beautiful outdoor terrace with
			breathtaking views of downtown.
		</p>
		<p><img class="modal-stop-inner-img" src="../img/343-sansome/historical-1.jpg" alt="" /></p>
		<span class="modal-stop-inner-img-caption">A perfect place for an outdoor snack</span>
		<p>
			A popular destination for lunch, make sure to get their earlier if visitng during the lunch hour as there isn't an
			abudance of seats. On your way back down make sure to visit the beautiful fountain in the lobby.
		</p>
		<p><img class="modal-stop-inner-img" src="../img/343-sansome/historical-3.jpeg" alt="" /></p>
		<span class="modal-stop-inner-img-caption">A moving interactive fountain</span>`,
	},
	{
		stopNumber: '3',
		locationTitle: 'Transamerica Pyramid',
		nextMinutes: '4',
		nextMiles: '.2',
		imageSRC: '../img/transamerica-pyramid/transamerica-pyramid.png',
		cardBgSize: '200%',
		cardBgPos: '50% 30%',
		mapURL:
			'https://www.google.com/maps/place/Transamerica+Pyramid/@37.7951775,-122.4027787,15z/data=!4m2!3m1!1s0x0:0x65487a1b70f0a878?sa=X&ved=2ahUKEwiKz5Po4b_uAhU8JDQIHRTBBLEQ_BIwJ3oECEcQBQ',
		shortDescription:
			'One of the most iconic buildings on the West Coast the Transamerica Pyramid is the 2nd tallest skyscraper in the city',
		fullDescription: `<p>
			Construction on the Transamerica Pyrimid began in 1969 and the building was finished in 1972. At height of 853 feet
			and 48 floors it was the tallest skyscraper in San Francisco from its construction until 2017 when the Salesforce
			Tower was completed.
		</p>
		<p><img class="modal-stop-inner-img" src="../img/transamerica-pyramid/historical-1.jpeg" alt="" /></p>
		<span class="modal-stop-inner-img-caption">Construction on the Pyramid in 1969</span>
		<p>
			Despite it's now famous design it was originally faced heavy opposition. The land use and zoning restrictionns for the
			land it was built on limited the number of square feet of office that could be built. The architect, William Pereira,
			designed it as a tall, four-sided pyramid with two 'wings' to accommodate an elevator and stairs.
		</p>
		<p>
			It originally housed an observation deck, but this was closed down after 9/11 and is now a virtual observation deck
			with live camera's that guests can control from the lobby. In 2020 it was sold for 650 million dollars.
		</p>
		<p><img class="modal-stop-inner-img" src="../img/transamerica-pyramid/historical-2.jpg" alt="" /></p>
		<span class="modal-stop-inner-img-caption">The hollow glass room at the very top</span>
		<p>
			The spire on the top of the building is actually hollow and is lined with a 100 foot steel railway at a 60 degree
			angle and then steel ladders. These allow access to the red aircraft warning light on the top of the pyramid.
		</p>
		<p>
			Today the building houses offices for Merrill Lynch, Mars Inc, Pantheon Ventures, TSG Consumer Partners, Greenhill &
			Co, and others.
		</p>
		<p><img class="modal-stop-inner-img" src="../img/transamerica-pyramid/historical-3.jpg" alt="" /></p>
		<span class="modal-stop-inner-img-caption">The beautiful gardens and pond at the base</span>
		<p>
			Adjacent to the building is a half-acre public space with redwood trees transplanted from the Santa Cruz mountains, as
			well as a fountain and pond with bronze sculptures. Don't miss the placard for San Francisco's famous canine's
			'Bummer' and 'Lazarus'
		</p>`,
	},
	{
		stopNumber: '4',
		locationTitle: 'Old Telephone Exchange',
		nextMinutes: '6',
		nextMiles: '.2',
		imageSRC: '../img/telephone-exchange/telephone-exchange.png',
		cardBgSize: '180%',
		cardBgPos: '50% 40%',
		mapURL:
			'https://www.google.com/maps/place/Old+Chinese+Telephone+Exchange/@37.7950842,-122.4084676,17z/data=!3m1!4b1!4m5!3m4!1s0x808580f4b2d763f9:0x90713231399e1178!8m2!3d37.79508!4d-122.4062736',
		shortDescription:
			'Located in the heart of Chinatown, the Old Chinese Telephone Exchange used to house a huge switchboard where operators would manually connect calls',
		fullDescription: `<p>
			Before cellphone and touch tone land lines callers couldn't directly dial numbers, they had to call up an exchange and
			an operator would manually patch their call through. The Old Chinese Telephone Exchange was one such building, though
			unrivaled in it's beauty by other exchanges.
		</p>
		<p><img class="modal-stop-inner-img" src="../img/telephone-exchange/historical-1.jpg" alt="" /></p>
		<span class="modal-stop-inner-img-caption">The original building destroyed by fire in 1906</span>
		<p>
			It opened in 1896 but was destroyed by fire during the 1906 Earthquake. It was rebuilt in 1909 and served up to 3000
			phones. The exchange was staffed with 40 operators, who had to be able to recall from memory each of these numbers.
			They had to know the names, numbers, address for each of the lines and often had to speak in multiple dialects.
		</p>
		<p>
			In the 1960's it was a popular tourist attraction, and greyhound buses would pull up to the window to gawk at the
			stylish femaile operators, clad in embroidered silk dresses.
		</p>
		<p><img class="modal-stop-inner-img" src="../img/telephone-exchange/historical-2.jpg" alt="" /></p>
		<span class="modal-stop-inner-img-caption">Operators hard at work</span>
		<p>
			The operators were not paid very well, indeed they fought against a 7-day work week and low wages. But it was a
			tight-knit group, many people were related and often got the job through friends or family.
		</p>
		<p>
			The exchange shut down in 1949 after technological advances negated the need for manual operators. It now houses a
			bank servicing local the local community.
		</p>
		<p><img class="modal-stop-inner-img" src="../img/telephone-exchange/historical-3.jpg" alt="" /></p>
		<span class="modal-stop-inner-img-caption">The job required a lot of memorization</span>
		<p>
			Nearby you can visit the Golden Gate Fortune Cookie Factory that is still in operation today and watch as they make
			fortune cookies. Also next door is the Porstmouth Square where Mahjong is a popular pastime.
		</p>`,
	},
	{
		stopNumber: '5',
		locationTitle: "Dragon's Gate",
		nextMinutes: '7',
		nextMiles: '.3',
		imageSRC: '../img/dragon-gate/dragon-gate.png',
		cardBgSize: '100%',
		cardBgPos: '100%',
		mapURL: `https://www.google.com/maps/place/Dragon's+Gate/@37.7950842,-122.4084676,17z/data=!4m5!3m4!1s0x808580896047c7e3:0x7f3069e3f9e27292!8m2!3d37.7912672!4d-122.4058137`,
		shortDescription:
			"Marking the Southern Entrance to Chinatown, the Dragon's Gate is one of the most iconic and photographed locations in San Francisco.",
		fullDescription: `<p>
			In 1953 the US placed an embargo on China after they entered into the Korean War. In an effor to improve local
			business the Chinese Chamber of Commerce held an essay contest for suggestions. The winner proposed an authentic
			archway at Bush & Grant streets.
		</p>
		<p><img class="modal-stop-inner-img" src="../img/dragon-gate/historical-1.jpg" alt="" /></p>
		<span class="modal-stop-inner-img-caption">The Gate under construction </span>
		<p>
			In 1969, after years of funding issues, Taiwan donated materials to build the Gate. The then Mayor of San Francisco
			George Christopher held a design competition and 3 Chinese-American landscape architects won the competition with the
			current design, which is in the traditional Chinese pailou style.
		</p>
		<p>
			The gate is gaurded by a male and female lion on either side. The male lion has his paw atop a stone, symbolically
			guarding the the structure, while the female lion has her paw on a juvenile lion, symbolically guarding the occupants
			within the city.
		</p>
		<p><img class="modal-stop-inner-img" src="../img/dragon-gate/historical-2.jpg" alt="" /></p>
		<span class="modal-stop-inner-img-caption">The male and female lions guarding the entrance</span>
		<p>
			Atop the gate the fish symbolize prosperity and the dragons symbolize power and fertility. Between them is an orb
			representing the Earth.
		</p>
		<p>
			The signs above the largest portal for vehicles reads 'All under heavan is for the good of the people', the Western
			portal sign reads 'Trust & Peace', while the Eastern portal reads 'Respect & Love.
		</p>
		<p><img class="modal-stop-inner-img" src="../img/dragon-gate/historical-3.jpg" alt="" /></p>
		<span class="modal-stop-inner-img-caption">The Dragon Gate lit up at night</span>
		<p>
			Take in the amazing sights and sounds of Chinatown while you walk through, and be sure to stop in local markets to see
			some incredible food offerings.
		</p>`,
	},
	{
		stopNumber: '6',
		locationTitle: 'Frank Lloyd Wright',
		nextMinutes: '6',
		nextMiles: '.3',
		imageSRC: '../img/frank-wright/frank-wright.png',
		cardBgSize: '180%',
		cardBgPos: '30% 0%',
		mapURL:
			'https://www.google.com/maps/place/Frank+Lloyd+Wright+designed+building/@37.7912714,-122.4080077,17z/data=!4m5!3m4!1s0x8085816a2ed10307:0x6f8d852fac721f51!8m2!3d37.7882844!4d-122.4059018',
		shortDescription:
			'The only Frank Lloyd Wright building in San Francisco, the beautifully designed structure was originally a gift shop, now a clothing store',
		fullDescription: `<p>
			Oringially designed in 1948, Frank Lloyd Wright was commisioned by the V.C. Morris company to make a gift shop for
			them. The area was back then known as the red-light district of the city.
		</p>
		<p><img class="modal-stop-inner-img" src="../img/frank-wright/historical-1.jpg" alt="" /></p>
		<span class="modal-stop-inner-img-caption">The striking exterior draws people in</span>
		<p>
			It has since housed a number of tenants but has always made it tricky for store managers to contend with the ongoing
			parade of tourists, keen to see the impressive interior.
		</p>
		<p>
			The constant influx of tourists, though, allowed the the building to gain Landmark Status from the City of San
			Francisco in 2016
		</p>
		<p><img class="modal-stop-inner-img" src="../img/frank-wright/historical-2.jpg" alt="" /></p>
		<span class="modal-stop-inner-img-caption">The incredible bubbled cieling adds warmth</span>
		<p>
			The distinctive arched brickwork was designed to lure passers-by off the street and into the airy interior of the
			shop. The interior is bright and airy, aided by the beautiful bubbled cieling.
		</p>
		<p>
			The curved ramp is the most notable part of the space and is a prototype for the ramp in the interior of the Solomon
			R. Guggenheim Museum in New York City which Frank Lloyd Wright designed in 1952.
		</p>
		<p><img class="modal-stop-inner-img" src="../img/frank-wright/historical-3.jpg" alt="" /></p>
		<span class="modal-stop-inner-img-caption">The store in 1960 with a manager and the owner Allen Alder</span>
		<p>
			Take note of the original shelving throught the store as well as an old dumbwaiter, and a chut that the original gift
			shop used to send receipts from floor to floor.
		</p>`,
	},
	{
		stopNumber: '7',
		locationTitle: 'Union Square',
		nextMinutes: '3',
		nextMiles: '.1',
		imageSRC: '../img/union-square/union-square.png',
		cardBgSize: '300%',
		cardBgPos: '50% 30%',
		mapURL:
			'https://www.google.com/maps/place/Union+Square,+San+Francisco,+CA+94108/@37.7882886,-122.4080958,17z/data=!4m5!3m4!1s0x8085808ed3fd40bb:0xfe41d9b5994cb6ba!8m2!3d37.7879938!4d-122.4074374',
		shortDescription:
			'The square is a 2.6 acre public plaza and is home to the most popular shopping, restaurant, and hotel districts in San Francisco',
		fullDescription: `<p>
		Union Square got its name when it was once used for rallied supporting the Union Army during the Civil War. It was
		originally a sand dune but built into a public park in 1850 by San Francisco's first mayor John Geary.
	</p>
	<p><img class="modal-stop-inner-img" src="../img/union-square/historical-1.jpg" alt="" /></p>
	<span class="modal-stop-inner-img-caption">Union Square in 1905, one year before the Earthquake</span>
	<p>
		The Dewey Monument at the center of the square was erected in 1903 as a tribute to both Admiral George Dewey's victory
		at the Battle of Manila Bay during the Spanish-American War as well as the then recently assassinated President
		William McKinley. It depicts Nike, the Greek Goddess of Victory and was modeled after Alma de Bretteville who went on
		to marry sugar magnate Adolph Spreckels, one of the city's richest citizens.
	</p>
	<p>
		In 1939 a large undergournd parking garage was built undert the sqaure and it was teh world's first underground
		parking garage. It was designed to be impressive from above and raised up the curbs and gardens.
	</p>
	<p><img class="modal-stop-inner-img" src="../img/union-square/historical-2.jpg" alt="" /></p>
	<span class="modal-stop-inner-img-caption">Nike, the Goddess of Vicotry atop the Dewey Monument</span>
	<p>
		In 1996 the city decided to renovate the square and opened it up to competition. The newly renovated Sqaure opened on
		2002 and has proven to be a great sucess. The site hosts hundreds of events per yeaer including musicial performances,
		art exibitions as well as a site for the Chinese New Year Parade.
	</p>
	<p>
		The Square is bordered by some very unique buildings like the Tiffany store, Westing St. Francis Hotel and Apple's
		store which holds the largest single plane pieces of glass in the world.
	</p>
	<p><img class="modal-stop-inner-img" src="../img/union-square/historical-3.jpg" alt="" /></p>
	<span class="modal-stop-inner-img-caption">Union Square in 1968 from the St. Francis</span>
	<p>
	Some restaurants in the vincinity offer some amazing views of the square including The Rotunda at the top of Neiman
	Marcus. Stop by the Grand Hyatt for a bite in their OneUP lounge.
	</p>`,
	},
	{
		stopNumber: '8',
		locationTitle: 'Yerba Buena Gardens',
		nextMinutes: '10',
		nextMiles: '.4',
		imageSRC: '../img/yerba-buena/yerba-buena.png',
		cardBgSize: '300%',
		cardBgPos: '50% 30%',
		mapURL:
			'https://www.google.com/maps/place/Yerba+Buena+Gardens/@37.7849926,-122.4045454,17z/data=!3m1!4b1!4m5!3m4!1s0x808580879c034b09:0x9426c73a3d692058!8m2!3d37.7849884!4d-122.4023514',
		shortDescription:
			'A beautiful public park located right on Mission St, it features red wood trees, a MLK waterfall, an Art Center, and a skating rink',
		fullDescription: `<p> The first part of the park between Mission and Howard streets was opened in 1993 and the expansion to Folsom was
		opened in 1998 along with the memorial to Martin Luther King.
	</p>
	<p><img class="modal-stop-inner-img" src="../img/yerba-buena/historical-1.jpg" alt="" /></p>
	<span class="modal-stop-inner-img-caption">Take a peak under the waterfall memorial to MLK</span>
	<p>
		A memorial featuring a majestic waterfall and shimmering glass panels inscribed with Dr. King’s inspiring words, poems
		and images from the civil rights movement adorns one side of the park.
	</p>
	<p>
		Yerba Buena was the name of the city before being called San Francisco and means 'good herb' in Spanish and refers to
		the yerba buena plant which used to be abundant in the are.
	</p>
	<p><img class="modal-stop-inner-img" src="../img/yerba-buena/historical-2.jpg" alt="" /></p>
	<span class="modal-stop-inner-img-caption">The expansive field is bordered by redwoods</span>
	<p>
		Located in the park is the Yerba Buena Center for the Arts, a contemporary arts center in the North block. In the
		southern part is the Zeum, a children's media and technology creativity museum. An ice skating rink, a bowling alley,
		and a restored 1906 carousel by Charles I. D. Looff can also be found in the area.
	</p>
	<p>
		Just to the south of the Park is the San Francisco Marriott which has a unique bar on its 39th floor called The View
		Lounge. Seatting is at a premium but the views are worth it.
	</p>
	<p><img class="modal-stop-inner-img" src="../img/yerba-buena/historical-3.jpg" alt="" /></p>
	<span class="modal-stop-inner-img-caption">The expansive upper area is home to a restaurant and tea house</span>
	<p>
		The park hosts free outdoor concerts every Thursday in the summer and is close the Jewish Contemporary Musuem and the
		SF Moma. The building under construction is the Mexican Museum, which began construction in 2015.
	</p>`,
	},
	{
		stopNumber: '9',
		locationTitle: 'SF MoMA',
		nextMinutes: '2',
		nextMiles: '.1',
		imageSRC: '../img/sf-moma/sf-moma.png',
		cardBgSize: '170%',
		cardBgPos: '50% 30%',
		mapURL:
			'https://www.google.com/maps/place/San+Francisco+Museum+of+Modern+Art/@37.7857224,-122.4032448,17z/data=!3m1!4b1!4m5!3m4!1s0x8085807d623572e7:0xc87ca0dcbc7559fd!8m2!3d37.7857182!4d-122.4010508',
		shortDescription:
			'The San Francisco Museum of Modern Art has an impressive and internationally recognized collection of modern and contemporary art',
		fullDescription: `<p>
		The San Francisco MoMA features an incredible collection of 33,000 works of painting, sculpture, photography,
		architecture, design, and media arts and was the first museum on the West Coast devoted solely to 20th-century art. It
		has 170,000 square feet of gallery space which is bigger than the MoMA in New York City.
	</p>
	<p><img class="modal-stop-inner-img" src="../img/sf-moma/historical-1.jpeg" alt="" /></p>
	<span class="modal-stop-inner-img-caption">Andy Warhol's 'A Set of Six Self Portraits'</span>
	<p>
		The SF Museum of Modern Art was founded in 1935 used to be in the War Memorial Building on Van Ness. The current
		building was built in 1995 and designed by Swiss architect Mario Botta. The Museum was expanded in 2013 to incorporate
		a large donation of works by the billionaire founder of The Gap, Donald Fisher who now serves as President of the
		Museum.
	</p>
	<p>
		Jackson Pollock, Clyfford Still and Arshile Gorky all had their first Museum shows at the MoMA and it features
		incredible works from René Magritte, Piet Mondrian, Marcel Duchamp, Jasper Johns, and more.
	</p>
	<p><img class="modal-stop-inner-img" src="../img/sf-moma/historical-2.jpg" alt="" /></p>
	<span class="modal-stop-inner-img-caption">The beautiful rooftop garden opened in 2009</span>
	<p>
		The Musuem offers a lot of dining options as well as two great gift shops. The cost is $25 per ticket but is free for
		kids under 18. A great way to experience the Musuem is to take the elevator up to the seventh floor and navigate down
		floor by floor via the internal stairways on the east side of the building.
	</p>
	<p><img class="modal-stop-inner-img" src="../img/sf-moma/historical-3.png" alt="" /></p>
	<span class="modal-stop-inner-img-caption">The incredible 'Living Wall' in the atrium</span>
	<p>
		Don't miss In Situ, the restaurant located in the lobby where each dish is a recipe from a famous Chef from around the
		world. The restaurant's menu is curated by reknowned Chef Corey Lee of Benu.
	</p>`,
	},
	{
		stopNumber: '10',
		locationTitle: '140 New Montgomery',
		nextMinutes: '3',
		nextMiles: '.1',
		imageSRC: '../img/140-montgomery/140-montgomery.png',
		cardBgSize: '300%',
		cardBgPos: '50% 30%',
		mapURL:
			'https://www.google.com/maps/place/140+New+Montgomery,+San+Francisco,+CA+94105/@37.7865036,-122.4021885,17z/data=!3m1!4b1!4m5!3m4!1s0x8085807d380012f5:0xf3923338188abd4a!8m2!3d37.7864994!4d-122.3999945',
		shortDescription:
			'This incredible example of Art Deco was built in 1925 as the was the headquarters for the The Pacific Telephone & Telegraph Company',
		fullDescription: `<p>
		The building at 140 New Montgomery was originally built in 1925 as the new headquarters for the The Pacific Telephone
		& Telegraph Company. It is an incredible example of Art Deco and is only a short walk from the SF MoMA.
	</p>
	<p><img class="modal-stop-inner-img" src="../img/140-montgomery/historical-1.jpg" alt="" /></p>
	<span class="modal-stop-inner-img-caption">The stunning entrance to 140 New Montgomery</span>
	<p>
		When it opened on May 30, 1925, The Pacific Telephone Building was San Francisco's first big skyscraper and the
		tallest building in the city until 1964. It was also the first high rise on the West Coast for a single tenant. When
		AT&T bought the PacBell in 2007 they planned to turn the building into luxury condo's put the 2008 financial crisis
		put those plans on hold and the building sat empty for 4 years.
	</p>
	<p>
		Finally in 2011 they turned the building into upgraded office space after a $100 million renovation and it was sold in
		2016 for $284 million. Yelp is the current tenant of the building.
	</p>
	<p><img class="modal-stop-inner-img" src="../img/140-montgomery/historical-2.jpg" alt="" /></p>
	<span class="modal-stop-inner-img-caption">Large Eagles statues sit on the buildings top</span>
	<p>
		There are 13 foot tall statues of eight eagles that perch atop the tower's crown and the building's L—shaped floor
		plan and decorative spotlights highlight the exterior's terra cotta ornamentation day and night.
	</p>
	<p>
		Also, for 44 years until 1978, the top of the roof was used to convey official storm warnings to sailors in the form
		of a 25 feet long red flag by day, and a red light at night.
	</p>
	<p><img class="modal-stop-inner-img" src="../img/140-montgomery/historical-3.jpg" alt="" /></p>
	<span class="modal-stop-inner-img-caption">The luxurious lobby showcases Art Deco style</span>
	<p>
		An intersting moment was in 1929, when Sir Winston Churchill visited the building and made his first transatlantic
		telephone call, phoning his London home.
	</p>`,
	},
	{
		stopNumber: '11',
		locationTitle: 'Salesforce Park',
		nextMinutes: '8',
		nextMiles: '.4',
		imageSRC: '../img/salesforce-park/salesforce-park.png',
		cardBgSize: '300%',
		cardBgPos: '50% 30%',
		mapURL:
			'https://www.google.com/maps/place/Salesforce+Park/@37.789438,-122.3986868,17z/data=!3m1!4b1!4m5!3m4!1s0x8085806348b6dc0b:0x68829c972fa3a749!8m2!3d37.7894338!4d-122.3964928',
		shortDescription:
			"Salesforce Park is an impressive feat of engineering, a 1,400 foot long public park that is built 4 stories above the Transbay Transit Center, a hub for SF's transportation",
		fullDescription: `<p>
		Salesforce Park sits atop the Transbay Transit Center which is the primary bus terminal and future rail terminal for
		the San Francisco Bay Area. It was needed after the 1989 Earthquake damanged the Transbay Terminal built in 1939.
		Funds were approved in 1999 and construction began in 2010.
	</p>
	<p><img class="modal-stop-inner-img" src="../img/salesforce-park/historical-1.jpeg" alt="" /></p>
	<span class="modal-stop-inner-img-caption">The winning designn proposal for the park</span>
	<p>
		Below the park is 4 floors of retail, dining, and office space as well as ticketing and boarding platforms for busses.
		The entrance to the park is a free 20 person aerial tram located at Mission Street and Fremont Street and is the first
		tram in San Francisco since the closure of the tram at the Cliff House in 1961.
	</p>
	<p>
		The park is a living roof with 600 trees and 16,000 plants arranged in 13 different botanical feature areas. It
		features a walking path surrounding grassy lawns, dancing fountains, a children’s play area, and an amphitheater.
	</p>
	<p><img class="modal-stop-inner-img" src="../img/salesforce-park/historical-2.jpg" alt="" /></p>
	<span class="modal-stop-inner-img-caption">Dancing water features surround the path</span>
	<p>
		The amphitheater hosts free live yoga classes, concerts late night movies. The redwoods, bamboo, and palm tree plays
		hosts to butterflies, hummingbirds and bees.
	</p>
	<p>
		Interestingly the entire center was abruptly ordered closed in September of 2018, only 6 weeks after opening,
		following the discovery of a “major crack” in a steel beam supporting the rooftop park. Repairs were swiftly completed
		and the park reopened in July of 2019.
	</p>
	<p><img class="modal-stop-inner-img" src="../img/salesforce-park/historical-3.jpg" alt="" /></p>
	<span class="modal-stop-inner-img-caption">The amphitheater hosts live music and events</span>
	<p>
		There is a proposal 13 new skyscrapers around the park as well as a proposal to add a second Transbay tube but this
		extension would cost as much as $6 billion on top of the $2 billion already spent, and is currently unfunded.
	</p>`,
	},
	{
		stopNumber: '12',
		locationTitle: 'The Rincon Center',
		nextMinutes: '7',
		nextMiles: '.3',
		imageSRC: '../img/rincon-center/rincon-center.png',
		cardBgSize: '190%',
		cardBgPos: '50% 30%',
		mapURL:
			'https://www.google.com/maps/place/Rincon+Center/@37.7918738,-122.3950836,17z/data=!3m1!4b1!4m5!3m4!1s0x80858065aac11b27:0xd6612c60009fc273!8m2!3d37.7918696!4d-122.3928896',
		shortDescription:
			'The Rincon Center is a former US Post Office built in the Streamline Moderne style in 1940 and now hosts shops, offices and restaurants',
		fullDescription: `<p>
		Constructed in 1939 as a US Post Office, in the 1980s the building was made available by the Postal Service for
		development, and the design of the was led by the firm founded by William Pereira, designer of the Transamerica
		Pyramid.
	</p>
	<p><img class="modal-stop-inner-img" src="../img/rincon-center/historical-1.jpg" alt="" /></p>
	<span class="modal-stop-inner-img-caption">Rincon Center under construction in 1939.</span>
	<p>
		The interior features the renowned "History of California" murals, by Russian immigrant muralist Anton Refregier. The
		murals the history of California in the Social realism style, but as they were completed immediately following World
		War II, the artist's detractors criticized his artistic style and questioned his political leanings.
	</p>
	<p>
		The controversy eventually reached the U.S. Congress, where critics called for the murals to be destroyed. The murals
		led to the preservation of the post office lobby as part of the Rincon Center development
	</p>
	<p><img class="modal-stop-inner-img" src="../img/rincon-center/historical-2.jpeg" alt="" /></p>
	<span class="modal-stop-inner-img-caption">Anton Refregier's mural showing Sir Francis Drake</span>
	<p>
		The atrium is topped by a 200 foot long skylight and features the central and distinctive floor to skylight "Water
		Column" installation art work. It was designed by the contemporary artist Doug Hollis.
	</p>
	<p>
		The water feature is a continuous 85 foot column of water drops, coming from an eight-foot by eight-foot acrylic glass
		box with some 4,000 holes in it placed at the ceiling level.
	</p>
	<p><img class="modal-stop-inner-img" src="../img/rincon-center/historical-3.jpg" alt="" /></p>
	<span class="modal-stop-inner-img-caption">Yank Sing hosts a large event in the atrium</span>
	<p>
		The main tenant in the property is Google which expanded it's lease to 42,000 sq feet in 2020. Don't miss the best Dim
		Sum in the city at Yank Sing!
	</p>`,
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
        <div class="modal-img" style="background: url('${
					sforsStops[id - 1].imageSRC
				}'); background-size: cover;background-position:${sforsStops[id - 1].cardBgPos}">"></div>
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

let totalTourDistance = 0;
let totalTourTime = 0;

for (i = 1; i <= sforsStops.length; i++) {
	totalTourTime += parseInt(sforsStops[i - 1].nextMinutes);
	totalTourDistance += parseFloat(sforsStops[i - 1].nextMiles);
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

const totalTourDistanceDiv = document.querySelector('#total-tour-distance');
const totalTourTimeDiv = document.querySelector('#total-tour-time');
totalTourTime = `${Math.floor(totalTourTime / 60)}:${totalTourTime % 60}`;
totalTourTimeDiv.innerHTML = totalTourTime;
totalTourDistanceDiv.innerHTML = totalTourDistance;
tourIconDiv.children[sforsStops.length - 1].children[1].remove();
