(function() {
    var wizards = [];
    var coatColor;
    var eyesColor;
    var firebolColor;

    var getRank = function(wizard) {
        var rank = 0;

        if (wizard.colorCoat === coatColor) {
            rank += 3;
        }

        if (wizard.colorEyes === eyesColor) {
            rank += 2;
        }

        if (wizard.colorFireball === firebolColor) {
            rank += 1;
        }

        return rank;
    };

    var namesComparator = function (leftName, rightName) {
        if (leftName > rightName) {
            return 1;
        } else if (leftName < rightName) {
            return -1;
        } else {
            return 0;
        }
    };

    var wizardsComparator = function (left, right) {
        var rankDiff = getRank(right) - getRank(left);
        return rankDiff === 0 ? namesComparator(left.name, right.name) : rankDiff;
    };

    var updateFilter = function () {
        window.render(wizards.sort(wizardsComparator));
    };

    window.onCoatChange = function (color) {
        coatColor = color;
        window.debounce(updateFilter);
    };

    window.onEyesChange = function (color) {
        eyesColor = color;
        window.debounce(updateFilter);
    };

    window.onFireballChange = function (color) {
        firebolColor = color;
        window.debounce(updateFilter);
    };

    window.backend.load(function(data) {
        wizards = data;
        updateFilter();
    });
})();