document.addEventListener(
	"DOMContentLoaded",
	function () {
		let sldierMassMedia = new Swiper(".mass-media__slider", {
			slidesPerView: 1,
			spaceBetween: 20,

			navigation: {
				nextEl: ".mass-media__next",
				prevEl: ".mass-media__prev",
			},
		});

		let sldierProcessTimeline = new Swiper(".process-timeline__slider", {
			slidesPerView: 1,
			spaceBetween: 20,
			autoHeight: true,

			navigation: {
				nextEl: ".process-timeline__next",
				prevEl: ".process-timeline__prev",
			},
		});

		let progresButton = document.querySelectorAll(".js-progress-item");

		if (progresButton != null) {
			progresButton.forEach((element, index, array) => {
				element.addEventListener("click", function (e) {
					if (!this.classList.contains("active")) {
						array.forEach((el) => el.classList.remove("active"));
						this.classList.add("active");

						sldierProcessTimeline.slideTo(index);
					}
				});
			});
		}

		sldierProcessTimeline.on("slideChange", function () {
			if (progresButton != null) {
				progresButton.forEach((element, index, array) => {
					element.classList.remove("active");
					array[sldierProcessTimeline.activeIndex].classList.add("active");
				});
			}
		});

		let revSliders = document.querySelectorAll(".reviews__sldier");

		if (revSliders != null) {
			revSliders.forEach((element) => {
				let sldierReviews = new Swiper(element, {
					slidesPerView: 1,
					spaceBetween: 15,
					watchOverflow: true,

					navigation: {
						nextEl: element.closest(".reviews").querySelector(".reviews__next"),
						prevEl: element.closest(".reviews").querySelector(".reviews__prev"),
					},

					breakpoints: {
						500: {
							slidesPerView: 2,
							spaceBetween: 15,
						},

						900: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
					},
				});
			});
		}

		let slidersCard = document.querySelectorAll(".slider-card__container");

		if (slidersCard != null) {
			slidersCard.forEach((element) => {
				let caseLoop = true;

				if (element.querySelectorAll(".slider-card__slide").length <= 3) {
					caseLoop = false;
					element
						.closest(".--slider-card")
						.querySelectorAll(".slider-card__pagination")
						.forEach((el) => {
							el.classList.add("slider-card-pagination-lock");
						});
				}

				let sldierCard = new Swiper(element, {
					slidesPerView: 1,
					loop: caseLoop,
					watchOverflow: true,
					spaceBetween: 15,
					navigation: {
						nextEl: "." + element.closest(".--slider-card").classList[0] + " .slider-card__next",
						prevEl: "." + element.closest(".--slider-card").classList[0] + " .slider-card__prev",
					},

					pagination: {
						el: "." + element.closest(".--slider-card").classList[0] + " .slider-card__pagination",
						type: "fraction",
					},

					breakpoints: {
						768: {
							slidesPerView: 2,
						},

						1170: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
					},
				});
			});
		}

		let sldierBuyCourse = new Swiper(".buy-course__slider", {
			slidesPerView: 1,
			spaceBetween: 30,

			navigation: {
				nextEl: ".buy-course__next",
				prevEl: ".buy-course__prev",
			},
		});
	},
	false
);

$(document).ready(function () {
	// Кастомный скроллбар
	$(".js-text-hidden").mCustomScrollbar({
		theme: "my-theme",
	});

	// ПЛАВНЫЙ ЯКОРЬ
	$(".js-anchor").click(function () {
		let target = $(this).attr("href");
		$("html, body").animate(
			{
				scrollTop: $(target).offset().top - 50,
			},
			800
		);
		return false;
	});

	$(".lightgallery").lightGallery({
		selector: "a",
	});

	$(".test-radio").on("click", function (e) {
		$(this).parents(".card-test").find(".card-test__button").removeClass("disabled");

		$(this).parents(".card-test").find(".test-radio").removeClass("--green");
		$(this).parents(".card-test").find(".test-radio").removeClass("--red");

		if ($(this).attr("data-true") == "true") {
			$(this).addClass("--green");
		} else {
			$(this).addClass("--red");
		}
	});

	$(".card-test__button").on("click", function (e) {
		e.preventDefault();

		let currentQuestion = $(this).parents(".card-test");

		if (!$(this).hasClass("disabled") && currentQuestion.index() != $(".card-test").length - 1) {
			currentQuestion.removeClass("active");
			currentQuestion.next().addClass("active");
		}
	});

	$(".header__burder, .mobile-menu__close, .bg-overlay").on("click", function (e) {
		$(".header__burder").toggleClass("active");
		$(".mobile-menu").toggleClass("active");
		$(".bg-overlay").fadeToggle();
	});

	$(".mobile-menu__nav .main-nav__item.--drop").on("click", function (e) {
		$(this).toggleClass("active");
		$(this).find("> .main-nav__submenu").slideToggle();
	});

	let match = [window.matchMedia("(max-width: 900px)")];

	function moveMobileMenu() {
		if (match[0].matches) {
			$(".footer__logo").after($(".footer__menu"));
		} else {
			$(".footer__column.js-menu").append($(".footer__menu"));
		}
	}

	moveMobileMenu();
	match[0].addListener(moveMobileMenu);
});
