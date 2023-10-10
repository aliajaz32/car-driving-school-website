console.log("ali");
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < 9; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > 4) {
        myIndex = 1
    }
    x[myIndex-1].style.display = "block";  
    
}
setInterval(carousel, 3000);