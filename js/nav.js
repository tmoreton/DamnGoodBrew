function openNav(){
	document.getElementById("nav").classList.remove("hidden-mobile")
	document.getElementById("open-nav").classList.add("hidden")
	document.getElementById("close-nav").classList.remove("hidden")
}

function closeNav(){
	document.getElementById("nav").classList.add("hidden-mobile")
	document.getElementById("open-nav").classList.remove("hidden")
	document.getElementById("close-nav").classList.add("hidden")
}