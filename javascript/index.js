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
  // chang name
  const translations = {
    en: {
      intro: "Hello, I'm",
      name:"Po kuchkakada",
      welcome: "Welcome to my personal website. 👋",
      aboutMe: "About Me",
      education: "Education",
      skills: "Skills",
      experienceTitle: "Past Project Experience",
      experienceSubtitle: "Explore the projects I've worked on so far",
      contactTitle: "Let's work together",
      contactDescription: "I'm glad you've visited my personal portfolio website! If you have any questions, suggestions, or would like to collaborate, please feel free to contact me through this form. I will endeavor to reply to your message as soon as possible.",
    },
    kh: {
      intro: "សួស្តី ខ្ញុំឈ្មោះ",
      name:"ប៉ូ គុជកក្កដា",
      welcome: "សូមស្វាគមន៍មកកាន់គេហទំព័ររបស់ខ្ញុំ 👋",
      aboutMe: "អំពីខ្ញុំ",
      education: "ការអប់រំ",
      skills: "ជំនាញ",
      experienceTitle: "បទពិសោធន៍គម្រោង",
      experienceSubtitle: "សូមមើលគម្រោងដែលខ្ញុំបានធ្វើ",
      contactTitle: "ចង់ធ្វើការជាមួយគ្នា",
      contactDescription: "ខ្ញុំរីករាយណាស់ដែលអ្នកបានចូលមកទស្សនាគេហទំព័ររបស់ខ្ញុំ។ ប្រសិនបើមានសំណួរ ឬមានអ្វីចង់បន្តការសហការ សូមទាក់ទងមកខ្ញុំ។ ខ្ញុំនឹងព្យាយាមឆ្លើយតបឱ្យបានលឿនបំផុត។",
    }
  };

  function changeLanguage(lang) {
    document.getElementById("intro").innerText = translations[lang].intro;
    document.getElementById("name").innerText = translations[lang].name;
    document.getElementById("welcome").innerText = translations[lang].welcome;
    document.getElementById("aboutMe").innerText = translations[lang].aboutMe;
    document.getElementById("education").innerText = translations[lang].education;
    document.getElementById("skills").innerText = translations[lang].skills;
    document.getElementById("experienceTitle").innerText = translations[lang].experienceTitle;
    document.getElementById("experienceSubtitle").innerText = translations[lang].experienceSubtitle;
    document.getElementById("contactTitle").innerText = translations[lang].contactTitle;
    document.getElementById("contactDescription").innerText = translations[lang].contactDescription;
  }

  