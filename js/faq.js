$(window).on('load', ()=>{
	getFAQs("generalInquiries");
	$(".faqBox:eq(0)").addClass('open')
});

$(document).ajaxStart( ()=>{
	$('.faqsPage').text('')
	$('.faqTitle').off("click",faqVisible)
})
$(document).ajaxComplete( ()=>{
	$(".faqDets:eq(0)").addClass('visibleFAQ')
	$(".addSvg:eq(0)").addClass('transp')

	$('.faqTitle').on("click",faqVisible)
});

$('.faqBox').on("click", function() {
	if(!$(this).hasClass('open')) {
		$('.faqBox').removeClass('open');
		getFAQs(this.id);
		$(this).addClass('open');
	}
})

function faqVisible() {
	$(".faqDets:eq("+this.id+")").toggleClass('visibleFAQ')
	$(".addSvg:eq("+this.id+")").toggleClass('transp')
}

function getFAQs(arg) {
	$.getJSON('assets/objects/'+arg+'.json', (faisal) => {
		let faqName = document.createElement("div")
			faqName.setAttribute("class","faqName")
		let faqh2 =  document.createElement('h2')
			faqh2.innerHTML = faisal.name
		let faqp =  document.createElement('p')
			faqp.innerHTML = faisal.desc
		$(faqName).append(faqh2)
		$(faqName).append(faqp)
		$('.faqsPage').append(faqName)

		let i=0;
		$.each(faisal.faqs, (key,val)=>{
			let aFaq = document.createElement("div")
				aFaq.setAttribute("class","aFaq")

			let faqTitle = document.createElement("div")
				faqTitle.setAttribute("class","faqTitle")
				faqTitle.setAttribute("id",i++)
				faqTitle.innerHTML = key
			let img1 = document.createElement("img")
				img1.setAttribute("src","assets/img/sub.svg")
			let img2 = document.createElement("img")
				img2.setAttribute("src","assets/img/add.svg")
				img2.setAttribute("class","addSvg")
			$(faqTitle).append(img1)
			$(faqTitle).append(img2)

			let faqDets = document.createElement("div")
				faqDets.setAttribute("class","faqDets")
				faqDets.innerHTML = val
			$(aFaq).append(faqTitle)
			$(aFaq).append(faqDets)
			$('.faqsPage').append(aFaq)
		})
	})
}
