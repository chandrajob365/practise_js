const eventPhases = ["capture", "target", "bubble"];
window.addEventListener(
	"load",
	() => {
		document.querySelector("#grandparent").addEventListener(
			"click",
			event => {
				console.log(
					"grandparent clicked eventPhase :: ",
					eventPhases[event.eventPhase - 1],
					" target :: ",
					event.target,
					"  current target :: ",
					event.currentTarget
				);
			},
			true
		);

		document.querySelector("#parent").addEventListener(
			"click",
			event => {
				console.log(
					"parent clicked eventPhase :: ",
					eventPhases[event.eventPhase - 1],
					" target :: ",
					event.target,
					"  current target :: ",
					event.currentTarget
				);
			},
			false
		);

		document.querySelector("#child").addEventListener("click", event => {
			console.log(
				"child clicked eventPhase :: ",
				eventPhases[event.eventPhase - 1],
				" target :: ",
				event.target,
				"  current target :: ",
				event.currentTarget
			);
		});
	},
	true
);
