// replace feather icon with svg equivalent ...
feather.replace();

function hidelogin(){
    var l = document.getElementsByClassName("log_in_wrap")[0];
    l.style.marginTop="-300px";
    hide_mob_sidenav();
}
function showlogin(){
    var l = document.getElementsByClassName("log_in_wrap")[0];
    l.style.marginTop="0";
    hide_mob_sidenav();
}
function show_mob_login(){
    if(document.getElementById("login_toogle").innerHTML=="0"){
        document.getElementsByClassName("mob_login")[0].style.marginTop="0px";
        document.getElementById("login_toogle").innerHTML="1";
    }else{
        document.getElementsByClassName("mob_login")[0].style.marginTop="-300px";
        document.getElementById("login_toogle").innerHTML="0";
    }
}
function hide_mob_sidenav(){
    document.getElementsByClassName("mob_login")[0].style.marginTop="-300px";
}