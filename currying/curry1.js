function sum(a) {
	let sum = a || 0;
	function closureFunc() {
		console.log("here");
		// console.log(arguments.length);
	}
	closureFunc.toString = () => sum;
	return !a || closureFunc();
}

console.log(sum());
