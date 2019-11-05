window.renderStatistics = function (ctx, names, times) {
    var RECT_X = 100,
        RECT_Y = 10,
        RECT_WIDTH = 420,
        RECT_HEIGHT = 270,
        RECT_COLOR = 'rgb(255, 255, 255)',
        SHADOW_X = RECT_X + 10,
        SHADOW_Y = RECT_Y + 10,
        SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)',
        TEXT_COLOR = 'rgb(0, 0, 0)',
        MAX_TIMES_HEIGHT = 150;

    ctx.fillStyle = SHADOW_COLOR;
    ctx.fillRect(SHADOW_X, SHADOW_Y, RECT_WIDTH, RECT_HEIGHT);
    ctx.fillStyle = RECT_COLOR;
    ctx.fillRect(RECT_X, RECT_Y, RECT_WIDTH, RECT_HEIGHT);
    ctx.baseline = 'handing';
    ctx.font = '16px PT Mono';
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText('Ура вы победили!', 130, 40);
    ctx.fillText('Список результатов:', 130, 60);
    ctx.baseline = 'bottom';

    var maxTimes = 0,
        startPosition = 60,
        timesHeight = 0,
        positionY = 0;

    for (var i = 0; i < times.length; i++) {
        if (maxTimes < times[i]) {
            maxTimes = times[i];
        }
    }

    for (var j = 0; j < times.length; j++) {
        timesHeight = MAX_TIMES_HEIGHT * times[j] / maxTimes;
        positionY = 100 + (MAX_TIMES_HEIGHT - timesHeight);
        startPosition += 90;
        ctx.fillStyle = '#000';
        ctx.fillText(Math.floor(times[j]), startPosition, 245 - timesHeight);
        ctx.fillText(names[j], startPosition, 270);
        ctx.fillStyle = `rgba(0, 83, 183, ${Math.random()})`;
        if(names[j] === 'Вы') {
            ctx.fillStyle = 'rgb(255, 36, 0)';
        }

        ctx.fillRect(startPosition, positionY, 40, timesHeight);
    }
}