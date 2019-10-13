const isSubString = (str1, str2) => {
	if (str1.length !== str2.length) return false;
	let len = str1.length;
	let startIndex = str2.indexOf(str1[0]);
	let subStringLength = len - startIndex;
	let x1 = str2.slice(startIndex, len);
	let x2 = str1.slice(0, subStringLength);
	let y1 = str2.slice(0, startIndex);
	let y2 = str1.slice(subStringLength, len);
	if (x1 === x2 && y1 === y2) return true;
	return false;
};

console.log(isSubString("waterbottle", "erbottelewat"));
