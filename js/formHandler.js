var s=0;
function loadForm(arg) {
	$(document).ajaxComplete(function(){
		$('.claimantForm').css("opacity","0");
		if(s==0) {$('.selectedDesig').html(()=>{$('.selectedDesig')[0].innerText='Claimant'})}
		else	 {$('.selectedDesig').html(()=>{$('.selectedDesig')[0].innerText='Insurer'})}
		$('.claimantForm').animate({opacity:1},1000);
	});
	$('.claimantForm').load("assets/objects/"+arg);
}

function selectForm(arg) {
	if(arg=="Claimant")	s=0;
	else				s=1;

	var form = document.getElementsByClassName('formOption');
	var TI = 250;

	if(arg=="Claimant") {
		$("#SignIn").removeClass("insurerSignIn")
		$("#SignIn").addClass("claimantSignIn")
		form[0].classList.add("selectedForm");
		if (form[1].classList.contains("selectedForm")) {
			form[1].classList.remove("selectedForm");
			$('.selectedDesig').animate({width:0},TI);
			setTimeout(()=>{
				$('.selectedDesig').html(()=>{$('.selectedDesig')[0].innerText=arg})
				$('.selectedDesig').animate({width:65},TI);
			},TI);
		}
	} else {
		$("#SignIn").removeClass("claimantSignIn")
		$("#SignIn").addClass("insurerSignIn")
		if (form[0].classList.contains("selectedForm")) {
			form[0].classList.remove("selectedForm");
			$('.selectedDesig').animate({width:0},TI);
			setTimeout(()=>{
				$('.selectedDesig').html(()=>{$('.selectedDesig')[0].innerText=arg})
				$('.selectedDesig').animate({width:52},TI);
			},TI);
		}
		form[1].classList.add("selectedForm");
	}
}