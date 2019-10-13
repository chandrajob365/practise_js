function foo() {
	console.log(this.a);
}
let obj = {
	a: 2
};
function bar() {
	foo.call(obj);
}
let a = 4;
bar();
// `bar` hard binds `foo`'s `this` to `obj`
// so that it cannot be overriden
bar.call(this);
