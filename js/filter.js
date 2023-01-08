(function() {

const elem = document.querySelector('.product-list');
const iso = new Isotope( elem, {
  // options
  itemSelector: '.product-list-item',
  filter: '.new',
});

const controlls = document.querySelectorAll('.product-menu-btn');
const active = 'product-menu-btn-wrap-active';

controlls.forEach(function(control) {

	control.addEventListener('click', function(e) {
		e.preventDefault();

		const filterName = control.getAttribute('data-filter')

		controlls.forEach(function(link) {
			link.closest('.product-menu-btn-wrap').classList.remove(active);
		})

		control.closest('.product-menu-btn-wrap').classList.add(active);

		iso.arrange({
			filter: `.${filterName}`
		})
	})
});



}())