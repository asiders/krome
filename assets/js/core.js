// replace feather icon with svg equivalent ...
feather.replace();

function hidelogin(){
    var l = document.getElementsByClassName("log_in_wrap")[0];
    l.style.marginTop="-300px";
    hide_mob_sidenav();
}
function showlogin(){
    hideSignup();
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

function showSignup(){
    var S = document.getElementById("sign-up");
    hidelogin();
    S.style.height = "100%";
    document.getElementsByTagName("body")[0].style.overflow="hidden"; 
}
function hideSignup(){
    hidelogin();
    document.getElementsByTagName("body")[0].style.overflow="auto";
    var S = document.getElementById("sign-up");
    S.style.height = "0";
}