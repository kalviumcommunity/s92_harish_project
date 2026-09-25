const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// Create a new event (write)
router.post('/', async (req, res) => {
  try {
    const event = new Event(req.body);
    const savedEvent = await event.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all events (read)
router.get('/', async (req, res) => {
  try {
    const events = await Event.find().populate('organizer', 'name email');
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single event by ID (read)
router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get events filtered by category (read)
router.get('/category/:category', async (req, res) => {
  try {
    const events = await Event.find({ category: req.params.category });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get events filtered by department (read)
router.get('/department/:department', async (req, res) => {
  try {
    const events = await Event.find({ department: req.params.department });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update an existing event (write)
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      category,
      department,
      eligibility,
      eventDate,
      registrationDeadline,
      organizer,
      status
    } = req.body;

    if (!title || !eventDate) {
      return res.status(400).json({ message: 'title and eventDate are required' });
    }

    const updatedEvent = await Event.findByIdAndUpdate(
      id,
      { title, description, category, department, eligibility, eventDate, registrationDeadline, organizer, status },
      { new: true, runValidators: true }
    );

    if (!updatedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;