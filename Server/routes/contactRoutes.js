// server/routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const emailjs = require('emailjs-com');

router.post('/send', async (req, res) => {
  const { name, email, phone, message } = req.body;
  
  try {
    await emailjs.send(
      'your_service_id', 
      'your_template_id', 
      { name, email, phone, message },
      'your_user_id'
    );
    
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Failed to send email:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;