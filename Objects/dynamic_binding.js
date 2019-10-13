function ask(question) {
	console.log(this.teacher, "has asked", question);
}

const teacher1 = {
	teacher: "Kyle",
	ask
};

const teacher2 = {
	teacher: "Manish",
	ask
};

teacher1.ask("what's your name ?");
teacher2.ask("what's your name ?");
