function getRandom(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

/* LENIS SMOOTH SCROLL BOILERPLATE */

const lenis = new Lenis();

lenis.on('scroll', (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

/* GSAP HOME PAGE */

// ANIMACIJA NAVBAR-A ON SCROLL

const tl = gsap.timeline({
  scrollTrigger: {
    start: 'top+=50',
    end: '+=1',
    toggleActions: 'play none none reverse',
    scrub: 2,
  },
});

tl.to('.nav-wrap', {
  height: 75,
})
  .to('nav', { height: 75 }, '<')
  .to('.logo', { width: 150 }, '<');

// JAJE KOJE PRATI MIS

document.body.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  gsap.to('.egg', {
    x: mouseX,
    y: mouseY,
    stagger: 0.003,
  });
});

// SLIKA MENE KOJA LEBDI

const hover = gsap.timeline({ repeat: -1 });

hover
  .to('.milic', {
    y: '-=30',
    ease: Sine.easeInOut,
    duration: 2,
  })
  .to('.milic', {
    y: '+=30',
    ease: Sine.easeInOut,
    duration: 2,
  })
  .to('.milic', {
    y: '-=20',
    ease: Sine.easeInOut,
    duration: 2,
  })
  .to('.milic', {
    y: '+=20',
    ease: Sine.easeInOut,
    duration: 2,
  })
  .to('.milic', {
    y: '-=50',
    ease: Sine.easeInOut,
    duration: 2,
  })
  .to('.milic', {
    y: '+=50',
    ease: Sine.easeInOut,
    duration: 2,
  });

// PCELE

const pcela = document.querySelectorAll('.pcela');
let pcelaCounter = 1;

const pcelaHandle = () => {
  pcelaCounter++;
  let num = (pcelaCounter % 2) + 1;
  pcela[0].src = `images/pcela${num}.svg`;
  pcela[1].src = `images/pcela${num}.svg`;
};

setInterval(pcelaHandle, 200);

const eggs = document.querySelectorAll('.egg');
const arrow = document.querySelector('.arrow');
const wojak = document.querySelector('.wojak');

pcela[1].addEventListener('click', () => {
  eggs[0].className = 'egg red-circle';
  eggs[1].className = 'egg red-arrow';
  arrow.style.display = 'block';
  wojak.style.display = 'block';
});
// REALIZACIJA SLIDER CAROUSEL-A

let carousel_width = document.querySelector('.slider').offsetWidth;
let sections = gsap.utils.toArray('.section');
let track = document.querySelector('.track');
let track_width = sections[0].offsetWidth * sections.length;
let drag_width = track_width - carousel_width;
let slider = document.querySelector('.scroller');
let slider_width = slider.offsetWidth;
let thumb = slider.querySelector('.thumb');
let thumb_width = thumb.offsetWidth;
let ratio = drag_width / (slider_width - thumb_width);

addEventListener('resize', () => {
  carousel_width = document.querySelector('.slider').offsetWidth;
  sections = gsap.utils.toArray('.section');
  track = document.querySelector('.track');
  track_width = sections[0].offsetWidth * sections.length;
  drag_width = track_width - carousel_width;
  slider = document.querySelector('.scroller');
  slider_width = slider.offsetWidth;
  thumb = slider.querySelector('.thumb');
  thumb_width = thumb.offsetWidth;
  ratio = drag_width / (slider_width - thumb_width);
  gsap.set(thumb, { x: (-1 * this.x) / ratio });
  gsap.set(track, { x: -1 * this.x * ratio });
  console.log('car: ' + carousel_width);
  console.log('drag: ' + drag_width);
  console.log('track: ' + track_width);
  console.log('ratio: ' + ratio);

  Draggable.get(track).kill();

  drag_carousel = Draggable.create(track, {
    type: 'x',
    bounds: {
      minX: 0,
      maxX: -1 * drag_width,
    },
    onDrag: function () {
      gsap.set(thumb, { x: (-1 * this.x) / ratio });
      console.log(drag_width);
      console.log(this.x);
    },
    onThrowUpdate() {
      gsap.set(thumb, { x: (-1 * this.x) / ratio });
    },
  });
});

let drag_carousel = Draggable.create(track, {
  type: 'x',
  bounds: {
    minX: 0,
    maxX: -1 * drag_width,
  },
  onDrag: function () {
    gsap.set(thumb, { x: (-1 * this.x) / ratio });
    console.log(drag_width);
    console.log(this.x);
  },
  onThrowUpdate() {
    gsap.set(thumb, { x: (-1 * this.x) / ratio });
  },
});

let drag_thumb = Draggable.create(thumb, {
  type: 'x',
  bounds: slider,
  onDrag: function () {
    gsap.set(track, { x: -1 * this.x * ratio });
  },
  onThrowUpdate() {
    gsap.set(track, { x: -1 * this.x * ratio });
  },
});

/* JQUERY */

$('.ocool').click(function () {
  $('html,body').animate({
    scrollTop: $('.content-wrapper').offset().top - 70,
  });
});

$('.okrea').click(function () {
  $('html,body').animate({
    scrollTop: $('.kreator-wrapper').offset().top - 70,
  });
});

/* VANILLA JS */

// PUNJENJE CAROUSEL-A SLIKAMA

let recepti = [
  {
    naziv: 'Polu-Popara',
    sastojci: ['brasno'],
    recept: 'Sipaj brasno u vodu.',
  },
  {
    naziv: 'Popara',
    sastojci: ['brasno', 'kvasac'],
    recept: 'Napravi hleb od vode, brasna i  kvasca, kuvaj ga u vodi.',
  },
  {
    naziv: 'Vocna Salata',
    sastojci: ['voce'],
    recept: 'Naseckaj voce, stavi u ciniju.',
  },
  {
    naziv: 'Hleb',
    sastojci: ['brasno', 'kvasac'],
    recept: 'Pomesaj brasno kvasac i vodu, ispeci.',
  },
  {
    naziv: 'Palacinke',
    sastojci: ['brasno', 'so', 'secer', 'ulje', 'kvasac', 'jaja'],
    recept: 'Sve ove divne sastojke pomesaj u tecnu smesu pa przi.',
  },
  {
    naziv: 'Paprikas',
    sastojci: ['povrce', 'so', 'ulje'],
    recept: 'Iseckaj povrce, stavi u serpu sa uljem, kuvaj.',
  },
  {
    naziv: 'Salata',
    sastojci: ['povrce'],
    recept: 'Povrce, povrce, povrce.',
  },
  {
    naziv: 'Ustipci',
    sastojci: ['brasno', 'secer', 'ulje'],
    recept: 'Napravi testo od vode, brasna i secera, przi u dubokom ulju.',
  },
  {
    naziv: 'Krofne',
    sastojci: ['brasno', 'secer', 'ulje', 'kvasac'],
    recept:
      'Napravi testo od vode, brasna, secera i kvasca, przi u dubokom ulju.',
  },
  {
    naziv: 'Przenice',
    sastojci: ['brasno', 'kvasac', 'jaja'],
    recept: 'Napravi hleb od brasna i kvasca, potopi u jaja, przi.',
  },
  {
    naziv: 'Popara sa Sirom',
    sastojci: ['brasno', 'kvasac', 'sir'],
    recept: 'Napravi hleb, skuvaj ga, dodaj sir.',
  },
  {
    naziv: 'Jaje na Oko',
    sastojci: ['jaja'],
    recept: 'Jaje na oko stavi. XD',
  },
  {
    naziv: 'Pita sa Jabukama',
    sastojci: ['brasno', 'voce', 'secer'],
    recept: 'Napravi kore od brasna i vode, stavi jabuke i secer, ispeci.',
  },
  {
    naziv: 'Pita Krompirusa',
    sastojci: ['brasno', 'so', 'povrce'],
    recept: 'Napravi kore od brasna i vode, stavi krompir i so, ispeci.',
  },
  {
    naziv: 'Pita sa Sirom',
    sastojci: ['brasno', 'sir', 'jaja'],
    recept: 'Napravi kore od brasna i vode, stavi sir i jaja, ispeci.',
  },
  {
    naziv: 'Beef Wellington',
    sastojci: ['brasno', 'meso', 'jaja'],
    recept:
      '<a target="_blank" href="https://www.youtube.com/watch?v=Cyskqnp1j64&ab_channel=GordonRamsay">Pogledaj ovde.</a>',
  },
  {
    naziv: 'Suvo Meso',
    sastojci: ['meso'],
    recept: 'Meso u pusnicu stavi na jedno nedelju dana.',
  },
  {
    naziv: 'Pizza',
    sastojci: ['brasno', 'povrce', 'meso'],
    recept: 'Napravi testo od brasna i vode, meso i povrce stavi po vrhu.',
  },
  {
    naziv: 'Toplo Mleko',
    sastojci: ['mleko'],
    recept: 'Mleko, serpa, sve ostalo je suvisno.',
  },
  {
    naziv: 'Meze',
    sastojci: ['sir', 'meso'],
    recept:
      'Osusi meso, naseci ga i stavi sa sirom na drveno postolje, sve ostalo je suvisno.',
  },
  {
    naziv: 'Ono iz Menze',
    sastojci: ['meso', 'jaja'],
    recept: 'Niko ziv ne zna od cega i kako se ovo pravi.',
  },
  {
    naziv: 'Milkshake',
    sastojci: ['voce', 'mleko'],
    recept: 'Voce, mleko, blender.',
  },
  {
    naziv: 'Posno Jelo',
    sastojci: ['povrce', 'meso'],
    recept: 'Prebranac i neka riba.',
  },
  {
    naziv: 'Sopska Salata',
    sastojci: ['sir', 'povrce', 'ulje'],
    recept: 'Pomesaj paradajz sir i ulje.',
  },
  {
    naziv: 'Cezar Salata',
    sastojci: ['povrce', 'meso'],
    recept: 'Veni, vidi, vici.',
  },
  {
    naziv: 'Torta',
    sastojci: ['jaja', 'brasno', 'secer', 'voce'],
    recept: 'Napravi kore, filuj vocem i drugim stvarima.',
  },
  {
    naziv: 'Becka Snicla',
    sastojci: ['brasno', 'meso', 'jaja'],
    recept: 'Ispohuj meso.',
  },
];

// F-JA KOJA KREIRA KARTICU KOJU DODAJEMO CAROUSEL-U

const createSection = (obj, section) => {
  section.innerHTML = '';
  const slikaDiv = document.createElement('div');
  slikaDiv.className = 'slika-div';
  slikaDiv.style.backgroundImage = `url('slike-hrane/${obj.naziv.toLowerCase()}-min.png')`;

  const textDiv = document.createElement('div');
  textDiv.innerHTML = `<p>${obj.naziv}</p> <p>🔥 ${getRandom(100, 999)}cal</p>`;
  textDiv.className = 'text-div';

  section.appendChild(slikaDiv);
  section.appendChild(textDiv);
};

// FUNKCIJA KOJA BIRA 5 RANDOM RECEPATA KOJI SE NE PONAVLJAJU

let nRec;
let carouselRecipes = [];

for (let i = 0; i < 5; i++) {
  nRec = getRandom(0, recepti.length - 1);

  while (carouselRecipes.includes(recepti[nRec])) {
    nRec = getRandom(0, recepti.length - 1);
  }

  console.log(nRec);

  createSection(recepti[nRec], sections[i]);
  carouselRecipes.push(recepti[nRec]);
}

console.log(carouselRecipes);
console.log(sections);

// RESPONZIVNOST

const showNav = document.querySelector('.show-nav');
const ul = document.querySelector('ul');
let shownNav = false;

showNav.addEventListener('click', () => {
  if (!shownNav) {
    ul.id = '';
    shownNav = true;
    showNav.style.backgroundColor = 'var(--purple)';
  } else {
    ul.id = 'vanish';
    shownNav = false;
    showNav.style.backgroundColor = '#fff';
  }
});

// DUGME SRECE

const dugmeSrece = document.querySelector('.sreca');
const srecaSlika = document.querySelector('.sreca-img');
const dugmeAnimacija = gsap.timeline();
dugmeAnimacija.pause();
dugmeAnimacija.to('.sreca-img', {
  y: `-=100%`,
  ease: Sine.easeInOut,
  duration: 1,
});

dugmeSrece.addEventListener('mouseenter', () => {
  dugmeAnimacija.play();
});

dugmeSrece.addEventListener('mouseleave', () => {
  dugmeAnimacija.reverse();
});

sessionStorage.setItem('recept', 'NE');

dugmeSrece.addEventListener('click', () => {
  let randRecept = getRandom(0, recepti.length - 1);
  sessionStorage.setItem('recept', JSON.stringify(recepti[randRecept]));
  console.log(sessionStorage.getItem('recept'));
  window.location.href = 'receptomat.html';
});
