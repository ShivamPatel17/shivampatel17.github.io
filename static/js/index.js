$(document).ready(function(){

    $("#workexperience").click(function(){
        window.location.replace("/workexperience");
    })
    $("#aboutme").click(function(){
        window.location.replace("/aboutme");
    })
    
      
      
});

function toggleExperiences() {
    document.getElementById("education").classList.toggle("show");

    document.getElementById("career").classList.toggle("show");
    console.log("toggleExperiences()")
}