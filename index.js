document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("Umxi865dKiIHUEkvr");
});

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${
      y * boolInt
    }px) rotate(${x * boolInt * 10}deg)`;
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

// function contact(event) {
//   event.preventDefault();
//   const loading = document.querySelector(".modal__overlay--loading");
//   const success = document.querySelector(".modal__overlay--success");
//   loading.classList += " modal__overlay--visible";
//   emailjs
//     .sendForm(
//       "service_j9lklf5",
//       "template_8pqc62j",
//       event.target,
//       "Umxi865dKiIHUEkvr"
//     )
//     .then(() => {
//       loading.classList.remove("modal__overlay--visible");
//       success.classList += " modal__overlay--visible";
//     })
//     .catch(() => {
//       loading.classList.remove("modal__overlay--visible");
//       alert(
//         "The email service is temporarily unavailable. Please contact me directly on justin-ong@live.com.au"
//       );
//     });
// }

function contact(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get form values
  var userName = document.querySelector("input[name='user_name']").value;
  var userEmail = document.querySelector("input[name='user_email']").value;
  var message = document.querySelector("textarea[name='message']").value;

  // Your Email.js service ID, template ID, and user ID
  var serviceID = "service_j9lklf5";
  var templateID = "template_p8wtnon";
  var userID = "Umxi865dKiIHUEkvr";

  // Send email
  emailjs
    .send(
      serviceID,
      templateID,
      {
        from_name: userName,
        reply_to: userEmail,
        message_html: message,
      },
      userID
    )
    .then(
      function (response) {
        console.log("Email sent successfully:", response);
        // Show success overlay
        document.querySelector(".modal__overlay--success").style.display =
          "block";
      },
      function (error) {
        console.error("Error sending email:", error);
        // Show error overlay
        alert("Oops! Something went wrong. Please try again later.");
      }
    );

  // Clear form fields
  document.getElementById("contact__form").reset();
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-container", {
    direction: "horizontal", // Change direction to horizontal for typical use case
    loop: true,
    slidesPerView: 1,
    spaceBetween: 200, // Adjust the space between slides if needed

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
  console.log("Swiper initialized:", swiper);
});
