function partition(arr, start, end) {
	let pivot = arr[end];
	let pIndex = start;
	for (let i = start; i < end; i++) {
		if (arr[i] < pivot) {
			let temp = arr[pIndex];
			arr[pIndex] = arr[i];
			arr[i] = temp;
			pIndex++;
		}
	}
	arr[end] = arr[pIndex];
	arr[pIndex] = pivot;
	return pIndex;
}

function quickSort(arr, start, end) {
	if (start < end) {
		let pIndex = partition(arr, start, end);
		quickSort(arr, start, pIndex - 1);
		quickSort(arr, pIndex + 1, end);
	}
}

let arr = [7, 2, 1, 6, 8, 5, 3, 4, 10, 20, 100, -2, -9, 0, 0, 3];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
