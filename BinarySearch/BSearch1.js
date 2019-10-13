function BSearch(arr, start, end, st) {
	if (end < start) {
		return -1;
	}
	let midIndex = Math.floor((start + end) / 2);
	if (st === arr[midIndex]) {
		return midIndex;
	}
	if (st > arr[midIndex]) {
		return BSearch(arr, midIndex + 1, end, st);
	}
	return BSearch(arr, start, midIndex - 1, st);
}

let arr = [-2, -1, 0, 3, 5, 9, 12];
let st = -1;

console.log("res= ", BSearch(arr, 0, 5, st));
