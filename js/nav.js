// function closeNav(){
// 	document.getElementById("nav").classList.add("hidden-mobile")
// 	document.getElementById("open-nav").classList.remove("hidden")
// 	document.getElementById("close-nav").classList.add("hidden")
// }

// function openNav(){
// 	document.getElementById("nav").classList.remove("hidden-mobile")
// 	document.getElementById("open-nav").classList.add("hidden")
// 	document.getElementById("close-nav").classList.remove("hidden")
// }

$('#open-nav').click(function(){
	$('#nav').removeClass("hidden-mobile");
	$('#open-nav').addClass("hidden");
	$('#close-nav').removeClass("hidden");
});

$('#close-nav').click(function(){
	$('#nav').addClass("hidden-mobile");
	$('#open-nav').removeClass("hidden");
	$('#close-nav').addClass("hidden");
});

