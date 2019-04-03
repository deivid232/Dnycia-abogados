jQuery(function($){

	"use strict";

	/*----------------------/
	/* MAIN NAVIGATION
	/*---------------------*/

	$(window).on('scroll', function(){
		if( $(window).width() > 1024 ) {
			if($(document).scrollTop() > $(window).height()) {
				setNavbarLight();
			}else {
				setNavbarTransparent();
			}
		}
	});

	function toggleNavbar() {
		if(($(window).width() > 1024) && ($(document).scrollTop() <= $(window).height())) {
			setNavbarTransparent();
		} else {
			setNavbarLight();
		}
	}

	toggleNavbar();

	$(window).on('resize', function() {
		toggleNavbar();
	});

	/* Navbar Setting */
	function setNavbarLight() {
		$('.navbar').addClass('navbar-light');
	}

	function setNavbarTransparent() {
		$('.navbar').removeClass('navbar-light');
	}

	// Hide Collapsible Menu
	$('.navbar-nav li a').on('click', function() {
		if($(this).parents('.navbar-collapse.collapse').hasClass('in')) {
			$('#main-nav').collapse('hide');
		}
	});

	$('body').localScroll({
		duration: 2000,
		easing: 'easeInOutExpo'
	});

	/*----------------------/
	/* MAIN TOP SUPERSIZED
	/*---------------------*/

	// if( $('.main-top').length > 0 ) {
	// 	$.supersized({
	//
	// 		// Functionality
	// 		autoplay: 1,				// Slideshow starts playing automatically
	// 		slide_interval: 5000,		// Length between transitions
	// 		transition: 1, 				// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
	// 		transition_speed: 3000,		// Speed of transition
	//
	// 		// Components
	// 		slide_links: 'blank',		// Individual links for each slide (Options: false, 'num', 'name', 'blank')
	// 		thumb_links: 0,				// Individual thumb links for each slide
	// 		slides:  	[				// Slideshow Images
	// 						{image : 'assets/img/puente-carrusel-1.png', title : '', thumb : '', url : ''},
	// 						{image : 'assets/img/puente-carrusel-2.png', title : '', thumb : '', url : ''},
	// 						{image : 'assets/img/puente-carrusel-1.png', title : '', thumb : '', url : ''}
	// 					],
	// 	});
	//
	// }
	if( $('.main-top').length > 0 ) {
		$.supersized({

			// Functionality
			autoplay: 1,				// Slideshow starts playing automatically
			slide_interval: 3000,		// Length between transitions
			transition: 1, 				// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
			transition_speed: 1500,		// Speed of transition

			// Components
			slide_links: 'blank',		// Individual links for each slide (Options: false, 'num', 'name', 'blank')
			thumb_links: 0,				// Individual thumb links for each slide
			slides:  	[				// Slideshow Images
							{image : 'assets/img/portada1/1.png', title : '', thumb : '', url : ''},
							{image : 'assets/img/portada1/2.png', title : '', thumb : '', url : ''},
							{image : 'assets/img/portada1/3.png', title : '', thumb : '', url : ''},
							{image : 'assets/img/portada1/4.png', title : '', thumb : '', url : ''},
							{image : 'assets/img/portada1/5.png', title : '', thumb : '', url : ''},

						],
		});

	}

	/*----------------------/
	/* WORKS
	/*---------------------*/

	var originalTitle, currentItem;

	$('.media-popup').magnificPopup({
		type: 'image',
		callbacks: {
			beforeOpen: function() {

				// modify item title to include description
				currentItem = $(this.items)[this.index];
				originalTitle = currentItem.title;
				currentItem.title = '<h3>' + originalTitle + '</h3><hr />' + '<p>' + $(currentItem).parents('.work-item').find('img').attr('alt') + '</p>';

				// adding animation
				this.st.mainClass = 'mfp-fade';
			},
			close: function() {
				currentItem.title = originalTitle;
			}
		}

	});

	/*----------------------/
	/* SCROLL TO TOP
	/*---------------------*/

	if( $(window).width() > 992 ) {
		$(window).scroll( function() {
			if( $(this).scrollTop() > 300 ) {
				$('.back-to-top').fadeIn();
			} else {
				$('.back-to-top').fadeOut();
			}
		});

		$('.back-to-top').on('click', function(e) {
			e.preventDefault();

			$('body, html').animate({
				scrollTop: 0
			}, 1500, 'easeInOutExpo');
		});
	}

	if (!navigator.userAgent.match("Opera/") ) {
		$('body').scrollspy({
			target: '#main-nav'
		});
	}else {
		$('#main-nav .nav li').removeClass('active');
	}

});
