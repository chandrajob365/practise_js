let arr = [3, 34, 4, 12, 7, 1];
function hasSubSet(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] <= target) {
			let elm = arr[i];
			let j = 0;
			while (j < arr.length) {
				if (arr[i] + arr[j] === target) {
					return true;
				}
				j++;
			}
		}
	}
	return false;
}

console.log(hasSubSet(arr, 9));
