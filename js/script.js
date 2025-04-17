function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("messageInput").value;

  if (!name || !email || !phone || !message) {
    alert("All fields must be filled out");
    return false;
  }

  const output = document.getElementById("output");
  output.innerHTML = `<h3>Submitted Information</h3>
                          <p><strong>Name:</strong> ${name}</p>
                          <p><strong>Email:</strong> ${email}</p>
                          <p><strong>Phone:</strong> ${phone}</p>
                          <p><strong>Message:</strong> ${message}</p>`;
  return false;
}

window.onload = function () {
  const userName = document.getElementById("userName");
  const nameInput = prompt("Enter your name:");
  if (nameInput) {
    userName.textContent = nameInput;
  }
};

let carouselIndex = 0;
function moveCarousel(direction) {
  const track = document.querySelector(".carousel-track");
  const images = document.querySelectorAll(".carousel-track img");
  const imageCount = images.length;

  carouselIndex = (carouselIndex + direction + imageCount) % imageCount;

  const offset = -carouselIndex * (images[0].clientWidth + 10);
  track.style.transform = `translateX(${offset}px)`;
}
