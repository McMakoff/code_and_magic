'use strict';

(function(){
	var userDialogs = document.querySelector('.setup');
	var setupOpen = document.querySelector('.setup-open-icon');
	var setupClose = userDialogs.querySelector('.setup-close');
	var inputName = document.querySelector('.setup-user-name');

	var openSetup = function () {
	    userDialogs.classList.remove('hidden');
	    document.addEventListener('keydown', onPopupEscPress);
	}

	var closeSetup = function() {
	    userDialogs.classList.add('hidden');
	    document.removeEventListener('keydown', onPopupEscPress);
	    userDialogs.style.left = '';
		userDialogs.style.top = '';
	}

	var onPopupEscPress = function(e) {
	    if (e.keyCode === 27) {
	        closeSetup();
	    }
	}

	setupOpen.addEventListener('click', openSetup);
	setupOpen.addEventListener('keydown', function (e) {
	    if(e.keyCode === 13) {
	        openSetup();
	    }
	});

	setupClose.addEventListener('click', closeSetup);
	setupClose.addEventListener('keydown', function (e) {
	    if(e.keyCode === 13) {
	        closeSetup();
	    }
	});

	inputName.addEventListener('keydown', function (e) {
	    if (e.keyCode === 27) {
	        e.stopPropagation();
	    }
	});
})();