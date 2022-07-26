let buttonHeader = document.querySelector(".header__button");
let modalWindow = document.querySelector(".modalWindow");
let buttonForm = document.querySelector(".modalWindow__button");
let intro = document.querySelector(".intro");
let header = document.querySelector(".header");
let cross = document.querySelector(".modalWindow__cross");
let lining = document.querySelector(".lining");
let link = document.querySelector(".testing__link");
let alertWindow = document.querySelector(".alertWindow");
let alertButton = document.querySelector(".alertWindow__button");

buttonHeader.addEventListener("click", function () {
	modalWindow.classList.toggle("active");
	lining.classList.toggle("active");
	document.body.style.overflow = 'hidden';
});

cross.addEventListener("click", function () {
	modalWindow.classList.toggle("active");
	lining.classList.toggle("active");
	document.body.style.overflow = 'visible';
});

buttonForm.addEventListener("click", function () {
	modalWindow.classList.toggle("active");
	alertWindow.classList.toggle("active");
});

alertButton.addEventListener("click", function () {
	alertWindow.classList.toggle("active");
	document.body.style.overflow = 'visible';
	lining.classList.toggle("active");
})

link.addEventListener("click", function (e) {
	e.preventDefault();
	window.scrollTo({
		top: document.querySelector('.footer__info').offsetTop,
		behavior: "smooth"
	});
})