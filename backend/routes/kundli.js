const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { name, dob, tob, place } = req.body;
  // Save to Firebase or local storage (placeholder)
  res.json({ message: `${name} की कुंडली दर्ज की गई।` });
});

module.exports = router;
