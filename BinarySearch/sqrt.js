function sqrt(num) {
	if (num < 2) return num;
	let start = 0,
		end = Math.floor(num / 2),
		res = 0;
	const search = (start, end, num) => {
		if (start > end) {
			return -1;
		}
		let mid = Math.floor((start + end) / 2);
		if (mid * mid === num) {
			res = mid;
			return mid;
		}
		if (mid * mid < num) {
			res = mid;
			return search(mid + 1, end, num);
		}
		if (mid * mid > num) {
			return search(start, mid - 1, num);
		}
	};
	search(start, end, num);
	return res;
}

console.log(sqrt(-1));
