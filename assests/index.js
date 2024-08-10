const backtotop = document.getElementById("back-to-top");

const servicecontent1 = document.getElementById("service-content-1");
const servicecontent2 = document.getElementById("service-content-2");
const servicecontent3 = document.getElementById("service-content-3");

const servicetab1 = document.getElementById("service-tab-1");
const servicetab2 = document.getElementById("service-tab-2");
const servicetab3 = document.getElementById("service-tab-3");

window.addEventListener("load" ,function () {
    backtotop.style.display ='none';
    servicecontent1.style.display = "block";
    servicecontent2.style.display = "none";
    servicecontent3.style.display = "none";

    
}) ;


//Scroll to top functionality Start
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

backtotop.addEventListener('click' , function () {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth' 
    });
});
//Scroll to top functionality End


// Service Tab Functionality Start
servicetab1.addEventListener("click" , function () {
    servicecontent1.style.display = "block";
    servicecontent2.style.display = "none";
    servicecontent3.style.display = "none";

    servicetab1.classList.add("active");
    servicetab2.classList.remove("active");
    servicetab3.classList.remove("active");

});

servicetab2.addEventListener("click" , function () {
    servicecontent2.style.display = "block";
    servicecontent1.style.display = "none";
    servicecontent3.style.display = "none";

    servicetab2.classList.add("active");
    servicetab1.classList.remove("active");
    servicetab3.classList.remove("active");
});

servicetab3.addEventListener("click" , function () {
    servicecontent3.style.display = "block";
    servicecontent1.style.display = "none";
    servicecontent2.style.display = "none";

    servicetab3.classList.add("active");
    servicetab1.classList.remove("active");
    servicetab2.classList.remove("active");
});
// Service Tab Functionality End


// Testimonaial Functionality Start
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("testimonial-item");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
 
  slides[slideIndex-1].style.display = "block";  
}
// Testimonaial Functionality End