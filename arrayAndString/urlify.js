const urlify = input =>
	input
		.split("")
		.map(elm => {
			if (elm === " ") {
				return "%20";
			}
			return elm;
		})
		.join("");

console.log(urlify("This is it   "));
