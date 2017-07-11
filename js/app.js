$(function() {
	var DARK_MODE_CLASS = 'dark-mode';

	function calcContentHeight() {
		var headerHeight = $('.navbar').outerHeight(true);
		var contentHeight = window.innerHeight - headerHeight;

		$('.content-left').height(contentHeight);
		$('.content-right').height(contentHeight);
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
		var isDarkMode = localStorage.getItem('mode') === 'dark';

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
