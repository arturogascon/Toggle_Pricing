
function changeToggle() {
    let toggle = document.getElementById("toggle");
    let h3 = document.getElementsByClassName("h3");
    if(toggle.style.float!="right"){
        toggle.style.float = "right";
        h3[0].innerHTML ="<span>$</span>19.99";
        h3[1].innerHTML ="<span>$</span>24.99";
        h3[2].innerHTML ="<span>$</span>39.99";
    }
    else{    
        toggle.style.float ="none";
        h3[0].innerHTML ="<span>$</span>199.99";
        h3[1].innerHTML ="<span>$</span>249.99";
        h3[2].innerHTML ="<span>$</span>399.99";
    }
}