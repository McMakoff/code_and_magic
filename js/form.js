'use strict';
(function(){
    var userDialog = document.querySelector('.overlay');
    var form = userDialog.querySelector('.setup-wizard-form');

    form.addEventListener('submit', function(e){
        window.backend.save(new FormData(form), function(response) {
            userDialog.classList.add('hidden');
        });
        e.preventDefault();
    })
})();