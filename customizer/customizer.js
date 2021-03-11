/*
 * Template Customizer
 * Copyright 2018 rokaux
 */

jQuery(document).ready(function($) {
	'use strict';

	// Open/close customizer
	$('.customizer-toggle').on('click', function() {
		$('.customizer').toggleClass('open');
	});

	// Switch colors
	$('.customizer-color-switch > a').on('click', function() {
		$('.customizer-color-switch > a').removeClass('active');
		$(this).addClass('active');
		$('.customizer-backdrop').addClass('active');
		setTimeout(function() {
			$('.customizer-backdrop').removeClass('active');
		}, 1000);

		var color = $(this).data('color'),
				currentLink = $('#mainStyles').attr('href'),
				currentLogo = $('.site-logo:not(.light-logo) > img').attr('src'),
				linkParts = currentLink.split('/'),
				logoParts = currentLogo.split('/'),
				lastLinkPart = $(linkParts).get(-1),
				lastLogoPart = $(logoParts).get(-1);
		switch(color) {
			case '2ecc71':
				lastLinkPart = 'styles-2ecc71.min.css';
				lastLogoPart = 'logo-2ecc71.png';
			break;
			case 'f39c12':
				lastLinkPart = 'styles-f39c12.min.css';
				lastLogoPart = 'logo-f39c12.png';
			break;
			case 'e74c3c':
				lastLinkPart = 'styles-e74c3c.min.css';
				lastLogoPart = 'logo-e74c3c.png';
				break;
			default:
			lastLinkPart = 'styles.min.css';
			lastLogoPart = 'logo.png';
		}
		linkParts.pop();
		logoParts.pop();
		var newLink = $.map(linkParts, function(val, index) {
			var str = val;
			return str;
		}).join('/');
		var newLogo = $.map(logoParts, function(val, index) {
			var str = val;
			return str;
		}).join('/');
		currentLink = newLink + '/' + lastLinkPart;
		currentLogo = newLogo + '/' + lastLogoPart;
		$('#mainStyles').attr('href', currentLink);
		$('.site-logo:not(.light-logo) > img').attr('src', currentLogo);
	});

	// Switch Light Logo
	if($('.light-logo').length) {
		$('.customizer-color-switch > a').on('click', function() {
			$('.customizer-color-switch > a').removeClass('active');
			$(this).addClass('active');
			$('.customizer-backdrop').addClass('active');
			setTimeout(function() {
				$('.customizer-backdrop').removeClass('active');
			}, 1000);
	
			var color = $(this).data('color'),
					currentLogoLight = $('.site-logo.light-logo > img').attr('src'),
					logoLightParts = currentLogoLight.split('/'),
					lastLogoLightPart = $(logoLightParts).get(-1);
			switch(color) {
				case '2ecc71':
					lastLogoLightPart = 'logo-light-2ecc71.png';
				break;
				case 'f39c12':
					lastLogoLightPart = 'logo-light-f39c12.png';
				break;
				case 'e74c3c':
					lastLogoLightPart = 'logo-light-e74c3c.png';
					break;
				default:
				lastLogoLightPart = 'logo-light.png';
			}
			logoLightParts.pop();
			var newLogoLight = $.map(logoLightParts, function(val, index) {
				var str = val;
				return str;
			}).join('/');
			currentLogoLight = newLogoLight + '/' + lastLogoLightPart;
			$('.site-logo.light-logo > img').attr('src', currentLogoLight);
		});
	}

	// Switch Header option
	$('#header-option').on('change', function() {
		var currentHeader = $(this).find('option:selected').val(),
				navbar = $('.navbar'),
				topbarH = $('.topbar').outerHeight(),
				navbarH = navbar.outerHeight(),
				body = $('body');
		if(currentHeader === 'static') {
			navbar.removeClass('navbar-stuck');
			$(window).on('scroll', function() {
				if($(this).scrollTop() > topbarH) {
					navbar.removeClass('navbar-stuck');
					body.css('padding-top', 0);
				}
			});
		} else {
			navbar.addClass('navbar-stuck');
			$(window).on('scroll', function() {
				if($(this).scrollTop() > topbarH) {
					navbar.addClass('navbar-stuck');
					body.css('padding-top', navbarH);
				} else {
					navbar.removeClass('navbar-stuck');
					body.css('padding-top', 0);
				}
			});
		}
	});

	// Switch Footer option
	$('#footer-option').on('change', function() {
		var currentFooter = $(this).find('option:selected').val(),
		footer = $('.site-footer'),
		widget = footer.find('.widget'),
		marketBtn = widget.find('.market-button'),
		paragraph = widget.find('p'),
		list = widget.find('.list-unstyled'),
		link = widget.find('p > a'),
		socialBtn = widget.find('.social-button'),
		input = footer.find('.input-group'),
		hr = footer.find('hr'),
		imageSrc = $('.site-footer img').attr('src'),
		imageParts = imageSrc.split('/'),
		lastImagePart = $(imageParts).get(-1),
		body = $('body');
		if(currentFooter === 'light') {
			widget.removeClass('widget-light-skin');
			marketBtn.removeClass('mb-light-skin');
			paragraph.removeClass('text-white');
			list.removeClass('text-white');
			link.removeClass('navi-link-light');
			socialBtn.removeClass('sb-light-skin');
			input.removeClass('input-light');
			hr.removeClass('hr-light');
			lastImagePart = 'payment_methods_alt.png';
			footer.addClass('footer-light');
		} else {
			widget.addClass('widget-light-skin');
			marketBtn.addClass('mb-light-skin');
			paragraph.addClass('text-white');
			list.addClass('text-white');
			link.addClass('navi-link-light');
			socialBtn.addClass('sb-light-skin');
			input.addClass('input-light');
			hr.addClass('hr-light');
			lastImagePart = 'payment_methods.png';
			footer.removeClass('footer-light');
		}
		imageParts.pop();
		var newImage = $.map(imageParts, function(val, index) {
			var str = val;
			return str;
		}).join('/');
		imageSrc = newImage + '/' + lastImagePart;
		$('.site-footer img').attr('src', imageSrc);
	});

});/*Document Ready End*/
