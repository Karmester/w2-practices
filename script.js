function buttonClicked(event) {
	//console.log(event.target.classList);
	//console.log(event.target);
	//event.target.classList.toggle("clicked");
	const randomText = "Ezt vajon kilogolja-e?";
	const fastLogResult = fastLog("Ezt a szöveget szeretném kiloggoltatni");
	fastLog(randomText);
	console.log(fastLogResult);
	document.getElementById("about").classList.add("clicked-too");
}

function loadEvent() {
	//console.log("the page has loaded");
	document.getElementById("menu-btn").addEventListener("click", buttonClicked);
}
function fastLog(text) {
	console.log(text);
	return "text logged muhaha";
}

window.addEventListener("load", loadEvent);
