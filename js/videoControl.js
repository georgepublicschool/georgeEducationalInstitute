var vid = document.getElementsByTagName('video')[0];
var pauseBtnSpan = document.getElementById('faisal');
var pauseButton = document.querySelector("#faisal span");
if (window.matchMedia('(prefers-reduced-motion)').matches) {
	vid.removeAttribute("autoplay");
	vid.pause();
	pauseButton.innerHTML = "<img src='assets/img/play.png'>"
}
vid.addEventListener("ended", ()=> { vid.pause(); })
pauseBtnSpan.addEventListener("click",()=>{
	if(vid.paused)	videoControl("play");
		else 		videoControl("pause");
})

function videoControl(arg) {
	if(arg=="pause") {
		vid.pause();
		pauseButton.innerHTML = "<img src='assets/img/play.png'>"
		$(pauseBtnSpan).css('opacity','1');
		$(pauseBtnSpan).animate({opacity:0},dur);
	} else if(arg=="play") {
		vid.play();
		pauseButton.innerHTML = "<img src='assets/img/pause.png'>"
		$(pauseBtnSpan).css('opacity','1');
		$(pauseBtnSpan).animate({opacity:0},dur);
	}
}

function openVideoDiv() {
	videoControl("play");
	document.getElementsByTagName('body')[0].style.overflowY = "hidden";
	document.getElementsByClassName('videoDiv')[0].classList.remove("hide");
}

function closeVideoDiv() {
	videoControl("pause");
	document.getElementsByTagName('body')[0].style.overflowY = "auto";
	document.getElementsByClassName('videoDiv')[0].classList.add("hide");
	vid.currentTime=0;
}

$(document).on('keydown',function(e) {
	if(e.keyCode==27) closeVideoDiv();
	if(!document.getElementsByClassName('videoDiv')[0].classList.contains("hide") && e.keyCode==32) vid.paused?videoControl('play'):videoControl('pause');
})