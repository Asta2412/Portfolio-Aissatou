document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const words = ["Référent Digital", "Développeuse Web", "Social Media", "UI/UX Design", "Graphic Designer"];
    let wordIndex = 0;
    let charIndex = 0;
    let currentText = "";
    let isDeleting = false;
    
    const typedText = document.querySelector(".typed-text");
    const cursor = document.querySelector(".cursor");

    function typeEffect() {
        if (isDeleting) {
            currentText = words[wordIndex].substring(0, charIndex--);
        } else {
            currentText = words[wordIndex].substring(0, charIndex++);
        }

        typedText.textContent = currentText;

        if (!isDeleting && charIndex === words[wordIndex].length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000); 
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 500);
        } else {
            setTimeout(typeEffect, isDeleting ? 50 : 100);
        }
    }

    typeEffect();
});



  


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Empêche l'envoi réel

        alert("✅ Merci pour votre message ! Je vous répondrai bientôt.");

        form.reset(); // Réinitialise le formulaire
    });
});


  const filters = document.querySelectorAll('.filter');
  const items = document.querySelectorAll('.portfolio-item');

  filters.forEach(filter => {
    filter.addEventListener('click', () => {
      filters.forEach(btn => btn.classList.remove('active'));
      filter.classList.add('active');

      const category = filter.getAttribute('data-filter');
      items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });