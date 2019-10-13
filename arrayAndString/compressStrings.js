const compressStrings = input => {
	let updatedStr = "";
	let latestCharcter = "";
	let count = 1;
	for (let i = 0; i < input.length; i++) {
		latestCharcter = input[i];
		if (latestCharcter !== input[i + 1]) {
			updatedStr += latestCharcter + count;
			count = 1;
		} else {
			count++;
		}
	}
	return updatedStr;
};

console.log(compressStrings("acccacbbbdda"));
