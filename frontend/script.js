// Rashi Calculator
document.getElementById('rashiForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const date = new Date(document.getElementById('birthDate').value);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const response = await fetch('http://localhost:3000/rashi', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ day, month })
  });
  const result = await response.json();
  document.getElementById('rashiResult').innerText = `आपकी राशि: ${result.rashi}`;
});

// Kundli Form
document.getElementById('kundliForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    name: document.getElementById('name').value,
    dob: document.getElementById('dob').value,
    tob: document.getElementById('tob').value,
    place: document.getElementById('place').value
  };
  const response = await fetch('http://localhost:3000/kundli', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  const result = await response.json();
  document.getElementById('kundliResult').innerText = `कुंडली बन गई: ${result.message}`;
});

// Shaadi Dates
document.getElementById('getShubhDates').addEventListener('click', async () => {
  const response = await fetch('http://localhost:3000/shubh-dates');
  const dates = await response.json();
  const list = document.getElementById('shubhDates');
  list.innerHTML = '';
  dates.forEach(date => {
    const li = document.createElement('li');
    li.innerText = date;
    list.appendChild(li);
  });
});

// Palm Reading (Placeholder)
document.getElementById('analyzePalm').addEventListener('click', () => {
  const file = document.getElementById('palmImage').files[0];
  if (file) {
    document.getElementById('palmResult').innerText = 'हस्त रेखा: जीवन रेखा लंबी है (डेमो)';
  } else {
    document.getElementById('palmResult').innerText = 'कृपया फोटो अपलोड करें';
  }
});

// Daily Horoscope
document.getElementById('getHoroscope').addEventListener('click', async () => {
  const rashi = document.getElementById('rashiSelect').value;
  const response = await fetch(`http://localhost:3000/horoscope?rashi=${rashi}`);
  const result = await response.json();
  document.getElementById('horoscopeResult').innerText = result.prediction;
});
