$(document).ready(function () {
	$('.sliderTrening').slick({
		prevArrow: '<div class="arrow left"><img src="img/left.svg", alt=""></div>',
		nextArrow: '<div class="arrow right"><img src="img/right.svg", alt=""></div>'
	});
	$('.sliderBlog').slick({
		prevArrow: '<div class="arrow left"><img src="img/left.svg", alt=""></div>',
		nextArrow: '<div class="arrow right"><img src="img/right.svg", alt=""></div>'
	});

	$('.calendar').multiDatesPicker();

});