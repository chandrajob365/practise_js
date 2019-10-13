let arr = [2, 4, 8, 7, 7, 9, 3];
// arr = [2, 1, 8];
function maxDiff(arr) {
	let maxDiff = null;
	for (let i = 0; i < arr.length - 1; i++) {
		let j = i - 1,
			k = i + 1;
		let smallestLeft = null;
		let smallestRight = null;
		while (j >= 0) {
			if (arr[i] > arr[j]) {
				smallestLeft = arr[j];
				break;
			}
			j--;
		}
		while (k < arr.length) {
			if (arr[k] < arr[i]) {
				smallestRight = arr[k];
				break;
			}
			k++;
		}
		smallestLeft = smallestLeft || 0;
		smallestRight = smallestRight || 0;
		let currentMaxDiff = Math.abs(smallestRight - smallestLeft);
		if (!maxDiff || currentMaxDiff > maxDiff) {
			maxDiff = currentMaxDiff;
		}
	}
	if (!maxDiff) return 0;
	return maxDiff;
}

console.log(maxDiff(arr));
