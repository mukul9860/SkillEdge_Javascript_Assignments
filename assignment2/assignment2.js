// function for clock... 
function myClock() {
    var dat = new Date();
    var hour = dat.getHours();
    var am_pm_hour = dat.getHours();
    var min = dat.getMinutes();
    var sec = dat.getSeconds();
    var am_pm = " PM";
    if (hour > 12) {
        hour = hour - 12;
    }
    if (am_pm_hour < 12) {
        am_pm = " AM"
    }
    // to add zero if < 10.
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    document.getElementById("clock").innerHTML = hour + " : " + min + " : " + sec + am_pm;
}
setInterval(function () { myClock() }, 1000);

// function for stop watch...
var ms = 0;
var sec = 0;
var mins  = 0;
var m = "";
var s = "";
var msec = "";
var time;
var display = document.getElementById("stopwatch");
function stopWatch(){
	ms++;
	if(ms > 99){
		ms = 0;
		sec++;
		if(sec > 59){
			sec = 0;
			mins++;
		}
	}
	m = mins ? mins > 9 ? mins : "0" + mins : "00";
	s = sec ? sec > 9 ? sec : "0" + sec : "00";
	msec = ms > 9 ? ms : "0" + ms;
	display.innerHTML = m+" : "+s+" : "+msec;
	period();
}
function period(){
	if(mins != 59){
		time = setTimeout(stopWatch, 10);
	}
}
function start(){
	period();
}
function stop(){
	clearTimeout(time);
}
function reset(){
	clearTimeout(time);
	display.innerHTML = "00 : 00 : 00";
	ms = 0; 
	sec = 0; 
	mins = 0;
	m = "";
	s = "";
	msec = "";
}