const backtotop = document.getElementById("back-to-top");

window.addEventListener("load" ,function () {
    backtotop.style.display ='none';
}) ;


// Call one function to check window height when scroll
window.addEventListener('scroll',checkheight);

//Check the windows height
function checkheight() {
    if (window.scrollY > 200) {
        backtotop.style.display ='block';
    }else{
        backtotop.style.display ='none';
    }
}

//Scroll to top functionality
backtotop.addEventListener('click' , function () {
    window.scrollTo({
     top: 0, 
     behavior: 'smooth' 
    });
});

