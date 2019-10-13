var search = function(nums, target) {
	let start = 0,
		end = nums.length - 1;
	const circularRotatedSearch = (arr, start, end, target) => {
		if (start > end) {
			return -1;
		}
		let mid = start + Math.floor((end - start) / 2);
		if (arr[mid] === target) return mid;
		if (arr[mid] < arr[end]) {
			if (target > arr[mid] && target <= arr[end]) {
				return circularRotatedSearch(nums, mid + 1, end, target);
			}
			return circularRotatedSearch(nums, start, mid - 1, target);
		} else {
			if (target >= arr[start] && target < arr[mid]) {
				return circularRotatedSearch(nums, start, mid - 1, target);
			}
			return circularRotatedSearch(nums, mid + 1, end, target);
		}
	};
	return circularRotatedSearch(nums, start, end, target);
};

let nums = [4, 5, 6, 7, 0, 1, 2],
	target = 0; //3;
console.log(search(nums, target));
