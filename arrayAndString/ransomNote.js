function checkMagazine(magazine, note) {
	if (note.length > magazine.length) {
		console.log("No");
		return;
	}
	let noteElmMap = {};
	let magElmMap = {};
	note.forEach(elm => {
		noteElmMap[elm] = noteElmMap[elm] ? noteElmMap[elm] + 1 : 1;
	});

	magazine.forEach(elm => {
		magElmMap[elm] = magElmMap[elm] ? magElmMap[elm] + 1 : 1;
	});

	console.log(noteElmMap);
	console.log(magElmMap);
	for (let key in noteElmMap) {
		if (noteElmMap[key] > magElmMap[key]) {
			console.log("No");
			return;
		}
	}
	console.log("Yes");
}

let note = "elo lxkvg bg mwz clm w".split(" ");
let magzine = "apgo clm w lxkvg mwz elo bg elo lxkvg elo apgo apgo w elo bg".split(
	" "
);
checkMagazine(magzine, note);
