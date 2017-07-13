$(function() {
	var DARK_MODE_CLASS = 'dark-mode';

	function calcContentHeight() {
		var headerHeight = $('.navbar').outerHeight(true);
		var extraHeight = 0;

		$('.wrapper > .hide-on-med-and-up').each(function() {
			extraHeight += $(this).outerHeight(true);
		});

		var contentHeight = window.innerHeight - headerHeight - extraHeight - 10;

		$('.content-left').height(contentHeight);
		$('.content-left').css({
			'line-height': contentHeight + 'px'
		});
		$('.content-right').css({
			'min-height': contentHeight + 'px'
		});
	}

	function setMode(isDarkMode) {
		var $body = $('body');

		if (isDarkMode) {
			$body.addClass(DARK_MODE_CLASS);
		} else {
			$body.removeClass(DARK_MODE_CLASS);
		}

		localStorage.setItem('mode', isDarkMode ? 'dark' : 'light');
	}

	function setDefaultMode() {
		var isDarkMode = localStorage.getItem('mode') !== 'light';

		setMode(isDarkMode);

		$('#switch-mode').prop('checked', !!isDarkMode);
	}

	var timer;

	$(window).resize(function() {
		clearTimeout(timer);

		timer = setTimeout(calcContentHeight, 50);
	});

	calcContentHeight();
	setDefaultMode();

	$('#switch-mode').change(function() {
		var isDarkMode = $(this).is(':checked');

		setMode(isDarkMode);
	});
});
