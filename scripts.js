
document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const navMenu = document.querySelector(".nav");
        
    burger.addEventListener("click", () => {
      burger.classList.toggle("active");  
      navMenu.classList.toggle("active");
    });
  
    document.querySelectorAll(".nav a").forEach((link) => {
      link.addEventListener("click", () => {
        burger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
    
  });
 

var countDownDate = new Date("Sept 22, 2024 15:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

   if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
const form = document.getElementById('myForm');
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close-btn');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        
        popup.classList.remove('hidden');
    });

    closeBtn.addEventListener('click', () => {
        
        popup.classList.add('hidden');
    });

    
    popup.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.classList.add('hidden');
        }
    });
;