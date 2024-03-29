
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//        Scroll Section Active Link   // 

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        })
    }
});

//        Sticky navbar   // 


let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

//        Swiper        // 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


//        Dark Light Mode   // 

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');

}

//        Scroll Reveal    // 

ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
 });


ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });




//        Read More Show hide    // 


function toggleContent() {
  var content = document.getElementById("content");
  var hiddenContent = document.getElementById("hiddenContent");

  if (content.style.display === "block") {
      content.style.display = "none";
      hiddenContent.style.display = "block";
  } else {
      content.style.display = "block";
      hiddenContent.style.display = "none";
  }
}

//        Form Submission SMTP    // 

const form = document.querySelector('form');
const fullName = document.getElementById('Name');
const email = document.getElementById('Email');
const number = document.getElementById('Number');
const subject = document.getElementById('Subject');
const message = document.getElementById('Message');

// function sendEmail(){

// const fullName = document.getElementById('Name');
//   const bodyMessage = `Full Name: ${fullName.value} <br>
//   Email: ${email.value} <br> 
//   Number: ${number.value} <br> 
//   Message: ${message.value}`

//   Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "aqib5733@gmail.com",
//     Password : "40872484735DDCFBC521187A487A55F86387",
//     To : "aqib5733@gmail.com",
//     From : "aqib5733@gmail.com",
//     Subject : subject.value,
//     Body : bodyMessage
//   }).then(
//   message => {
//     if (message == "OK"){
//       Swal.fire({
//         title: "Success!",
//         text: "Message Sent Successfully!",
//         icon: "success"
//       });
//     }
//   }
//   );
// }

function sendEmail() {
  const fullName = document.getElementById('Name');
  const bodyMessage = `Full Name: ${fullName.value} <br>
  Email: ${email.value} <br> 
  Number: ${number.value} <br> 
  Message: ${message.value}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "aqib5733@gmail.com",
    Password: "40872484735DDCFBC521187A487A55F86387",
    To: "aqib5733@gmail.com",
    From: "aqib5733@gmail.com",
    Subject: subject.value,
    Body: bodyMessage
  })
  .then(message => {
    if (message === "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully!",
        icon: "success"
      });
    } else {
      throw new Error('Failed to send email');
    }
  })
  .catch(error => {
    Swal.fire({
      title: "Error!",
      text: "Failed to send message. Please try again later.",
      icon: "error"
    });
    console.error('Email sending error:', error);
  });
}


form.addEventListener('submit', (e) => {
  e.preventDefault();

  sendEmail();
})