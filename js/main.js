var mctsingularresult = document.getElementById("mctsingularresult");
var mctresult = document.getElementById("mctresult");

function mctsingular(form) {
	var q = form["Q"].value;
	var m = form["m"].value;
	var c = form["c"].value;
	var tf = form["tf"].value;
	var ti = form["ti"].value;
	var result = nerdamer.solve(q.toString()+"="+m.toString()+"*"+c.toString()+"*"+
	"("+tf.toString()+"-"+ti.toString()+")", "x");
	mctsingularresult.innerHTML = result.toString();
	event.preventDefault();
	// mctsingularresult.innerHTML = "Fuck.";
}

function mct(form) {
	var m = form["m"].value;
	var c = form["c"].value;
	var tf = form["tf"].value;
	var ti = form["ti"].value;
	var m2 = form["m2"].value;
	var c2 = form["c2"].value;
	var tf2 = form["tf2"].value;
	var ti2 = form["ti2"].value;
	var result = nerdamer.solve(m.toString()+"*"+c.toString()+"*"+
	"("+tf.toString()+"-"+ti.toString()+")"+"="+m2.toString()+"*"+c2.toString()+"*"+
	"("+tf2.toString()+"-"+ti2.toString()+")", "x");
	mctresult.innerHTML = result.toString();
	event.preventDefault();
}
