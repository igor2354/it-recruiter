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

	$(".question__group").on("click", function () {
		if ($(this).parent().hasClass("active")) {
			$(".question__item").removeClass("active");

			$(".question__text").slideUp();
		} else {
			$(".question__item").removeClass("active");

			$(".question__text").slideUp();

			$(this).parent().addClass("active");

			$(this).next().slideDown();
		}
	});
});
