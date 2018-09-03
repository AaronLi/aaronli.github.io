var ipadScreen = document.getElementById("ipad");
var project_screen  = document.getElementById("project_app");
var body = document.getElementsByTagName("BODY")[0];


function stop_displaying_ipad(){
    ipadScreen.style.display = "none";
    project_screen.style.display = "inline-block";
    body.style.overflowY = "scroll";
}
ipadScreen.addEventListener("webkitAnimationEnd", stop_displaying_ipad,false);
ipadScreen.addEventListener("animationend", stop_displaying_ipad,false);
ipadScreen.addEventListener("oanimationend", stop_displaying_ipad,false);