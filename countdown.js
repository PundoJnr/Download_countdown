function CountDown(secs)
{
var elem = document.getElementById("timer");

elem.innerHTML= "please wait " +secs+ " seconds";
    if (secs < 0){
        clearTimeout(timer);
        elem.innerHTML = "<h1>Your donwload is ready</h1><br>";
        elem.innerHTML += "<button type='button' class='btn btn-success btn-lg'> Download<span class=' glyphicon glyphicon-save'</button>";

    }
    secs--;
    var timer = setTimeout('CountDown('+secs+')',1000);
}
CountDown (5);