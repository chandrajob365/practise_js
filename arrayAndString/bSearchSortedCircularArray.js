function search(arr, key) {
	const bSearchRec = (arr, key, low, high) => {
		if (low > high) return -1;
		let mid = Math.floor((high + low) / 2);
		if (arr[mid] == key) return mid;
		if (arr[low] <= arr[mid]) {
			if (key >= arr[low] && key <= arr[mid]) {
				return bSearchRec(arr, key, low, mid - 1);
			}
			return bSearchRec(arr, key, mid + 1, high);
		}
		if (key <= arr[high] && key >= arr[mid]) {
			return bSearchRec(arr, key, mid + 1, high);
		}
		return bSearchRec(arr, key, low, mid - 1);
	};
	return bSearchRec(arr, key, 0, arr.length - 1);
}

let arr = [4, 5, 6, 7, 8, 9, 1, 2, 3];
console.log(search(arr, 3));
