// function curry(...arg) {
// 	const curryReturn = (...arg2) => {
// 		return curry(...arg, ...arg2);
// 	};
// 	const total = arg.reduce(sum);
// 	curryReturn.value = total;
// 	return curryReturn;
// }

function curry(fn) {
	return function curryInner(...arg) {
		const curryReturn = (...arg2) => {
			return curryInner(...arg, ...arg2);
		};
		const total = arg.reduce(fn);
		curryReturn.value = total;
		return curryReturn;
	};
}
const sum = (a, b) => a + b;
const _sum = curry(sum);

console.log(_sum(1)(2)(3).value);
console.log(_sum(1, 2, 3).value);
console.log(_sum(1)(2, 3).value);
console.log(_sum(1)(2, 3)(4).value);
console.log(_sum(1)(2, 3)(4, 5).value);
console.log("=======================");

const mul = (a, b) => a * b;
const _mul = curry(mul);

console.log(_mul(1)(2)(3).value);
console.log(_mul(1, 2, 3).value);
console.log(_mul(1)(2, 3).value);
console.log(_mul(1)(2, 3)(4).value);
console.log(_mul(1)(2, 3)(4, 5).value);
