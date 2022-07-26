let buttonHeader = document.querySelector(".header__button");
let modalWindow = document.querySelector(".modalWindow");
let buttonForm = document.querySelector(".modalWindow__button");
let intro = document.querySelector(".intro");
let header = document.querySelector(".header");
let cross = document.querySelector(".modalWindow__cross");
let lining = document.querySelector(".lining");
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

let linkContact = document.querySelector(".testing__link");
let linkAbout = document.querySelector("#about");
let linkServices = document.querySelector("#services");
let linkBlog = document.querySelector("#blog");

linkContact.addEventListener("click", function (e) {
	e.preventDefault();
	window.scrollTo({
		top: document.querySelector('.footer__info').offsetTop,
		behavior: "smooth"
	});
})

linkAbout.addEventListener("click", function (e) {
	e.preventDefault();
	window.scrollTo({
		top: document.querySelector('.aboutUs').offsetTop,
		behavior: "smooth"
	});
})

linkServices.addEventListener("click", function (e) {
	e.preventDefault();
	window.scrollTo({
		top: document.querySelector('.categories').offsetTop,
		behavior: "smooth"
	});
})

linkBlog.addEventListener("click", function (e) {
	e.preventDefault();
	window.scrollTo({
		top: document.querySelector('.statistics').offsetTop,
		behavior: "smooth"
	});
})