function hasUniqueCharacters(input) {
	if (input.length === 0) return true;
	let strArr = input.split("");
	let obj = {};
	for (let i = 0; i < strArr.length; i++) {
		if (obj[strArr[i]]) {
			return false;
		}
		obj[strArr[i]] = true;
	}
	return true;
}

console.log(hasUniqueCharacters("ladre"));
