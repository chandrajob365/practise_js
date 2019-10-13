const expensiveCall = () => {
	console.log("expensiveCall Called");
};
const throttle = (fn, limit) => {
	let flag = true;
	return () => {
		if (flag) {
			fn();
			flag = false;
			setTimeout(() => {
				flag = true;
			}, limit);
		}
	};
};

const betterExpensiveCall = throttle(expensiveCall, 6000);

window.addEventListener("resize", betterExpensiveCall);

let counter = 0;
let getData = () => {
	console.log("Fetching data ... ", counter++);
};

let debounce = (fn, delay) => {
	let timer;
	return () => {
		clearTimeout(timer);
		timer = setTimeout(fn, delay);
	};
};

let debounceGetData = debounce(getData, 300);
