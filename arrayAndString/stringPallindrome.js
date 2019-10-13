function checkStringPallindrome(str1, str2) {
	if (str1.length !== str2.length) return false;
	let len = str1.length - 1;
	for (let i = 0; i < len; i++) {
		if (str1[i] !== str2[len - i]) return false;
	}
	return true;
}

console.log(checkStringPallindrome("apl", "lpds"));
let f = [1, 2, 3, 4, 5];
f.some(elm => {
	if (elm > 1) {
		f.length = 0;
	}
	console.log(elm);
});
