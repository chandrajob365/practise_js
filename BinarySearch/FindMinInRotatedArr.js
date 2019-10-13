function findMin(nums) {
	if (!nums || !nums.length) return 0;
	if (nums.length < 2) return nums[0];
	if (nums.length === 2) return Math.min(nums[0], nums[1]);
	if (nums[nums.length - 1] > nums[0]) return nums[0];
	let start = 0,
		end = nums.length - 1,
		pivot;
	const getPivot = (nums, start, end) => {
		if (start === end) return nums[start];
		if (start + 1 === end) return Math.min(nums[start], nums[end]);
		let pivot = start + Math.floor((end - start) / 2);
		if (nums[pivot] < nums[end]) {
			return getPivot(nums, start, pivot);
		}
		return getPivot(nums, pivot, end);
	};
	return getPivot(nums, start, end);
}

console.log(findMin([3, 4, 5, 0, 2]));
console.log(findMin([3, 4, 5]));
