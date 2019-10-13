const matchStringEdit = (str1, str2) => {
	let count = 0;
	if (Math.abs(str1.length - str2.length) > 1) return false;
	let len = str1.length > str2.length ? str1.length : str2.length;
	for (let i = 0; i < len; i++) {
		if (str1[i] !== str2[i]) {
			count++;
		}
		if (count > 1) {
			return false;
		}
	}
	return true;
};

console.log(matchStringEdit("pale", "balq"));
