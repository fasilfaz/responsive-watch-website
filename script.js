const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show');
    });
}  

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
}


const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

const swiperWatches = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween:32,
    grabCursor:true,
    effect:'creative',
    creativeEffect: {
        prev:{
            translate: [-100,0,-500],
            rotate:[0,0,15],
            opacity: 0
        },
        next:{
            translate: [100,0,-500],
            rotate:[0,0,-15],
            opacity: 0
        },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    //   renderBullet: (index, className) => {
    //     return '<span class="' + className + '">' + String(index + 1).padStart(2,'0') + "</span>";
    //   },
    },
});

gsap.from('.home__images', 1.5, {opacity:0, y:150, delay:.1})
gsap.from('.home__data', 1.8, {opacity:0, x:-100, delay:.8})
gsap.from('.home__info', 1.8, {opacity:0, x:-100, delay:1})