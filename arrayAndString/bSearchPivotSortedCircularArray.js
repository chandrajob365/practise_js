function findPivot(arr) {
	const findPivotRec = (arr, low, high) => {
		if (low === high || low > high) return 0;
		let mid = Math.floor((low + high) / 2);
		if (mid < high && arr[mid] > arr[mid + 1]) return mid;
		if (mid > low && arr[mid] < arr[mid - 1]) return mid - 1;
		if (arr[mid] >= arr[low]) {
			return findPivotRec(arr, mid + 1, high);
		}
		return findPivotRec(arr, low, mid - 1);
	};
	return findPivotRec(arr, 0, arr.length - 1);
}

let arr = [2, 3, 4, 5, 6, 7, 8, 9, 1];
console.log(findPivot(arr));
