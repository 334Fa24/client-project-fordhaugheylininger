//function to x out of pop up
function popUp() {
    document.getElementById("banner").style.display = "none";
}

function mobnav() {
    var x = document.getElementById("mob-nav");
    if (x.style.display === "block") {
        x.style.display = "none";
    } 
    else {
        x.style.display = "block";
    }
}