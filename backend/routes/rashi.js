const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { day, month } = req.body;
  let rashi = 'Unknown';
  if (month === 3 && day >= 21 || month === 4 && day <= 19) rashi = 'मेष (Aries)';
  // Add other zodiac signs logic
  res.json({ rashi });
});

module.exports = router;
