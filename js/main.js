function mctsingular(form) {
	var q = form["Q"].value;
	var m = form["m"].value;
	var c = form["c"].value;
	var tf = form["tf"].value;
	var ti = form["ti"].value;
	var result = nerdamer.solve(q.toString()+"="+m.toString()+"*"+c.toString()+"*"+
	"("+tf.toString()+"-"+ti.toString()+")", "x")
	alert(result);
}
