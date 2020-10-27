$(document).ready(function(){

    $("#workexperience").click(function(){
        window.location.replace("/workexperience");
    })
    $("#aboutme").click(function(){
        window.location.replace("/aboutme");
    })
    
      
      
});
var up = false;
function toggleExperiences() {
    document.getElementById("education").classList.toggle("show");
    document.getElementById("career").classList.toggle("show");


    var arrows = document.getElementsByClassName("arrow-img");
    var size = arrows.length;
    for(var i = 0; i<size; i++){
        var arrow = arrows[i];
        if(!up){
            arrow.style.transform = "scaleY(-1)";
        }else{
            arrow.style.transform = "scaleY(1)";
        }
    }
    up = !up;
}