const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const DATA_DIR = path.join(__dirname, '..', 'data');
const DATA_FILE = path.join(DATA_DIR, 'contacts.json');

// Ensure data directory and file exist
function ensureDataFile() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
  }
}

// Read contacts from JSON file
function readContacts() {
  ensureDataFile();
  const data = fs.readFileSync(DATA_FILE, 'utf-8');
  return JSON.parse(data);
}

// Write contacts to JSON file
function writeContacts(contacts) {
  ensureDataFile();
  fs.writeFileSync(DATA_FILE, JSON.stringify(contacts, null, 2));
}

// POST /api/contact - Submit a contact form
router.post('/', (req, res) => {
  try {
    const { fullName, email, phone, message } = req.body;

    // Validation
    if (!fullName || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Full name, email, and message are required.'
      });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.'
      });
    }

    const newContact = {
      id: Date.now().toString(),
      fullName,
      email,
      phone: phone || '',
      message,
      submittedAt: new Date().toISOString()
    };

    const contacts = readContacts();
    contacts.push(newContact);
    writeContacts(contacts);

    console.log(`New contact submission from: ${fullName} (${email})`);

    res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received. We will get back to you soon.',
      data: { id: newContact.id }
    });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({
      success: false,
      error: 'Something went wrong. Please try again later.'
    });
  }
});

// GET /api/contact - List all contacts (admin purpose)
router.get('/', (req, res) => {
  try {
    const contacts = readContacts();
    res.json({ success: true, data: contacts, count: contacts.length });
  } catch (error) {
    console.error('Error reading contacts:', error);
    res.status(500).json({ success: false, error: 'Failed to retrieve contacts.' });
  }
});

module.exports = router;
