"use strict";

/* ======= FAQ accordion ======= */
const accordionTogglers = document.querySelectorAll('.accordion .accordion-button');
 
accordionTogglers.forEach((accordionToggler) => {
	accordionToggler.addEventListener('click', function () {
		
		
		let togglerIcon = accordionToggler.querySelector('.svg-inline--fa');
		
		if (togglerIcon.getAttribute('data-icon') == 'plus-square') {
			togglerIcon.setAttribute('data-icon', 'minus-square');
		} else {
			togglerIcon.setAttribute('data-icon', 'plus-square');
		}
		
		
	});
});
 

 
 
