function ask(question) {
	console.log(this.teacher, "has asked", question);
}

const teacher1 = {
	teacher: "Kyle"
};

const teacher2 = {
	teacher: "Manish"
};

ask.call(teacher1, "What is your name ?");
ask.call(teacher2, "What is your name ?");
