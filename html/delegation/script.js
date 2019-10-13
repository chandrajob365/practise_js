window.addEventListener("load", () => {
	console.log("Here");
	document.querySelector("#category").addEventListener("click", e => {
		console.log(e.target.innerHTML, " clicked");
		window.location.href = "./" + e.target.id;
	});
	document.querySelector("#form").addEventListener("keyup", e => {
		console.log(e);
		if (e.target.dataset.uppercase !== undefined) {
			e.target.value = e.target.value.toUpperCase();
		}
	});
});
