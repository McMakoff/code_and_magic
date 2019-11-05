var userDialogs = document.querySelector('.setup'),
    wizardsSimilar = userDialogs.querySelector('.setup-similar'),
    wizardsSimilarList = wizardsSimilar.querySelector('.setup-similar-list'),
    wizardsSimilarTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'),
    namesSimilarArray = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    lastNamesSimilarArray = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    coatsColorSimilarArray = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyesColorsSimilarArray =['black', 'red', 'blue', 'yellow', 'green'],
    wizardsSimilarArray = [],
    wizardSimilarQuantity = 4;

userDialogs.classList.remove('hidden');
wizardsSimilar.classList.remove('hidden');

var shuffleArray = function (arr){
    var x, temp;
    for(var z = arr.length - 1; z >= 0; z--){
        x = Math.floor(Math.random() * (z + 1));
        temp = arr[x];
        arr[x] = arr[z];
        arr[z] = temp;
    }
    return arr;
}

var wizardsSimilarData = function () {
    for(var i = 0; i <= wizardSimilarQuantity; i++) {
        wizardsSimilarArray[i] = {
            name: namesSimilarArray[i],
            lastName: lastNamesSimilarArray[i],
            coatColor: coatsColorSimilarArray[Math.floor(Math.random() * coatsColorSimilarArray.length)],
            eyesColor: eyesColorsSimilarArray[Math.floor(Math.random() * eyesColorsSimilarArray.length)]
        }
    }
    return wizardsSimilarArray;
}

var similarWizardElement = function() {
    for (var j = 0; j <= wizardSimilarQuantity; j++) {
        var wizardSimilarElement = wizardsSimilarTemplate.cloneNode(true);
        wizardSimilarElement.querySelector('.setup-similar-label').textContent = wizardsSimilarArray[j].name + ' ' + wizardsSimilarArray[j].lastName;
        wizardSimilarElement.querySelector('.wizard-coat').style.fill = wizardsSimilarArray[j].coatColor;
        wizardSimilarElement.querySelector('.wizard-eyes').style.fill = wizardsSimilarArray[j].eyesColor;
        wizardsSimilarList.appendChild(wizardSimilarElement);
    }
}

shuffleArray(namesSimilarArray);
shuffleArray(lastNamesSimilarArray);
wizardsSimilarData();
similarWizardElement();

