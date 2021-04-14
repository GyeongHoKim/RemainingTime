const yearToSecond = 365 * 24 * 60 * 60;
const MAX_LIFE_TIME = 82 * yearToSecond; //according to 2020 Korean life time expendancy
const USER_AGE = 'user_age';
const formAge = document.querySelector('.age-questions');
const ageQuestion = document.querySelector('.left-age-question');
const leftSecs = document.querySelector('.left-seconds');
const localStorage = window.localStorage;

function saveAge(age) {
	localStorage.setItem(USER_AGE, age);
}

function handleAge(event) {
	event.preventDefault();
	const age = ageQuestion.value;
	showLeft(age);
	saveAge(age);
}

function showLeft(age) {
	const date = new Date();
	const hourToSecond = 60 * 60;
	const dayToSecond = 24 * hourToSecond;
	const monthToSecond = [31 * dayToSecond, 28 * dayToSecond, 31 * dayToSecond, 30 * dayToSecond, 31 * dayToSecond, 30 * dayToSecond, 31 * dayToSecond, 31 * dayToSecond, 30 * dayToSecond, 31 * dayToSecond, 30 * dayToSecond, 31 * dayToSecond ];
	let left_time = MAX_LIFE_TIME - ((age - 1) * yearToSecond + monthToSecond[date.getMonth()] + (date.getDate() - 1) * dayToSecond + (date.getHours() - 1) * hourToSecond + (date.getMinutes() - 1) * 60 + date.getSeconds());
	ageQuestion.classList.add('sr-only');
	leftSecs.classList.remove('sr-only');
	leftSecs.innerText = `${left_time} Sec.`;
	document.querySelector(".left-todo-question").classList.remove("sr-only");
}

function askForAge() {
	ageQuestion.classList.remove('sr-only');
	formAge.addEventListener('submit', handleAge);
}

function loadTime() {
	let age = localStorage.getItem(USER_AGE);
	if (age === null) {
		askForAge();
		age = localStorage.getItem(USER_AGE);
	} else {
		showLeft(age);
	}
}

function init() {
	loadTime();
	setInterval(loadTime, 1000);
}

init();