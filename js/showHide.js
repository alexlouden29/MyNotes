function showHide(questionID, buttonID){
	var x = document.getElementById(questionID);
	var b = document.getElementById(buttonID);
	if (x.style.display === "block") {
        x.style.display = "none";
        b.innerHTML = "Show Answer";
    } else {
        x.style.display = "block";
        b.innerHTML = "Hide Answer";
    }
}