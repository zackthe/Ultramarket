
/** hambuger menu **/

let hamberger_menu = document.getElementById('humberger-menu');
let navigation = document.querySelector('.navigation');
    

hamberger_menu.addEventListener('click',(e)=>{
        
navigation.classList.toggle('show');
hamberger_menu.classList.toggle('open');    
    
    })

/** carraousal animation **/

const buttonsWrapper = document.querySelector(".map");
const slides = document.querySelector(".inner");

buttonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach(item =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
     /*slides.style.transform = "translateX(-33.33333333333333%)";*/
     slides.style.transform = "translateX(-51.5%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains('third')){
     /* slides.style.transform = 'translatex(-66.6666666667%)';*/
      slides.style.transform = 'translatex(-50%)';
      e.target.classList.add('active');
    }
  }
});



    


