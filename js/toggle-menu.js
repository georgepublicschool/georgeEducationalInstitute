function toggleMenu() {
	document.getElementsByClassName('header')[0].classList.toggle('vb');
	document.getElementsByClassName('overlayMenuContainer')[0].classList.toggle('change');
	document.getElementsByClassName('overlay-menu')[0].classList.toggle('open');
	document.getElementsByTagName('body')[0].classList.toggle('unscroll');
}
