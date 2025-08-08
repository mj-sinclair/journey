function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields.");
    return false;
  }

  // Simple email format check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  alert("Message sent successfully!");
  return true;
}

window.onload = function () {
  const hours = new Date().getHours();
  const greeting = document.createElement('p');
  if (hours < 12) greeting.textContent = "Hello !!";
  else if (hours < 18) greeting.textContent = "Wagwan Genz!!";
  else greeting.textContent = "Welcome to my world!!";

  // Only show greeting on index.html and Contact.html
  const path = window.location.pathname.toLowerCase();
  if (path.startsWith("index.html") || path.endsWith("contact.html")) {
    document.querySelector("main").prepend(greeting);
  }
};

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    // Only handle internal links
    if (this.hostname === window.location.hostname) {
      e.preventDefault();
      document.querySelector('main').classList.add('page-slide-out');
      setTimeout(() => {
        window.location = this.href;
      }, 500); // Match animation duration
    }
  });
});

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('main').classList.add('page-slide-in');
});
