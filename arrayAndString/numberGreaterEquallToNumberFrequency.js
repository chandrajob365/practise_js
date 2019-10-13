let arr = [-1, -9, -2, 78, 0];
// arr = [7, 3, 16, 10];
arr = [-10, -3, -5, -6, 20];
function frequencyCounter(arr, freqMap) {
	for (let i = 0; i < arr.length; i++) {
		let j = 0;
		let elm = arr[i];
		while (j < arr.length) {
			if (arr[j] > elm && j !== i) {
				if (freqMap[elm] === undefined) {
					freqMap[elm] = 1;
				} else {
					freqMap[elm] += 1;
				}
			}
			j++;
		}
	}
	console.log("freqMap = ", freqMap);
	for (let key in freqMap) {
		if (
			freqMap[key] === Number(key) ||
			(Number(key) === 0 && freqMap[key] === 1)
		) {
			return key;
		}
	}
	return -1;
}

console.log(frequencyCounter(arr, {}));
