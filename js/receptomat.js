// F-JA RANDOM BROJ

function getRandom(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// LENIS SMOOTHSCROLL BOILERPLATE

const lenis = new Lenis();

lenis.on('scroll', (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

/* SASTOJCI I RECEPTI */

// SVI SASTOJCI

let sastojci = [
  'jaja',
  'brasno',
  'povrce',
  'voce',
  'so',
  'secer',
  'mleko',
  'kvasac',
  'ulje',
  'sir',
  'meso',
];

sastojci.sort();

// SVI RECEPTI

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

// KREIRAMO CHECKBOXOVE SASTOJAKA

const sastojciDiv = document.querySelector('.sastojci');

for (const element of sastojci) {
  const div = document.createElement('div');
  div.className = 'option';

  const input = document.createElement('input');
  input.type = 'checkbox';
  input.id = element;

  const label = document.createElement('label');
  label.innerHTML = element.charAt(0).toUpperCase() + element.slice(1);
  label.for = element;

  div.appendChild(input);
  div.appendChild(label);

  sastojciDiv.appendChild(div);
}

// F-JA KOJA PROVERAVA DA LI SE SASTOJCI KOJE IMAMO PODUDARAJU SA POTREBNIM

const checkSastojci = (potrebni, imamo) => {
  let nPotrebni = potrebni.length;

  for (const item of imamo) {
    if (potrebni.includes(item)) {
      nPotrebni--;
    }
  }

  return nPotrebni > 0 ? false : true;
};

// KUPIMO U NIZ SVE SASTOJKE NA RASPOLAGANJU

const searchButt = document.querySelector('.search-butt');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

let imamoSastojci = [];

const pokupiSastojke = () => {
  imamoSastojci = [];
  for (const checkbox of checkboxes) {
    let sastojak = checkbox.id;
    if (checkbox.checked) {
      imamoSastojci.push(sastojak);
    }
  }

  console.log(imamoSastojci);
};

//F-JA ZA FORMATIRANJE STRINGOVA

const skratiString = (string) => {
  return string.slice(0, 10) + '...';
};

console.log(skratiString('Ana voli milovana'));

// F-JA KOJA KREIRA KARTICE ZA POTREBNE RECEPTE

const sviReceptiDOM = document.querySelector('.recepti');

const createCard = (obj) => {
  const recipeCard = document.createElement('div');
  recipeCard.className = 'recept-card';

  const slika = document.createElement('div');
  slika.className = 'slika';
  slika.style.backgroundImage = `url('slike-hrane/${obj.naziv.toLowerCase()}-min.png')`;

  const slicica = document.createElement('img');

  if (checkSastojci(obj.sastojci, imamoSastojci)) {
    slicica.src = 'images/valja.svg';
  } else {
    slicica.src = 'images/nevalja.svg';
  }

  slika.appendChild(slicica);
  console.log(`url('slike-hrane/${obj.naziv.toLowerCase()}-min.png')`);

  const lower = document.createElement('div');
  lower.className = 'lower';

  const text = document.createElement('div');
  text.className = 'text';

  const nazivJela = document.createElement('h3');
  nazivJela.innerHTML =
    obj.naziv.length > 10 ? skratiString(obj.naziv) : obj.naziv;

  const kalorije = document.createElement('p');
  kalorije.innerHTML = `🔥 ${getRandom(100, 999)}cal`;

  const button = document.createElement('button');
  button.innerHTML = '👁️‍🗨️';
  button.dataset.id = recepti.indexOf(obj);
  button.className = 'vidi-recept';

  text.appendChild(nazivJela);
  text.appendChild(kalorije);

  lower.appendChild(text);
  lower.appendChild(button);

  recipeCard.appendChild(slika);
  recipeCard.appendChild(lower);

  sviReceptiDOM.appendChild(recipeCard);
};

/* VIDI RECEPT POPUP */

let vidiReceptDugmad = [];
const popupContainer = document.querySelector('.popup-container');
const closePopup = document.querySelector('.close-pop');

console.log(closePopup);

// F-JA KOJA ZATVARA POPUP

closePopup.addEventListener('click', () => {
  popupContainer.style.display = 'none';
});

//F-JA KOJA OTVARA POPUP

const handleDugmad = () => {
  vidiReceptDugmad = document.querySelectorAll('.vidi-recept');
  console.log(vidiReceptDugmad);

  for (const dugme of vidiReceptDugmad) {
    dugme.addEventListener('click', function () {
      fillPopup(recepti[dugme.dataset.id]);
      popupContainer.style.display = 'grid';
    });
  }
};

const nazivJela = document.querySelector('.naziv-jela');
const slikaJela = document.querySelector('.slika-jela');
const listaSastojaka = document.querySelector('.lista-sastojaka');
const recept = document.querySelector('.recept');

// F-JA KOJA DODAJE SASTOJKE U POPUP I BOJI ONE KOJE IMAMO

const createPopupList = (array) => {
  string = '<ol>';
  for (const sastojak of array) {
    if (imamoSastojci.includes(sastojak)) {
      string += `<li class="imamo-sas">${
        sastojak.charAt(0).toUpperCase() + sastojak.slice(1)
      }</li>`;
    } else {
      string += `<li>${
        sastojak.charAt(0).toUpperCase() + sastojak.slice(1)
      }</li>`;
    }
  }
  string += '</ol>';

  return string;
};

// U POPUP STAVLJAMO POTREBNE INFORMACIJE O RECEPTU

const searchGoogle = document.querySelector('.search-dugme');

const fillPopup = (obj) => {
  nazivJela.innerHTML = `<h2>${obj.naziv}</h2>`;
  slikaJela.style.backgroundImage = `url('slike-hrane/${obj.naziv.toLowerCase()}-min.png')`;
  recept.innerHTML = `<p>${obj.recept}</p>`;
  listaSastojaka.innerHTML = createPopupList(obj.sastojci);
  searchGoogle.href = `https://www.google.com/search?q=${obj.naziv
    .toLowerCase()
    .replace(' ', '+')}`;
};

/* FILTER */

const filter = document.querySelector('.filter');
filterOn = true;

// F-JA KOJA UPRAVLJA FILTER DUGMETOM

filter.addEventListener('click', () => {
  console.log(filterOn);

  if (filterOn) {
    filter.style.backgroundColor = '#fff';
    filterOn = false;
  } else {
    filter.style.backgroundColor = 'var(--green)';
    filterOn = true;
  }

  pokupiSastojke();
  trazeniRecepti();
  prikaziRecepte();
  handleDugmad();
  console.log(filterOn);
});

/* RESPONZIVNOST */

const showSastojci = document.querySelector('.show-menu');
sastojciShown = false;

const aside = document.querySelector('aside');

showSastojci.addEventListener('click', () => {
  if (sastojciShown) {
    showSastojci.style.backgroundColor = '#fff';
    sastojciShown = false;
    aside.id = 'vanish';
  } else {
    showSastojci.style.backgroundColor = 'var(--green)';
    sastojciShown = true;
    aside.id = '';
  }
});

function reportWindowSize() {
  console.log(window.innerWidth);
}

let receptiZaPrikazivanje = [];
const textInput = document.querySelector('input[type="text"]');
console.log(textInput);

// FUNKCIJA KOJA KUPI TRAZENE RECPETE NA OSNOVU ZAHTEVA

const trazeniRecepti = () => {
  receptiZaPrikazivanje = [];
  let string = 'checkSastojci(recept.sastojci, imamoSastojci)';
  let input = textInput.value.toLowerCase().trim();

  if (filterOn) {
    input.length > 0
      ? (string += ' && recept.naziv.toLowerCase().includes(input)')
      : string;
  }

  console.log(string);

  for (const recept of recepti) {
    if (filterOn) {
      console.log(eval(string));
      if (eval(string)) {
        receptiZaPrikazivanje.push(recept);
      }
    } else {
      if (input.length > 0) {
        if (recept.naziv.toLowerCase().includes(input)) {
          receptiZaPrikazivanje.push(recept);
        }
      } else {
        receptiZaPrikazivanje.push(recept);
      }
    }
  }
};

// PUNI DIV SA KREIRANIM KARTICAMA

const greska = document.querySelector('.greska');

greska.innerHTML =
  'Nema recepata za prikazivanje.<br>(Ako nisi uneo sastojke, unesi ih!)<br>:( >:( T-T</p>';

const prikaziRecepte = () => {
  sviReceptiDOM.innerHTML = '';

  if (receptiZaPrikazivanje.length == 0) {
    greska.innerHTML =
      'Nema recepata za prikazivanje.<br>(Ako nisi uneo sastojke, unesi ih!)<br>:( >:( T-T</p>';
  } else {
    greska.innerHTML = '';

    for (const recept of receptiZaPrikazivanje) {
      createCard(recept);
    }
  }
};

for (const checkbox of checkboxes) {
  checkbox.addEventListener('change', () => {
    pokupiSastojke();
    trazeniRecepti();
    prikaziRecepte();
    handleDugmad();
  });
}

searchButt.addEventListener('click', () => {
  pokupiSastojke();
  trazeniRecepti();
  prikaziRecepte();
  handleDugmad();
});

textInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    pokupiSastojke();
    trazeniRecepti();
    prikaziRecepte();
    handleDugmad();
  }
});

/* DUGME SRECE */
let sesija = sessionStorage.getItem('recept');
console.log(sesija);

if (sesija != 'NE') {
  console.log('MILIC WAS HERE');
  fillPopup(JSON.parse(sesija));
  popupContainer.style.display = 'grid';
  sessionStorage.setItem('recept', 'NE');
}
