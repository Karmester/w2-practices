function buttonClicked(event) {
	event.target.classList.toggle("clicked");
	document.getElementById("nav").classList.toggle("clicked");
}

function loadEvent() {
	console.log("the page has loaded");

	document.getElementById("menu-btn").addEventListener("click", buttonClicked);
}
window.addEventListener("load", loadEvent);
