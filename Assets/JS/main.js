const about = document.getElementById("about");
const hobbies = document.getElementById("hobbies");
const fantasy = document.getElementById("fantasy");
const aboutLink = document.querySelector(".nav-about");
const hobbiesLink = document.querySelector(".nav-hobbies");
const fantasyLink = document.querySelector(".nav-fantasy");
const age = document.getElementById("age");

var navOffset = 750;

window.addEventListener("load", () => {
	updateNav();
	calcAge();
});

window.addEventListener("scroll", () => {
	updateNav();
});

function updateNav() {
	let scroll = this.scrollY;
	if (scroll >= fantasy.offsetTop - navOffset) {
		fantasyLink.classList.add("active");
		aboutLink.classList.remove("active");
		hobbiesLink.classList.remove("active");
	} else if (scroll >= hobbies.offsetTop - navOffset) {
		fantasyLink.classList.remove("active");
		aboutLink.classList.remove("active");
		hobbiesLink.classList.add("active");
	} else if (scroll >= about.offsetTop - navOffset) {
		fantasyLink.classList.remove("active");
		aboutLink.classList.add("active");
		hobbiesLink.classList.remove("active");
	}
}

function calcAge() {
	var DoB = new Date("January 1, 2000 00:00:00");
	var fullAgeYears = fullAgeYearsCalc(DoB);
	function fullAgeYearsCalc(DoB) {
		var now = new Date(Date.now());
		var diff_ms = now.getTime() - DoB.getTime();
		var age_dt = new Date(diff_ms);
		age_dt.setDate(age_dt.getDate() + 1);
		return age_dt.getUTCFullYear() - 1970;
	}
	age.textContent = fullAgeYears;
}
