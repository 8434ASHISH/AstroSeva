const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  // Placeholder for palm analysis
  res.json({ result: 'जीवन रेखा लंबी है (डेमो)' });
});

module.exports = router;
