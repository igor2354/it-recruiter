document.addEventListener(
	"DOMContentLoaded",
	function () {
		let mainSlider = new Swiper(".main-screen__slider", {
			slidesPerView: 1,
			spaceBetween: 20,

			navigation: {
				nextEl: ".main-screen__next",
				prevEl: ".main-screen__prev",
			},

			pagination: {
				el: ".main-screen__pagination",
			},
			// breakpoints: {
			//     500: {
			//         slidesPerView: 2,
			//         spaceBetween: 20,
			//         freeMode: false,
			//     },

			//     768: {
			//         slidesPerView: "auto",
			//         spaceBetween: 30,
			//         freeMode: true,
			//     },
			// },
		});

		let sldierMassMedia = new Swiper(".mass-media__slider", {
			slidesPerView: 1,
			spaceBetween: 20,

			navigation: {
				nextEl: ".mass-media__next",
				prevEl: ".mass-media__prev",
			},
		});

		let revSliders = document.querySelectorAll(".reviews__sldier");

		if (revSliders != null) {
			revSliders.forEach((element) => {
				let sldierReviews = new Swiper(element, {
					slidesPerView: "auto",
					spaceBetween: 30,

					navigation: {
						nextEl: element.closest(".reviews").querySelector(".reviews__next"),
						prevEl: element.closest(".reviews").querySelector(".reviews__prev"),
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
					slidesPerView: "auto",
					loop: caseLoop,
					watchOverflow: true,
					spaceBetween: 30,
					navigation: {
						nextEl: "." + element.closest(".--slider-card").classList[0] + " .slider-card__next",
						prevEl: "." + element.closest(".--slider-card").classList[0] + " .slider-card__prev",
					},

					on: {
						init: function () {
							let slider = element;
							if (slider !== null) {
								let sliderCurrent = slider.closest(".--slider-card").querySelectorAll(".slider-card__pagination-current");
								sliderCurrent.forEach((el) => {
									el.textContent = this.realIndex + 1;
								});
								let sliderAll = slider.closest(".--slider-card").querySelectorAll(".slider-card__pagination-all");
								sliderAll.forEach((el) => {
									el.textContent = this.snapIndex;
								});
							}
						},

						slideChange: function () {
							let slider = element;
							if (slider !== null) {
								let sliderCurrent = slider.closest(".--slider-card").querySelectorAll(".slider-card__pagination-current");
								sliderCurrent.forEach((el) => {
									el.textContent = this.realIndex + 1;
								});
							}
						},
					},
				});
			});
		}

		let sldierBuyCourse = new Swiper(".buy-course__slider", {
			slidesPerView: 2,
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
	$(".js-progress-item").on("click", function () {
		if (!$(this).hasClass("active")) {
			let currentStep = $(this).attr("data-step");

			$(".js-progress-content").removeClass("active");
			$(".js-progress-item").removeClass("active");

			$(this).addClass("active");

			$(`.js-progress-content[data-step="${currentStep}"]`).addClass("active");

			if ($(".js-progress-item.active").index() == 0) {
				$(".js-progress-button.process-timeline__prev").addClass("--disabled");
			} else {
				$(".js-progress-button.process-timeline__prev").removeClass("--disabled");
			}

			if ($(".js-progress-item.active").index() == $(".js-progress-item").length - 1) {
				$(".js-progress-button.process-timeline__next").addClass("--disabled");
			} else {
				$(".js-progress-button.process-timeline__next").removeClass("--disabled");
			}
		}
	});

	$(".js-progress-button").on("click", function () {
		if ($(".js-progress-item.active").index() >= 0 && $(".js-progress-item.active").index() <= $(".js-progress-item").length - 1) {
			let currentStep = parseInt($(".js-progress-item.active").attr("data-step"));

			$(".js-progress-content").removeClass("active");
			$(".js-progress-item").removeClass("active");

			if ($(this).hasClass("process-timeline__next")) {
				$(`.js-progress-content[data-step="${currentStep + 1}"]`).addClass("active");

				$(`.js-progress-item[data-step="${currentStep + 1}"]`).addClass("active");
			}

			if ($(this).hasClass("process-timeline__prev")) {
				$(`.js-progress-content[data-step="${currentStep - 1}"]`).addClass("active");

				$(`.js-progress-item[data-step="${currentStep - 1}"]`).addClass("active");
			}
		}

		if ($(".js-progress-item.active").index() == 0) {
			$(".js-progress-button.process-timeline__prev").addClass("--disabled");
		} else {
			$(".js-progress-button.process-timeline__prev").removeClass("--disabled");
		}

		if ($(".js-progress-item.active").index() == $(".js-progress-item").length - 1) {
			$(".js-progress-button.process-timeline__next").addClass("--disabled");
		} else {
			$(".js-progress-button.process-timeline__next").removeClass("--disabled");
		}
	});

	$(".question__name").on("click", function () {
		if ($(this).parents(".question__item").hasClass("active")) {
			$(".question__item").removeClass("active");

			$(".question__text").slideUp();
		} else {
			$(".question__item").removeClass("active");

			$(".question__text").slideUp();

			$(this).parents(".question__item").addClass("active");

			$(this).parents(".question__item").find(".question__text").slideDown();
		}
	});

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
});
