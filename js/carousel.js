$(document).ready(function () {
	"use strict";

	/*************************************************************************
								Global Variables
	*************************************************************************/
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	var $backgroundColor;
	var topOffset = 50;	// menu height
	var homeSlides = $('#featured .item').length; // Store how many indicators are in home page
	var testimonialsSlides = $('#testimonials-carousel .item').length	// Store how many testimonials


	/*************************************************************************
								Navigation
	*************************************************************************/




	/*************************************************************************
								Brand Hovering Effect
	*************************************************************************/
	$('header .navbar-default .navbar-brand').on({
		'mouseenter': function() {
			$(this).children().css('color', '#777');
		},
		'mouseleave': function() {
			$(this).children().css('color', '#e6e8e9');
		}
	});

	/*************************************************************************
								Carousel
	*************************************************************************/

	// Make carousel the height of the window 
	$('.fullheight').css('height', windowHeight);

	// Replace carousel images with background images
	$('#featured .item img').each(function () {
		var imageSource = $(this).attr('src');

		$(this).parent().css({'background-image': 'url('+imageSource+')',
							'background-attachment': 'fixed'});

		$(this).remove();
	});

	// Sets how often the carousel changes
	$('#featured').carousel({
  		interval: 4000
	});

	$("testimonials-carousel").carousel({
		interval: 4000
	});

	// Keep background images always take page full width
	$(window).resize(function () {
		windowHeight = $(window).height();

		$('.fullheight').css('height', windowHeight);

	});


	/************************
	Carousel indicators
	************************/
	for (var i = 0; i < homeSlides; i++) {
		var text = '<li data-target="#featured" data-slide-to="' + i + '"></li>';
		$('#featured ol').append(text);
	}

	for (var i = 0; i < testimonialsSlides; i++) {
		var text = '<li data-target="#testimonials-carousel" data-slide-to="' + i + '"></li>';
		$('#testimonials-carousel ol').append(text);
	}

	/*************************************************************************
								Scroll Spy
	*************************************************************************/

	$('body').scrollspy({
		target: 'header .navbar-fixed-top',
		offset: topOffset
	});

	var hash = $(this).find('li.active a').attr('href');

	if (hash !== "#home") {
		$('header nav').addClass('inbody');
	} else {
		$('header nav').removeClass('inbody');
	}


	$('header .navbar-fixed-top').on('activate.bs.scrollspy', function() {
		hash = $(this).find('li.active a').attr('href');

		if (hash !== "#home") {
			$('header nav').addClass('inbody');
		} else {
			$('header nav').removeClass('inbody');
		}
	});

	$(function() {
	  	$('.navbar a[href*=\\#]:not([href=\\#])').click(function() {
	    	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
	    		var target = $(this.hash);
	      		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      		if (target.length) {
	        		$('html, body').animate({
	          		scrollTop: target.offset().top
	        	}, 1000);
	        	return false;
	      		}
	    	}
	  	});
	});


	/*************************************************************************
								Element Animations
	*************************************************************************/


	//Bounce element from the left
	$('.fromLeft').css('opacity', 0);

	$('.fromLeft').waypoint(function () {
		$(this.element).addClass('animated bounceInLeft').css('opacity', 1);
	}, { offset: '55%'});

	// Bounce from the right
	$('.fromRight').css('opacity', 0);


	$('.fromRight').waypoint(function () {
		$(this.element).addClass('animated bounceInRight').css('opacity', 1);
	}, { offset: '55%'});


	//Fade element from the left
	$('.fadeLeft').css('opacity', 0);

	$('.fadeLeft').waypoint(function () {
		$(this.element).addClass('animated fadeInLeft').css('opacity', 1);
	}, {
	 		offset: 'bottom-in-view'
		});

	//Fade element from the right
	$('.fadeRight').css('opacity', 0);

	$('.fadeRight').waypoint(function () {
		$(this.element).addClass('animated fadeInRight').css('opacity', 1);
	}, {
	 		offset: 'bottom-in-view'
		});

	//Fade element in
	$('.fadeInside').css('opacity', 0);

	$('.fadeInside').waypoint(function () {
		$(this.element).addClass('animated fadeIn').css('opacity', 1);
	}, {
	 		offset: 'bottom-in-view'
		});


	$('.panel .table-button').on({
		"mouseenter": function() {
			$backgroundColor = $(this).children().css('background-color');
			$(this).children().css('background-color', '#16a085');
		},
		"mouseleave": function() {
			$(this).children().css({'background-color': $backgroundColor,
									'text-decoration': 'none'});
		}
	});
});
