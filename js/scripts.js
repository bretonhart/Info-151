var mainNav = document.querySelector ("#mainNav");
 
var burgerBtn = document.querySelector("#hamburger-container button")
console.log(burgerBtn);
 
var canYouSeeMainNav = false;
 

function showNav(){
    console.log("button clicked");
    if(canYouSeeMainNav === false){
    mainNav.classList.add("showmainNav");
    canYouSeeMainNav = true;
 
}
else{
    mainNav.classList.remove("showmainNav");
    canYouSeeMainNav = false;
}
}
 
burgerBtn.addEventListener("click", showNav);
