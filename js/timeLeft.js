const yearToSecond = 365 * 24 * 60 * 60;
const MAX_LIFE_TIME = 82 * yearToSecond; //according to 2020 Korean life time expendancy
const USER_AGE = 'user_age';
const form = document.querySelector(".questions");
const ageQuestion = document.querySelector('.left-age-question');
const leftSecs = document.querySelector('.left-seconds');
const localStorage = window.localStorage;

function saveAge(age) {
	localStorage.setItem(USER_AGE, age);
}

function handleAge(event) {
	event.preventDefault();
	const age = ageQuestion.value;
	console.log("submit event entered");
	showLeft(age);
	saveAge(age);
}

function showLeft(age) {
	ageQuestion.classList.add("sr-only");
	leftSecs.classList.remove("sr-only");
	leftSecs.innerText = `${MAX_LIFE_TIME - age * yearToSecond} Sec.`;
}

function askForAge() {
	ageQuestion.classList.remove("sr-only");
	form.addEventListener("submit", handleAge);
}

function loadTime() {
	const age = localStorage.getItem(USER_AGE);
	if (age === null) {
		askForAge();
	}
	else {
		showLeft(age);
	}
}

function init() {
	loadTime();
}

init();