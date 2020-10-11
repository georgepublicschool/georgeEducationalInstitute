var dur = 500;

function toggleMenu() {
	document.getElementsByClassName('cont')[0].classList.toggle('change');
	document.getElementsByClassName('overlay-menu')[0].classList.toggle('open');
	document.getElementsByTagName('body')[0].classList.toggle('unscroll');
}

function teamMembersFunc(arg) {
	var all = document.getElementsByClassName('column');
	var grp = document.getElementsByClassName('grp');
	$(grp).removeClass("selected");

	if(arg==="all") {
		grp[0].classList.add("selected");
		$(all).css('transform','scale(0)');
		$(all).addClass("invisible");
	} else {
		if(arg==="co-founders") grp[1].classList.add("selected");
		else if(arg==="insurance") grp[2].classList.add("selected");
		else if(arg==="advisory") grp[3].classList.add("selected");

		$(all).css('transform','scale(0)');
		setTimeout(()=>{
			$(all).removeClass('invisible');
			var cards = document.getElementsByClassName(arg);
			$(cards).toggleClass('invisible');
		},500);
	}
	setTimeout(()=>{$(all).css('transform','scale(1)');},600);
}
