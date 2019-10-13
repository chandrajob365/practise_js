let count = 0;
const actualAPICall = () => {
	let debouncedCountDom = document.getElementById("debounce-count");
	let debouncedCount = debouncedCountDom.innerHTML || 0;
	console.log("Called ", count++);
	debouncedCountDom.innerHTML = parseInt(debouncedCount) + 1;
};

const debouncedAPICall = (fn, limit) => {
	let timer;
	return () => {
		timer && clearTimeout(timer);
		timer = setTimeout(fn, limit);
	};
};

const handleDebouncedScroll = debouncedAPICall(actualAPICall, 300);
// ================ XXXXXX =====================

const searchApi = () => {
	let debouncedCountDom = document.getElementById("search-api-called-count");
	let debouncedCount = debouncedCountDom.innerHTML || 0;
	// console.log("Called ", count++);
	debouncedCountDom.innerHTML = parseInt(debouncedCount) + 1;
};

const debouncedSearchApiCall = (fn, limit) => {
	let timer;
	return () => {
		timer && clearTimeout(timer);
		timer = setTimeout(fn, limit);
	};
};
const handleDebouncedInputEvent = debouncedSearchApiCall(searchApi, 300);

// ================ XXXXXX =====================

window.addEventListener("load", () => {
	const divBodyDom = document.getElementById("div-body");
	const inputBoxDom = document.getElementById("inputBox");
	divBodyDom.addEventListener("scroll", () => {
		let eventFiredCountDom = document.getElementById("show-event-fired-count");
		let eventFiredCount = eventFiredCountDom.innerHTML || 0;
		eventFiredCountDom.innerHTML = parseInt(eventFiredCount) + 1;
		handleDebouncedScroll();
	});
	inputBoxDom.addEventListener("input", () => {
		let eventFiredCountDom = document.getElementById("input-event-fired-count");
		let eventFiredCount = eventFiredCountDom.innerHTML || 0;
		eventFiredCountDom.innerHTML = parseInt(eventFiredCount) + 1;
		handleDebouncedInputEvent();
	});
});
