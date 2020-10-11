var dur = 500;
function run(u,v){
	$(v[0]).animate(v[1], {
		duration: dur,
		step: function(val) {
			u.css("transform", `translateY(${val}px)`); 
		}
	})
};

$(window).on('load',function() {
	setTimeout(()=>{$('.cars').css("opacity","0");$('.cars').animate({opacity:1},dur);$('.cars').css("opacity","1")},dur);
	// setTimeout(()=>{$('.txtBig').animate({opacity:1},dur);run($('.txtBig'),[{y:25},{y:0}])},dur);
	setTimeout(()=>{$('.sitting').animate({opacity:1},dur+100)},dur);
});

function displayFixedHeader(header) {
	var height = window.innerHeight;
	if (document.body.scrollTop > height || document.documentElement.scrollTop > height)
		header.style.top = "0";
	else
		header.style.top = "-120px";
}

window.onscroll = function() {
	var header = document.getElementById('navigator');
	var smolheader = document.getElementsByClassName('header')[0];
	if(window.innerWidth>=767) {
		displayFixedHeader(header);
		visibleDiv();
	} else {
		header.style.top = "-120px";
		if (document.body.scrollTop>window.innerHeight || document.documentElement.scrollTop>window.innerHeight)
			smolheader.classList.add("sc");
		else smolheader.classList.remove("sc");
	}
};

function toggleMenu() {
	document.getElementsByClassName('header')[0].classList.toggle('vb');
	document.getElementsByClassName('overlayMenuContainer')[0].classList.toggle('change');
	document.getElementsByClassName('overlay-menu')[0].classList.toggle('open');
	document.getElementsByTagName('body')[0].classList.toggle('unscroll');
}

function togglevisible() {
	$(".slide").toggleClass("dikhra");
	$(".dots span").toggleClass("biryani");
	$(".butt").toggleClass("nope");
}

function teamMembersFunc(arg) {
	var all = document.getElementsByClassName('teamColumn');
	var grp = document.getElementsByClassName('teamGrp');
	$(grp).removeClass("teamSelected");

	if(arg==="co-founders") grp[0].classList.add("teamSelected");
	else if(arg==="advisory") grp[1].classList.add("teamSelected");

	$(all).css('transform','scale(0)');
	setTimeout(()=>{
		$(all).removeClass('teamInvisible');
		var cards = document.getElementsByClassName(arg);
		$(cards).toggleClass('teamInvisible');
	},300);
	setTimeout(()=>{$(all).css('transform','scale(1)');},350);
}
