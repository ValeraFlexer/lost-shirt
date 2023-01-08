(function() {

const slider = document.querySelectorAll('.main-slider-item');
const active = 'main-slider-item-active';
let index = 0;


setInterval(function() {
	slider[index].classList.remove(active);
	index++;

	if (index + 1 > slider.length) {
		index = 0;
	}

	slider[index].classList.add(active);

}, 5000);

}())