/*
Developers : 
	Faisal Akhtar (https://faisalakhtar.github.io)
	Shubhangi Goyal (https://goyalshubhangi.github.io)
*/
function myOS() {
	var userAgent = window.navigator.userAgent,
	platform = window.navigator.platform,
	macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
	windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
	iosPlatforms = ['iPhone', 'iPad', 'iPod'],
	os = null;
	if (macosPlatforms.indexOf(platform) !== -1)		os = 'Mac OS';
	else if (iosPlatforms.indexOf(platform) !== -1)		os = 'iOS';
	else if (windowsPlatforms.indexOf(platform) !== -1)	os = 'Windows';
	else if (/Android/.test(userAgent))					os = 'Android';
	else if (!os && /Linux/.test(platform))				os = 'Linux';
	else												os = 'Undetected';
	return ("Operating System = " + os);
}

function myBrowser() {
	var nVer = navigator.appVersion,
	nAgt = navigator.userAgent,
	browserName  = navigator.appName,
	fullVersion  = ''+parseFloat(navigator.appVersion),
	majorVersion = parseInt(navigator.appVersion,10),
	nameOffset,verOffset,ix;

	if ((verOffset=nAgt.indexOf("OPR/"))!=-1) {
		browserName = "Opera";
		fullVersion = nAgt.substring(verOffset+4);
	}
	else if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
		browserName = "Opera";
		fullVersion = nAgt.substring(verOffset+6);
		if ((verOffset=nAgt.indexOf("Version"))!=-1) 
			fullVersion = nAgt.substring(verOffset+8);
	}
	else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
		browserName = "Microsoft Internet Explorer";
		fullVersion = nAgt.substring(verOffset+5);
	}
	else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
		browserName = "Chrome";
		fullVersion = nAgt.substring(verOffset+7);
	}
	else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
		browserName = "Safari";
		fullVersion = nAgt.substring(verOffset+7);
		if ((verOffset=nAgt.indexOf("Version"))!=-1) 
			fullVersion = nAgt.substring(verOffset+8);
	}
	else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
		browserName = "Firefox";
		fullVersion = nAgt.substring(verOffset+8);
	}
	else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < (verOffset=nAgt.lastIndexOf('/')) ) {
		browserName = nAgt.substring(nameOffset,verOffset);
		fullVersion = nAgt.substring(verOffset+1);
		if (browserName.toLowerCase()==browserName.toUpperCase())
			browserName = navigator.appName;
	}

	if ((ix=fullVersion.indexOf(";"))!=-1)
		fullVersion=fullVersion.substring(0,ix);
	if ((ix=fullVersion.indexOf(" "))!=-1)
		fullVersion=fullVersion.substring(0,ix);

	majorVersion = parseInt(''+fullVersion,10);
	if (isNaN(majorVersion)) {
		fullVersion  = ''+parseFloat(navigator.appVersion); 
		majorVersion = parseInt(navigator.appVersion,10);
	}

	return(''
		+'Browser name  = '+browserName+'\n'
		+'Full version  = '+fullVersion+'\n'
		+'Major version = '+majorVersion
	);
}
console.log(myOS() + '\n' + myBrowser() + '\nDeveloper = Faisal+Shubhangi');
window.addEventListener('resize',()=>{
	console.clear();
	console.log(myOS() + '\n' + myBrowser() + '\nDeveloper = Faisal+Shubhangi');
});