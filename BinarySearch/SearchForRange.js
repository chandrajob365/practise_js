var searchRange = function(nums, target) {
	// let startIndex = nums.indexOf(target);
	// let endIndex = nums.lastIndexOf(target);
	// return [startIndex, endIndex];
	let start = 0,
		end = nums.length - 1;
	const search = (arr, start, end, res) => {
		if (start > end) return [-1, -1];
		let mid = start + Math.floor((end - start) / 2);
		if (arr[mid] === target) {
			let left = mid;
			let right = mid;
			while (left >= 0 && arr[left] === target) left--;
			while (right <= arr.length - 1 && arr[right] === target) right++;
			return [left + 1, right - 1];
		}
		if (arr[mid] < target) {
			return search(arr, mid + 1, end, res);
		}
		return search(arr, start, mid - 1, res);
	};
	return search(nums, start, end, []);
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
