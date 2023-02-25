"use strict";
const imgCardEl = document.querySelectorAll(".img-card");
const gallaryBtnEl = document.querySelectorAll(".gallary--btn");
const eventsEl = document.querySelector(".Events");
const cardsEl = document.querySelector(".card");
const EventsCardSectionEl = document.getElementById("Cards");

const dance = {
	main: "dance",
	events: [
		[
			"Images/Img1-min.jpg",
			"Footloose",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		],
		[
			"Images/Img2-min.jpg",
			"Naach",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		],
		[
			"Images/Img3-min.jpg",
			"Showdown",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		],
	],
};
const music = {
	main: "music",
	events: [
		[
			"Images/img4-min.jpg",
			"Raga",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		],
		[
			"Images/img8-min.jpg",
			"Rhapsody",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		],
		[
			"Images/img9-min.jpg",
			"Battle of Bands",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		],
		[
			"Images/img3-min.jpg",
			"Rap Battle",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		],
		[
			"Images/img1-min.jpg",
			"Dj Wars",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		],
	],
};

//
const Theatre = {
	main: "theater",
	events: [
		[
			"Images/Img1-min.jpg",
			"Mime",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		],
		[
			"Images/img6-min.jpg",
			"Nukkad Natak",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		],
		[
			"Images/img6-min.jpg",
			"Stage Play",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		],
		[
			"Images/img6-min.jpg",
			"Monoact",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		],
	],
};
const LifeStyle = {
	main: "lifestyle",
	events: [
		[
			"Images/Img1-min.jpg",
			"Rampage",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		],
		[
			"Images/img7-min.jpg",
			"Prom Night",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		],
		[
			"Images/img9-min.jpg",
			"Open Mic",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		],
		[
			"Images/img6-min.jpg",
			"Forage",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		],
	],
};
const PhotoAndArt = {
	main: "PhotoAndArt",
	events: [
		[
			"Images/Img4-min.jpg",
			"Shailee",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		],
		[
			"Images/img8-min.jpg",
			"Conceive",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		],
	],
};
const Online = {
	main: "Online",
	events: [
		[
			"Images/Img2-min.jpg",
			"Googlock Holmes",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		],
		[
			"Images/img8-min.jpg",
			"memonation",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		],
		[
			"Images/img7-min.jpg",
			"crazy Math",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		],
		[
			"Images/img4-min.jpg",
			"Team Twister",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		],
	],
};
const CepEvent = {
	main: "Cep",
	events: [
		[
			"Images/Img2-min.jpg",
			"Spelling Bee",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		],
		[
			"Images/img5-min.jpg",
			"samvaad",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		],
		[
			"Images/img1-min.jpg",
			"synocubix",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		],
		[
			"Images/img7-min.jpg",
			"Headrush",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		],
		[
			"Images/img4-min.jpg",
			"Research Paper",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		],
	],
};
const FunEvent = {
	main: "Fun",
	events: [
		[
			"Images/Img1-min.jpg",
			"DA - rush",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		],
	],
};
const Technical = {
	main: "Technical",
	events: [
		[
			"Images/Img5-min.jpg",
			"Code mutant",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		],
		[
			"Images/img6-min.jpg",
			"Battledrome",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		],
	],
};

const Events = [
	dance,
	music,
	Theatre,
	LifeStyle,
	PhotoAndArt,
	Online,
	CepEvent,
	FunEvent,
	Technical,
];

imgCardEl.forEach((Element) => {
	Element.addEventListener("mouseover", function (e) {
		e.preventDefault();
		// Remove active class
		imgCardEl.forEach((el) => {
			el.classList.remove("active");
			el.classList.add("img-gradient");
		});
		Element.classList.add("active");
		Element.classList.remove("img-gradient");
	});
});

function removeCards() {
	console.log(eventsEl.children);
	console.log(eventsEl.children.length);
	if (eventsEl.children.length > 0) {
		while (eventsEl.hasChildNodes()) {
			eventsEl.removeChild(eventsEl.firstChild);
		}
	}
}

gallaryBtnEl.forEach((btnId) => {
	btnId.addEventListener("click", function (el) {
		removeCards();
		Events.forEach((Event) => {
			if (Event.main === btnId.id) {
				console.log(EventsCardSectionEl.classList.remove("hidden"));
				DisplayCards(Event);
			}
		});
	});
});

function DisplayCards(EventObj) {
	const EventsArr = EventObj.events;
	EventsArr.forEach((el) => {
		// EventEl.children[0].src = el[0];
		// EventEl.children[1].children[0].innerHTML = el[1];
		// EventEl.children[1].children[1].innerHTML = el[2];

		const html = `<article class="card">
  <img
    class="card__background"
    src= ${el[0]}
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="1920"
    height="2193"
  />
  <div class="card__content | flow">
    <div class="card__content--container | flow">
      <h2 class="card__title">${el[1]}</h2>
      <p class="card__description">
        ${el[2]}
      </p>
    </div>

    <button class="card__button">Read more</button>
    <button class="card__button">Read more</button>

  </div>
</article>`;

		eventsEl.innerHTML += html;
		eventsEl.scrollIntoView();
	});
}

// EventEl.addEventListener("click", function () {
// 	console.log(EventEl.children[1].children[1].innerHTML);
// 	EventEl.children[0].src = "Images/img3-min.jpg";
// });
