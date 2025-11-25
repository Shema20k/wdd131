// filtered-temples.js
const temples = [

  { name: "Adelaide Australia Temple", location: "Adelaide, Australia", dedicated: "2000", area: 8700, image: "images/adelaide.jpeg" },
  { name: "Freiberg Germany Temple", location: "Freiberg, Germany", dedicated: "1985", area: 13000, image: "images/germany_temple_lds.webp" },
  { name: "Indiana Indianapolis Temple", location: "Indianapolis, Indiana, USA", dedicated: "2015", area: 35000, image: "images/indy_temple2015.jpg" },
  { name: "Manila Philippines Temple", location: "Manila, Philippines", dedicated: "1984", area: 12345, image: "images/manila.jpg" },
  { name: "Sydney Australia Temple", location: "Sydney, Australia", dedicated: "2000", area: 56000, image: "images/sydney_temple.webp" },
  { name: "Rapid City South Dakota Temple", location: "Rapid City, South Dakota, USA", dedicated: "2000", area: 8200, image: "images/rapid-city.jpg" },
  { name: "Harare Zimbabwe Temple", location: "Harare, Zimbabwe", dedicated: "1999", area: 6000, image: "images/zimbabwe.jpg" },
  { name: "Toronto Canada Temple", location: "Toronto, Canada", dedicated: "1999", area: 45000, image: "images/toronto.jpg" },
  { name: "Quebec Canada Temple", location: "Quebec City, Canada", dedicated: "1990", area: 15000, image: "images/quebec1.jpeg" },

  { name: "Salt Lake Temple", location: "Salt Lake City, Utah, USA", dedicated: "1893", area: 253015, image: "images/salt-lake-temple.jpeg" },
  { name: "Rome Italy Temple", location: "Rome, Italy", dedicated: "2019", area: 41000, image: "images/rome-italy-temple.jpeg" },
  { name: "Paris France Temple", location: "Le Chesnay, France (Paris area)", dedicated: "2017", area: 44000, image: "images/paris-france-temple.jpeg" }
];

const container = document.getElementById('temple-container');
const currentFilterHeading = document.getElementById('current-filter');
const filterButtons = document.querySelectorAll('.filter-btn');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

function renderTemples(list){
  container.innerHTML = '';
  if(!list.length){
    const empty = document.createElement('p');
    empty.textContent = 'No temples match that filter.';
    container.appendChild(empty);
    return;
  }

  list.forEach(t => {
    const card = document.createElement('article');
    card.className = 'temple-card';
    card.innerHTML = `
      <h3>${t.name}</h3>
      <img src="${t.image}" alt="${t.name} - ${t.location}" loading="lazy">
      <p><strong>Location:</strong> ${t.location}</p>
      <p><strong>Dedicated:</strong> ${t.dedicated}</p>
      <p><strong>Area:</strong> ${t.area.toLocaleString()} sq ft</p>
    `;
    container.appendChild(card);
  });
}

renderTemples(temples);
function setActiveButton(activeId){
  filterButtons.forEach(btn => {
    const isActive = btn.id === activeId;
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
}

function showHome(){
  currentFilterHeading.textContent = 'Home';
  setActiveButton('home');
  renderTemples(temples);
}

function showOld(){
  currentFilterHeading.textContent = 'Old (before 1900)';
  setActiveButton('old');
  renderTemples(temples.filter(t => Number(t.dedicated) < 1900));
}

function showNew(){
  currentFilterHeading.textContent = 'New (after 2000)';
  setActiveButton('new');
  renderTemples(temples.filter(t => Number(t.dedicated) > 2000));
}

function showLarge(){
  currentFilterHeading.textContent = 'Large (> 90,000 sq ft)';
  setActiveButton('large');
  renderTemples(temples.filter(t => t.area > 90000));
}

function showSmall(){
  currentFilterHeading.textContent = 'Small (< 10,000 sq ft)';
  setActiveButton('small');
  renderTemples(temples.filter(t => t.area < 10000));
}

document.getElementById('home').addEventListener('click', showHome);
document.getElementById('old').addEventListener('click', showOld);
document.getElementById('new').addEventListener('click', showNew);
document.getElementById('large').addEventListener('click', showLarge);
document.getElementById('small').addEventListener('click', showSmall);

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', String(!expanded));
  navMenu.classList.toggle('show');
  hamburger.textContent = expanded ? '☰' : '✖';
});

document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

filterButtons.forEach(btn => {
  btn.addEventListener('keyup', (e) => {
    if(e.key === 'Enter' || e.key === ' ') btn.click();
  });
});

window.addEventListener('load', () => {
  document.getElementById('home').focus();
});
