$(document).ready(function () {
	$('.sliderTrening').slick({
		prevArrow: '<div class="arrow left"><img src="img/left.svg", alt=""></div>',
		nextArrow: '<div class="arrow right"><img src="img/right.svg", alt=""></div>',
		responsive: [{
			breakpoint: 490,
			settings: {
				arrows: false
			}

		}]
	});
	$('.sliderBlog').slick({
		prevArrow: '<div class="arrow left"><img src="img/left.svg", alt=""></div>',
		nextArrow: '<div class="arrow right"><img src="img/right.svg", alt=""></div>',
		responsive: [{
			breakpoint: 490,
			settings: {
				arrows: false
			}

		}]
	});

	$('.calendar').multiDatesPicker();
//Accordeon
	$('.faqAccordeon>.bottomAccordeon').not(':first').hide();

	$('.faqAccordeon>.topAccordeon').click(function () {
		var all = $('.faqAccordeon>.topAccordeon').removeClass('active');
		var top = $(this).addClass('active');

		var findAcc = $(this).next('.bottomAccordeon');
		var findClosest = $(this).closest('.faqAccordeon');

		if (findAcc.is(':visible')) {
			findAcc.slideUp(1000);
		} else {
			findClosest.find('>.bottomAccordeon').slideUp(1000);
			findAcc.slideDown(1000);
		}

	});

// Accordeon courses
	$('.coursesAccordeon>.bottomAccordeon').not(':first').hide();

	$('.coursesAccordeon>.topAccordeon').click(function () {
		var all = $('.coursesAccordeon>.topAccordeon').removeClass('active');
		var top = $(this).addClass('active');

		var findAcc = $(this).next('.bottomAccordeon');
		var findClosest = $(this).closest('.coursesAccordeon');

		if (findAcc.is(':visible')) {
			findAcc.slideUp(1000);
		} else {
			findClosest.find('>.bottomAccordeon').slideUp(1000);
			findAcc.slideDown(1000);
		}

	});
//Accordeon Small Category
	$('.blogAccordeon>.bottomAccordeon').hide();

	$('.blogAccordeon>.topAccordeon').click(function () {
		var all = $('.blogAccordeon>.topAccordeon').removeClass('active');
		var top = $(this).addClass('active');

		var findAcc = $(this).next('.bottomAccordeon');
		var findClosest = $(this).closest('.blogAccordeon');

		if (findAcc.is(':visible')) {
			findAcc.slideUp(500);
		} else {
			findClosest.find('>.bottomAccordeon').slideUp(500);
			findAcc.slideDown(500);
		}

	});
});