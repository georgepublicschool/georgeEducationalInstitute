isInViewport = (faisal,x)=>{
	var bounding = faisal.getBoundingClientRect();
	return (
		bounding.height>0 &&
		bounding.width>0 &&
		bounding.top<=(100+x) &&
		bounding.bottom>=100
	);
};

function visibleDiv () {
	var mi = document.getElementsByClassName('menu-item');
	for (var i=5;i<=9;i++) mi[i].style.color = "#9D9D9D";
	if(isInViewport($('.landing')[0])) {
		mi[5].style.color = "#152994";
	}
	else if(isInViewport($('.processDiv')[0],100)) {
		mi[6].style.color = "#152994";
	}
	else if(isInViewport($('.products')[0],1920)) {
		mi[7].style.color = "#152994";
	}
	else if(isInViewport($('.team')[0],0)) {
		mi[8].style.color = "#152994";
	}
	else if(isInViewport($('.contact')[0],0)) {
		mi[9].style.color = "#152994";
	}
}
