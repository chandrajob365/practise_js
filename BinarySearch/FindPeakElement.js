var findPeakElement = function(nums) {
	let start = 0,
		end = nums.length - 1;
	const getPeakIndex = (nums, start, end) => {
		if (start === end) return start;
		let mid = start + Math.floor((end - start) / 2);
		if (nums[mid] > nums[mid + 1]) {
			return getPeakIndex(nums, start, mid);
		}
		return getPeakIndex(nums, mid + 1, end);
	};
	return getPeakIndex(nums, start, end);
};

let nums = [1, 2, 1, 3, 5, 6, 4];
console.log(findPeakElement(nums));
