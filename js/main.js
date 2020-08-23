var array = [];
var ipas;
var table = document.getElementById("table");
var len;

function entry(letter, time, ipa) {
	this.letter = letter;
	this.time = time;
	this.ipa = ipa;
}

function validateForm(form) {
	ipas = [];
	var n = new entry(String.fromCharCode(array.length + 65), form["time"].value, form["ipa"].value.replace(/, /g, ""));
	for (var i = 0; i < n.ipa.length; i++) {
		ipas.push(n.ipa.charAt(i));
	}
	n.ipa = ipas;
	array.push(n);
	var newrow = table.insertRow(array.length);
	var c1 = newrow.insertCell(0);
	var c2 = newrow.insertCell(1);
	var c3 = newrow.insertCell(2);
	c1.innerHTML = n.letter;
	c2.innerHTML = n.time;
	c3.innerHTML = n.ipa;
	return false;
}

function fn() {
	// for (var j = 0; j < array.length; j++) {
	// 	// alert(array[j].ipa);
	// }
}

// entry = {
// 	letter: String.fromCharCode(array.length + 65),
// 	time: form["time"].value,
// 	ipa: form["ipa"].value.replace(/, /g, ""),
// 	parse: function() {
// 		len = this.ipa.length;
// 		for (var i = 0; i < len; i++) {
// 			ipas.push(this.ipa.charAt(i));
// 		}
// 		this.ipa = ipas;
// 	}
// }
