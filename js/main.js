var array = [];
var estarr = [];
var ipas;
var table = document.getElementById("table");
var len;
var ipaarr;
var maxarr;

function entry(letter, time, ipa, est, ect, lst, lct, newipa) {
	this.letter = letter;
	this.time = time;
	this.ipa = ipa;
	this.est = est;
	this.ect = ect;
	this.lst = lst;
	this.lct = lct;
	this.newipa = newipa;
}

function validateForm(form) {
	ipas = [];
	ipaarr = [];
	maxarr = [];
	var n = new entry(
		String.fromCharCode(array.length + 65),
		form["time"].value,
		form["ipa"].value.replace(/,/g, "").replace(/ /g, ""),
		0,
		0,
		0,
		0,
		0
	);
	for (var i = 0; i < n.ipa.length; i++) {
		ipas.push(n.ipa.charAt(i));
	}
	n.ipa = ipas;
	array.push(n);
	if (n.ipa != "") {
		if (n.ipa.length == 1) {
			n.est = parseInt(array[n.ipa[0].charCodeAt(0) - 65].ect);
		} else {
			for (a of n.ipa) {
				maxarr.push(parseInt(array[a.charCodeAt(0) - 65].ect));
				// n.lst += (parseInt(array[a.charCodeAt(0) - 65].lst) + parseInt(array[a.charCodeAt(0) - 65].time));
			}
			n.est = parseInt(Math.max.apply(Math, maxarr));
		}
		n.ect = parseInt(n.est) + parseInt(n.time);
		// n.lct = parseInt(n.lst) + parseInt(n.time);
	} else {
		n.est = 0;
		n.ect = parseInt(n.est) + parseInt(n.time);
		// n.lst = 0;
		// n.lct = parseInt(n.lst) + parseInt(n.time);
	}
	estarr.push(n.est)
	var newrow = table.insertRow(array.length);
	var c1 = newrow.insertCell(0);
	var c2 = newrow.insertCell(1);
	var c3 = newrow.insertCell(2);
	var c4 = newrow.insertCell(3);
	var c5 = newrow.insertCell(4);
	var c6 = newrow.insertCell(5);
	var c7 = newrow.insertCell(6);
	c1.innerHTML = n.letter;
	c2.innerHTML = n.time;
	c3.innerHTML = n.ipa;
	c4.innerHTML = n.est;
	c5.innerHTML = n.ect;
	c6.innerHTML = n.lst;
	c7.innerHTML = n.lct;
	return false;
}

function backwardPass() {
	var mlst = parseInt(Math.max.apply(Math, estarr));
	for (var j = array.length; j >= 1; j--) {
		table.deleteRow(j);
	}
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
