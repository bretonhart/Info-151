Fancybox.bind();
const container = document.querySelector("#myCarousel");
const options = { infinite: true };
new Carousel(container, options);
var mainNav = document.querySelector ("#mainNav");
var burgerBtn = document.querySelector("#burger button");
console.log(burgerBtn);
var signInUpButtons = document.querySelector("#sign-in-up-buttons");
var burgerBars = document.querySelector("#burger-bars");
var burgerX = document.querySelector("#burger-x");
 
var canYouSeeMainNav = false;
var canYouSeeButtons = false;
 

function showNav(){
    console.log("button clicked");
    if(canYouSeeMainNav === false){
    mainNav.classList.add("showmainNav");
    signInUpButtons.classList.add("showSignIn");
    canYouSeeMainNav = true;
 
 

    burgerX.classList.add("hide-burger-bars");
 

    burgerBars.classList.remove("hide-burger-x");
 
 
}
else{
    mainNav.classList.remove("showmainNav");
    signInUpButtons.classList.remove("showSignIn");
 

        burgerX.classList.remove("hide-burger-bars");
 

        burgerBars.classList.add("hide-burger-x");
 
    canYouSeeMainNav = false;
}
}
 
burgerBtn.addEventListener("click", showNav);

 
var signInBtn = document.querySelector ("#sign-in-btn");
var signUpBtn = document.querySelector("#sign-up-btn")
var signInContainer = document.querySelector ("#signin-container");
var closeSignUpModalBtn = document.querySelector ("#close-sign-up-modal-btn");
 
function showSignInModal() {
    signInContainer.classList.add("show-signIn-container")
    mainNav.classList.remove("showmainNav");
    signInUpButtons.classList.remove("showSignIn")
 
}
 
function hideSignInModal(){
    signInContainer.classList.remove("show-signIn-container")

   
}
 
signInBtn.addEventListener("click", showSignInModal);
closeSignUpModalBtn.addEventListener("click", hideSignInModal);
signInContainer.addEventListener("click", hideSignInModal);
signUpBtn.addEventListener("click", showSignInModal);
 