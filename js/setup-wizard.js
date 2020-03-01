(function() {
	var wizardsData = {
		coatsColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
		eyesColor: ['black', 'red', 'blue', 'yellow', 'green'],
		fireballColors: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
	};
	var userDialogs = document.querySelector('.setup');
	var wizardCoat = userDialogs.querySelector('.wizard-coat');
	var wizardEyes = userDialogs.querySelector('.wizard-eyes');
	var wizardFireball = userDialogs.querySelector('.setup-fireball-wrap');
	var wizardCoatInput = userDialogs.querySelector('input[name=coat-color]');
	var wizardEyesInput = userDialogs.querySelector('input[name=eyes-color]');
	var wizardFireballInput = userDialogs.querySelector('input[name=fireball-color]');
	var coatsColorIndex = 0;
	var eyesColorIndex = 0;
	var fireballColorIndex = 0;

	var changeColorIndex = function (def, arr) {
	    return def < arr.length - 1 ? def + 1 : 0;
	}

	wizardCoat.addEventListener('click', function() {
	    coatsColorIndex = changeColorIndex(coatsColorIndex, wizardsData.coatsColor);
	    this.style.fill = wizardsData.coatsColor[coatsColorIndex];
	    wizardCoatInput.value = wizardsData.coatsColor[coatsColorIndex];
	    window.onCoatChange(wizardsData.coatsColor[coatsColorIndex]);
	});

	wizardEyes.addEventListener('click', function() {
	    eyesColorIndex = changeColorIndex(eyesColorIndex, wizardsData.eyesColor);
	    this.style.fill = wizardsData.eyesColor[eyesColorIndex];
	    wizardEyesInput.value = wizardsData.eyesColor[eyesColorIndex];
		window.onEyesChange(wizardsData.eyesColor[eyesColorIndex]);
	});

	wizardFireball.addEventListener('click', function() {
	    fireballColorIndex = changeColorIndex(fireballColorIndex, wizardsData.fireballColors);
	    this.style.background = wizardsData.fireballColors[fireballColorIndex];
	    wizardFireballInput.value = wizardsData.fireballColors[fireballColorIndex];
		window.onFireballChange(wizardsData.fireballColors[fireballColorIndex]);
	});
})();