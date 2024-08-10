const backtotop = document.getElementById("back-to-top");

const servicecontent1 = document.getElementById("service-content-1");
const servicecontent2 = document.getElementById("service-content-2");
const servicecontent3 = document.getElementById("service-content-3");

const servicetab1 = document.getElementById("service-tab-1");
const servicetab2 = document.getElementById("service-tab-2");
const servicetab3 = document.getElementById("service-tab-3");

const servicedetailtab1 = document.getElementById("service-detail-tab-1");
const servicedetailtab2 = document.getElementById("service-detail-tab-2");
const servicedetailtab3 = document.getElementById("service-detail-tab-3");

const servicedetails1 = document.getElementById("service-details-1");
const servicedetails2 = document.getElementById("service-details-2");
const servicedetails3 = document.getElementById("service-details-3");

const mobilemenu = document.getElementById("mobile-menu");
const mobilemenuList = document.getElementById("mobile-menu-list");

// const filterData = document.querySelector(".project-data");
// const all = document.getElementById("all");
// const design = document.getElementById("design");
// const development = document.getElementById("development");
// const marketing = document.getElementById("marketing");
// const seo = document.getElementById("seo");


window.addEventListener("load" ,function () {
    backtotop.style.display ='none';

    servicecontent1.style.display = "block";
    servicecontent2.style.display = "none";
    servicecontent3.style.display = "none";

    servicedetails1.style.display = "block";
    servicedetails2.style.display = "none";
    servicedetails3.style.display = "none";
    
}) ;


// Mobile Menu Showing
mobilemenu.addEventListener("click", function () {
    mobilemenuList.classList.toggle("show"); // Use classList.toggle to toggle the display of the mobile menu list
});


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
servicedetailtab1.addEventListener("click" , function () {
    servicedetails1.style.display = "block";
    servicedetails2.style.display = "none";
    servicedetails3.style.display = "none";

    servicedetailtab1.classList.add("active");
    servicedetailtab2.classList.remove("active");
    servicedetailtab3.classList.remove("active");
})

servicedetailtab2.addEventListener("click" , function () {
    servicedetails2.style.display = "block";
    servicedetails1.style.display = "none";
    servicedetails3.style.display = "none";

    servicedetailtab2.classList.add("active");
    servicedetailtab1.classList.remove("active");
    servicedetailtab3.classList.remove("active");
})

servicedetailtab3.addEventListener("click" , function () {
    servicedetails3.style.display = "block";
    servicedetails1.style.display = "none";
    servicedetails2.style.display = "none";

    servicedetailtab3.classList.add("active");
    servicedetailtab1.classList.remove("active");
    servicedetailtab2.classList.remove("active");
})


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

// // filterSelection("all");

// console.log(filterData);


// filterData.addEventListener('click' , function(){
//     console.log( filterData);
//     filterSelection(filterData);
// });

// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("filterData");
//   if (c == "all") 
//   c = "";
//   for (i = 0; i < x.length; i++) {
//     w3RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1)
//     w3AddClass(x[i], "show");
//   }
// }

// function w3AddClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
//   }
// }

// function w3RemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);     
//     }
//   }
//   element.className = arr1.join(" ");
// }