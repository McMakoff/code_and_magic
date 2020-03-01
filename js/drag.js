'use strict';

(function(){
	var userDialog = document.querySelector('.setup');
	var avatar = userDialog.querySelector('.upload');

	avatar.addEventListener('mousedown', function(eDown) {
		var startCoords = {
			x: eDown.clientX,
			y: eDown.clientY
		}

		var dragged = false;

		var onMouseMove = function(eMove) {
			dragged = true;

			var shifts = {
				x: eMove.clientX - startCoords.x,
				y: eMove.clientY - startCoords.y
			}

			startCoords = {
				x: eMove.clientX,
				y: eMove.clientY
			}

			userDialog.style.left = (userDialog.offsetLeft + shifts.x) + 'px';
			userDialog.style.top = (userDialog.offsetTop + shifts.y) + 'px';
		}

		var onMouseUp = function () {
			document.removeEventListener('mousemove', onMouseMove);
			document.removeEventListener('mouseup', onMouseUp);
			if (dragged) {
				var onClickPreventDefault = function (eUp) {
					eUp.preventDefault();
					avatar.removeEventListener('click', onClickPreventDefault);
				};
				avatar.addEventListener('click', onClickPreventDefault);
			}
		}

		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseup', onMouseUp);
	});
})();