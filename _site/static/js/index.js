$(document).ready(function(){

    $("#workexperience").click(function(){
        window.location.replace("/workexperience");
    })
    $("#aboutme").click(function(){
        window.location.replace("/aboutme");
    })
    
      
      
});
var up0 = false;
function toggleExperiences() {
    document.getElementById("education").classList.toggle("show");
    document.getElementById("career").classList.toggle("show");


    var arrows = document.getElementsByClassName("arrow-img");
    var size = arrows.length;
    var arrow = arrows[0];
    if(!up0){
        arrow.style.transform = "scaleY(-1)";
    }else{
        arrow.style.transform = "scaleY(1)";
    }
    up0 = !up0;
}


var up1 = false;
function toggleProjects() {
    document.getElementById("projects").classList.toggle("show");


    var arrows = document.getElementsByClassName("arrow-img");
    var size = arrows.length;
    var arrow = arrows[1];
    if(!up1){
        arrow.style.transform = "scaleY(-1)";
    }else{
        arrow.style.transform = "scaleY(1)";
    }
    up1 = !up1;
}
var up2 = false;
function togglePodcasts() {
    document.getElementById("podcasts-dd").classList.toggle("show");


    var arrows = document.getElementsByClassName("arrow-img");
    var size = arrows.length;
    var arrow = arrows[2];
    if(!up2){
        arrow.style.transform = "scaleY(-1)";
    }else{
        arrow.style.transform = "scaleY(1)";
    }
    up2 = !up2;
}