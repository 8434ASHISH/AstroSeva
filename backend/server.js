const express = require('express');
const cors = require('cors');
const rashiRouter = require('./routes/rashi');
const kundliRouter = require('./routes/kundli');
const palmRouter = require('./routes/palm');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/rashi', rashiRouter);
app.use('/kundli', kundliRouter);
app.use('/palm', palmRouter);

// Shubh Dates
app.get('/shubh-dates', (req, res) => {
  const dates = ['2025-05-15', '2025-06-10', '2025-11-20']; // Demo
  res.json(dates);
});

// Horoscope
app.get('/horoscope', (req, res) => {
  const rashi = req.query.rashi;
  const horoscopes = require('./data/horoscope.json');
  res.json({ prediction: horoscopes[rashi] || 'आज का दिन अच्छा रहेगा।' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
