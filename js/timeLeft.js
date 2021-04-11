const yearToSecond = 365 * 24 * 60 * 60;
const MAX_LIFE_TIME = 82 * yearToSecond; //according to 2020 Korean life time expendancy 
const USER_AGE = "user_age";
const ageQuestion = document.querySelector("left-age-question");
const leftSecs = document.querySelector("left-seconds");
const localStorage = window.localStorage;

function saveAge(age) {
    localStorage.setItem(USER_AGE, age);
}

function changeDisplay(age) {
    ageQuestion.classList.toggle("sr-only");
    leftSecs.innerHTML = `${MAX_LIFE_TIME - age * yearToSecond} SECONDS`;
    leftSecs.classList.toggle("sr-only");
}

function handleAge(event) {
    let age = ageQuestion.value;
    event.preventDefault();
    saveAge(age);
    changeDisplay(age);
}

function init() {
    let age = localStorage.getItem(USER_AGE);
    if (age === null)
        document.querySelector(".question").addEventListener("submit", handleAge);
    else
        changeDisplay(age);
}

init();