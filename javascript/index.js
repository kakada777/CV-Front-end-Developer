const scrollBtn = document.getElementById('scrollBtn');

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
};

scrollBtn.addEventListener('click', function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
/*Contact */
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    emailjs.send("service_kimbv9s", "template_t29p5tb", {
      user_email: document.getElementById("user_email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    })
    .then(function(response) {
      alert("Message sent successfully!");
      document.getElementById("contact-form").reset();
    }, function(error) {
      alert("Failed to send message. Please try again.");
      console.error("FAILED...", error);
    });
  });
  
  