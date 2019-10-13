function foo() {
	// return an arrow function
	return a => {
		// `this` is lexically adopted from foo
		// means this depends on call site of foo or this binding for foo which is obj2 / obj1
		console.log(this.a);
	};
}

var obj1 = {
	a: 2
};

var obj2 = {
	a: 3
};

let bar = foo.call(obj2);
bar();

function foo1() {
	setTimeout(() => {
		// `this` here is lexically adopted from `foo()`
		console.log(this.a);
	}, 100);
}

var obj3 = {
	a: 2
};

foo1.call(obj3); // 2

function foo2() {
	var context = this; // lexical capture of `this`
	setTimeout(function() {
		console.log(context.a);
	}, 100);
}

var obj4 = {
	a: 4
};

foo2.call(obj4); // 2
