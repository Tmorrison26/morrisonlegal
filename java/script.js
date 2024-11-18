var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  //autoplay: {
  //  delay: 10000,
  //  disableOnInteraction: false
  //},
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function sendMail(){
  let parms = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    message : document.getElementById("message").value,
    subject : document.getElementById("subject").value
  }

  emailjs.send("service_acgordg", "template_jcj5389", parms).then(alert("Email Sent!!"))
}