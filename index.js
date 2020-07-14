var base;
var Pause = 0;
function playfunc()
{
    Pause = Pause + 1;
    if(Pause == 1)
    {
        play();
        document.getElementById("Play").classList.add("pause");
    }
    else if(Pause == 2)
    {
        document.getElementById("Play").classList.remove("pause");
        Pause = 0;
        stop();
    }
}
function play()
{
    base = setInterval(timer,10);
}
function stop()
{
    clearInterval(base)
}
var millisecond = 0;
var hour = 0;
var minute = 0;
var second = 0;

var millisecondval = 0
var hourval = 0;
var minuteval = 0;
var secondval = 0;

function timer()
{
    millisecondval = updatetime(millisecond)
    secondval = updatetime(second);
    minuteval = updatetime(minute);
    hourval = updatetime(hour);

    millisecond = ++millisecond
    if(millisecond == 100)
    {
        millisecond = 0;
        second = ++second

    }
    if(second == 60)
    {
        second = 0
        minute = ++minute;
    }
    if(minute == 60)
    {
        minute = 0;
        hour = ++hour
    }
    document.getElementById("millisecond").innerHTML = millisecondval
    document.getElementById("second").innerHTML = secondval
    document.getElementById("minute").innerHTML = minuteval
    document.getElementById("hour").innerHTML = hourval


}
function updatetime(i)
{
    if(i < 10)
    {
        i = "0" + i
    }
    return i;
}
function reset()
{
    var millisecond = 0;
    var hour = 0;
    var minute = 0;
    var second = 0;   
    document.getElementById("millisecond").innerHTML = "00"
    document.getElementById("second").innerHTML = "00"
    document.getElementById("minute").innerHTML = "00"
    document.getElementById("hour").innerHTML = "00"
}
function stopfunc()
{
    clearInterval(base);
}