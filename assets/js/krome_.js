// replace feather icon with svg equivalent ...
feather.replace();

function isHidden(e){
    var style = window.getComputedStyle(e);
    return(style.display==='none');
}

function showmenu(){
	var e = document.getElementsByClassName("dropper")[0];
	if(e.style.display != "block"){
		e.style.display = "block";
		e.style.height = "130px";
	}else{
		e.style.height = 0;
		e.style.display = "none";
	}
	return;
}
function dropperCLR(){
    var e = document.getElementsByClassName("dropper")[0];
	e.style.height = 0;
	e.style.display = "none";
}
function resized(){
	dropperCLR();
    pagescrolling();
}
function pagescrolling(){
    var A = $('#navbar-color:visible').visible();
    var S = $('#navbar-search:visible').visible();
    var B = $('#search-show').visible();
    var C = document.getElementById("search1");
    if(A == true){       
        document.getElementById("navbar").style.backgroundColor = "rgba(0,0,0,0)";
        
    }else{ document.getElementById("navbar").style.backgroundColor = "#630480";
          
    } 
    if(S==true){
        C.style.height ="0";
    }else{
        C.style.height = "43px";
    }
}

function timeoutnextbg(){
    var imglist = document.getElementsByClassName("ke-item");
    var total = document.getElementById("kromevent-slide-img-count").innerHTML;
    total = Number(total)
    var cur = document.getElementById("ke-current").innerHTML;
    cur = Number(cur);
    cur = (cur + 1)%total;
    document.getElementById("ke-current").innerHTML = cur;
    var lp = document.getElementsByClassName("banner");
    lp[0].style.background = "url(" + imglist[cur].innerHTML  + ") no-repeat center center fixed";
    lp[0].style.backgroundSize= "cover";
    var lw = document.getElementsByClassName("banner-wrapper");
    if (cur+1==total){
        lw[0].style.backgroundColor = "rgba(219, 52, 205,0)";
        return;
    };
    lw[0].style.backgroundColor = "rgba(219, 52, 205,0.4)";
}

function collapse(e){
    var S = e.href;
    alert("Hello World");
}

function showSignin(){
    dropperCLR();
    var S = document.getElementById("sign-in");
    document.getElementById("sign-up").style.height="0";
    S.style.height = "100%";
    document.getElementsByTagName("body")[0].style.overflow="hidden"; 
}
function hideSignin(){
    dropperCLR();
    document.getElementsByTagName("body")[0].style.overflow="auto";
    var S = document.getElementById("sign-in");
    S.style.height = "0";
}
function showSignup(){
    dropperCLR();
    var S = document.getElementById("sign-up");
    document.getElementById("sign-in").style.height ="0";
    S.style.height = "100%";
    document.getElementsByTagName("body")[0].style.overflow="hidden"; 
}
function hideSignup(){
    dropperCLR();
    document.getElementsByTagName("body")[0].style.overflow="auto";
    var S = document.getElementById("sign-up");
    S.style.height = "0";
}

function transformicon(e){
    var all = document.querySelectorAll("#"+e.id+" .icon");
    var s =e.href;
    s=s.substring(s.indexOf('#'));
//    var A = $(s).visible();
    s=s.substr(1);
    var el = document.getElementById(s);
    if(isHidden(el)){
        all[0].style="transform: rotate(-180deg);";
    }else{
        all[0].style="transform: rotate(0deg);";
    }    
    
}
function cardhovered(e){
    var chnodes = e.childNodes;
    var i;
    for (i = 0; i < chnodes.length; i++) {
        if(chnodes[i].className=="left-shadow" || chnodes[i].className=="right-shadow"){
//        alert(chnodes.length);
            chnodes[i].style.boxShadow = "2px 2px 2px 0 rgba(100,100,100,0.8)";
        }
    }
}
function cardunhovered(e){
    var chnodes = e.childNodes;
    var i;
    for (i = 0; i < chnodes.length; i++) {
        if(chnodes[i].className=="left-shadow" || chnodes[i].className=="right-shadow"){
//        alert(chnodes.length);
            chnodes[i].style.boxShadow = "2px 20px 10px 0 rgba(100,100,100,0.8)";
        }
    }
}
function showfilter(){
    var e = document.getElementsByClassName('accordion-wrapper');
    e[0].style.width ='300px';
}
function closesidenav(){
    var e = document.getElementsByClassName("accordion-wrapper");
    e[0].style.width=0;
}