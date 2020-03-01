(function() {
    var lastTimeout;
    var DEBOUNCE_TIME = 300;// ms
    window.debounce = function(fun) {
        if(lastTimeout) {
            window.clearTimeout(lastTimeout);
        }
        lastTimeout = window.setTimeout(fun, DEBOUNCE_TIME);
    }
})();