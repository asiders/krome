// replace feather icon with svg equivalent ...
feather.replace();

function hidelogin(){
    var l = document.getElementsByClassName("log_in_wrap")[0];
    l.style.marginTop="-300px";
}
function showlogin(){
    var l = document.getElementsByClassName("log_in_wrap")[0];
    l.style.marginTop="0";
}