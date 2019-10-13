let count = 0;
const actualAPICall = () => {
	console.log("Called ", count++);
	let throttledCountDom = document.getElementById("throttle-count");
	let throttledCount = throttledCountDom.innerHTML || 0;
	throttledCountDom.innerHTML = parseInt(throttledCount) + 1;
};

const throttledAPICall = (fn, limit) => {
	let flag = true;
	return () => {
		if (flag) {
			fn();
			flag = false;
			setTimeout(() => (flag = true), limit);
		}
	};
};

const handleThrottledScrollEvent = throttledAPICall(actualAPICall, 300);

window.addEventListener("load", () => {
	const divBodyDom = document.getElementById("div-body");
	divBodyDom.addEventListener("scroll", () => {
		let eventFiredCountDom = document.getElementById("show-event-fired-count");
		let eventFiredCount = eventFiredCountDom.innerHTML || 0;
		eventFiredCountDom.innerHTML = parseInt(eventFiredCount) + 1;
		handleThrottledScrollEvent();
	});
});
