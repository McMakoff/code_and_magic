'use strict';

(function() {
    var wizardsTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    var wizardsList = document.querySelector('.setup-similar-list');

    window.render = function(data) {
        var takeNumber = data.length > 4 ? 4 : data.length;
        wizardsList.innerHTML = '';
        for (var i = 0; i <= takeNumber; i++) {
            var wizardElement = wizardsTemplate.cloneNode(true);
            wizardElement.querySelector('.setup-similar-label').textContent = data[i].name;
            wizardElement.querySelector('.wizard-coat').style.fill = data[i].colorCoat;
            wizardElement.querySelector('.wizard-eyes').style.fill = data[i].colorEyes;
            wizardsList.appendChild(wizardElement);
        }
    }
})();