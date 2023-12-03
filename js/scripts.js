var mainNav = document.querySelector ("#mainNav");
var burgerBtn = document.querySelector("#burger button");
console.log(burgerBtn);
var signInUpButtons = document.querySelector("#sign-in-up-buttons");
var burgerBars = document.querySelector("#burger-bars");
var burgerX = document.querySelector("#burger-x");
 
var canYouSeeMainNav = false;
var canYouSeeButtons = false;
 
//select all section tags in the html document, add then to the sectionTags variable
//var sectionTags = document.querySelectorAll("section");
//function is for repeadly calling a repetative task, also just like python
function showNav(){
    console.log("button clicked");
    if(canYouSeeMainNav === false){
    mainNav.classList.add("showmainNav");
    signInUpButtons.classList.add("showSignIn");
    canYouSeeMainNav = true;
 
 
    //show x
    burgerX.classList.add("hide-burger-bars");
 
    //show burger x
    burgerBars.classList.remove("hide-burger-x");
 
 
}
else{
    mainNav.classList.remove("showmainNav");
    signInUpButtons.classList.remove("showSignIn");
 
        //show x
        burgerX.classList.remove("hide-burger-bars");
 
        //show burger x
        burgerBars.classList.add("hide-burger-x");
 
    canYouSeeMainNav = false;
}
}
 
burgerBtn.addEventListener("click", showNav);
//this calls a function, just like python
//showNav()
 
 
//Signin
 
var signInBtn = document.querySelector ("#sign-in-btn");
var signUpBtn = document.querySelector("#sign-up-btn")
var signInContainer = document.querySelector ("#signin-container");
var closeSignUpModalBtn = document.querySelector ("#close-sign-up-modal-btn");
 
function showSignInModal() {
    //console.log("click show");
    signInContainer.classList.add("show-signIn-container")
    mainNav.classList.remove("showmainNav");
    signInUpButtons.classList.remove("showSignIn")
 
}
 
function hideSignInModal(){
    signInContainer.classList.remove("show-signIn-container")
    //hide the navigation on open
   
}
 
signInBtn.addEventListener("click", showSignInModal);
closeSignUpModalBtn.addEventListener("click", hideSignInModal);
signInContainer.addEventListener("click", hideSignInModal);
signUpBtn.addEventListener("click", showSignInModal);
 
//Signup