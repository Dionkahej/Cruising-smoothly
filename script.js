// Cruising Smoothly — script.js
// Render flavours, schedule and initialize Leaflet map.

document.addEventListener('DOMContentLoaded', function () {
  // Data for flavours
  const flavours = [
    { name: 'Coconut (Vegan)', desc: 'Creamy coconut base — classic Sri Lankan favourite.', img: 'images/flavour-coconut.jpg' },
    { name: 'Mango (Seasonal)', desc: 'Fresh local mango pulp — bright & tropical.', img: 'images/flavour-mango.jpg' },
    { name: 'Ceylon Tea', desc: 'Tea-infused nicecream with a hint of cinnamon.', img: 'images/flavour-tea.jpg' },
    { name: 'Banana Caramel', desc: 'Caramelised banana goodness.', img: 'images/flavour-banana.jpg' },
    { name: 'Passionfruit', desc: 'Tangy & fragrant — great as sorbet.', img: 'images/flavour-passion.jpg' },
    { name: 'Chocolate (Rich)', desc: 'Deep cocoa, locally sourced where possible.', img: 'images/flavour-chocolate.jpg' },
    { name: 'Pineapple', desc: 'Fresh-tart pineapple, refreshing on the beach.', img: 'images/flavour-pineapple.jpg' },
    { name: 'Avocado (Silky)', desc: 'Silky avocado nicecream — naturally sweet.', img: 'images/flavour-avocado.jpg' }
  ];

  const flavoursList = document.getElementById('flavours-list');
  flavours.forEach(f => {
    const card = document.createElement('article');
    card.className = 'flavour';
    card.innerHTML = `
      <img src="${f.img}" alt="${f.name} photo" onerror="this.src='images/flavour-placeholder.jpg'"/>
      <div>
        <h4>${f.name}</h4>
        <p>${f.desc}</p>
      </div>
    `;
    flavoursList.appendChild(card);
  });

  // Schedule data and map markers
  const schedule = [
    { day: 'Monday', time: '08:00 — 12:00', place: 'Weligama Main Beach', coords: [5.9738, 80.4456] },
    { day: 'Tuesday', time: '10:00 — 14:00', place: 'Weligama Market', coords: [5.9731, 80.4449] },
    { day: 'Wednesday', time: '15:00 — 19:00', place: 'Stilt Fishermen View (evening)', coords: [5.9715, 80.4470] },
    { day: 'Thursday', time: '09:00 — 13:00', place: 'Near Weligama Railway Station', coords: [5.9752, 80.4441] },
    { day: 'Friday', time: '08:00 — 12:00', place: 'Beachfront promenade', coords: [5.9748, 80.4462] },
    { day: 'Saturday', time: '17:00 — 21:00', place: 'Surf point night market', coords: [5.9766, 80.4483] },
    { day: 'Sunday', time: '11:00 — 16:00', place: 'Mirissa (weekend pop-up)', coords: [5.9489, 80.4546] }
  ];

  const scheduleList = document.getElementById('schedule-list');
  schedule.forEach(s => {
    const li = document.createElement('li');
    li.textContent = `${s.day} — ${s.time} — ${s.place}`;
    scheduleList.appendChild(li);
  });

  // Initialize Leaflet map
  const map = L.map('map', { scrollWheelZoom: false }).setView([5.9738, 80.4456], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);

  const truckIcon = L.icon({
    iconUrl: 'images/truck-marker.png',
    iconSize: [44, 44],
    iconAnchor: [22, 44],
    popupAnchor: [0, -36]
  });

  schedule.forEach(s => {
    const marker = L.marker(s.coords, { icon: truckIcon }).addTo(map);
    marker.bindPopup(`<strong>${s.place}</strong><br/>${s.day} — ${s.time}`);
  });

  // Download menu (simple generated text -> user can replace with real PDF)
  document.getElementById('download-menu').addEventListener('click', () => {
    const menuText = [
      'Cruising Smoothly — Menu',
      '',
      'Classic Scoop: Single 300, Double 500',
      'Vegan Coconut: Single 350, Double 600',
      'Sundaes & Treats: Classic Sundae 650, Waffle+Nicecream 900, Milkshake 700',
      'Family Packs: 1L 2200, 5L 9500 (pre-order)',
      '',
      'Toppings: +50 each',
      '',
      'Contact: hello@cruisingsmoothly.lk +94 77 123 4567'
    ].join('\n');

    const blob = new Blob([menuText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cruising-smoothly-menu.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });

});
