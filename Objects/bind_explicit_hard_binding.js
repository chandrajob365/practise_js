function ask(something) {
	console.log(this.a, something);
	return this.a + something;
}

const obj = {
	a: 2
};

function bind(fn, obj) {
	return function() {
		return fn.apply(obj, arguments);
	};
}

// const bind2 = (fn, obj) => () => fn.apply(obj, arguments);
const bar = bind(ask, obj);
const b = bar(3);
console.log(b);
