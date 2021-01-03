$("#settings").hide();

$(documnet).ready(function() {
    alert("Does this work?");
});

let settings = document.getElementById("settings");
settings.addEventListener("click", function() {
    alert("Hello world");
});