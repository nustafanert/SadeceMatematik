
const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  
  const phone = "905385434567";
  const text = `Merhaba, ben ${name}, ${message}`

   const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");
   
  form.reset();

});

const mesaj = "Merhaba, özel ders hakkında bilgi almak istiyorum!";

const whatsappLinkFloating = document.getElementById('whatsapp-floating');
const whatsappLinkContact = document.getElementById('whatsapp-contact');
whatsappLinkFloating.href = `https://wa.me/905385434567?text=${encodeURIComponent(mesaj)}`;
whatsappLinkContact.href = `https://wa.me/905385434567?text=${encodeURIComponent(mesaj)}`;


const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});


const navLinksItems = document.querySelectorAll('.nav-links a');

navLinksItems.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    if (targetId !== "#" && document.querySelector(targetId)) {
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }


    const menu = document.querySelector('.nav-links');
    if (menu.classList.contains('active')) menu.classList.remove('active');
  });
});


function smoothScrollTo(target, duration = 800) {
  const start = window.scrollY;
  const end = target.getBoundingClientRect().top + start;
  const distance = end - start;
  let startTime = null;

  function animation(currentTime){
    if(!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = progress < 0.5 ? 2*progress*progress : -1 + (4 - 2*progress)*progress;
    window.scrollTo(0, start + distance * ease);
    if(timeElapsed < duration) requestAnimationFrame(animation);
  }
  requestAnimationFrame(animation);
}


document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const targetEl = document.querySelector(this.getAttribute('href'));
    if(targetEl) smoothScrollTo(targetEl, 1000);
  });
});






const track = document.querySelector('.references-track');
const cards = Array.from(track.children);
const cardCount = cards.length;


cards.forEach(card => track.appendChild(card.cloneNode(true)));

let pos = 0;
const speed = 0.3;

function animate() {
  pos -= speed;
  if(pos <= -track.scrollWidth / 2) pos = 0;
  track.style.transform = `translateX(${pos}px)`;
  requestAnimationFrame(animate);
}

animate();



const counters = document.querySelectorAll('.hero-stats .count');

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const speed = 200;
    const increment = target / speed;

    if(count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

