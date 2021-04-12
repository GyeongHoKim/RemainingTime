const yearToSecond = 365 * 24 * 60 * 60;
const MAX_LIFE_TIME = 82 * yearToSecond; //according to 2020 Korean life time expendancy
const USER_AGE = 'user_age';
const formAge = document.querySelector('.age-questions');
const ageQuestion = document.querySelector('.left-age-question');
const leftSecs = document.querySelector('.left-seconds');
const localStorage = window.localStorage;

// ageQuestion.addEventListener('keyup', function (event) {
// 	if (event.code === 'Enter') {
// 		event.preventDefault();
// 		form.submit();
// 	}
// });

function saveAge(age) {
	localStorage.setItem(USER_AGE, age);
}

function handleAge(event) {
	event.preventDefault();
	const age = ageQuestion.value;
	console.log('submit event entered');
	showLeft(age);
	saveAge(age);
}

function showLeft(age) {
	ageQuestion.classList.add('sr-only');
	leftSecs.classList.remove('sr-only');
	leftSecs.innerText = `${MAX_LIFE_TIME - age * yearToSecond} Sec.`;
}

function askForAge() {
	ageQuestion.classList.remove('sr-only');
	formAge.addEventListener('submit', handleAge);
}

function loadTime() {
	const age = localStorage.getItem(USER_AGE);
	if (age === null) {
		askForAge();
	} else {
		showLeft(age);
	}
}

function init() {
	loadTime();
}

init();