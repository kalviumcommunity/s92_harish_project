import { useState } from 'react';
import './EventCard.css';

function EventCard({ event, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: event.title || '',
    category: event.category || '',
    department: event.department || '',
    eventDate: event.eventDate ? event.eventDate.slice(0, 10) : '',
    registrationDeadline: event.registrationDeadline
      ? event.registrationDeadline.slice(0, 10)
      : '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onUpdate(event._id, formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      title: event.title || '',
      category: event.category || '',
      department: event.department || '',
      eventDate: event.eventDate ? event.eventDate.slice(0, 10) : '',
      registrationDeadline: event.registrationDeadline
        ? event.registrationDeadline.slice(0, 10)
        : '',
    });
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="event-card">
        <div className="event-card-body">
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
          />
          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
          />
          <input
            name="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="Department"
          />
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
          />
          <input
            type="date"
            name="registrationDeadline"
            value={formData.registrationDeadline}
            onChange={handleChange}
          />
        </div>
        <div className="event-card-actions">
          <button className="event-save-btn" onClick={handleSave}>
            Save
          </button>
          <button className="event-cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="event-card">
      <div className="event-card-header">
        <span className="event-category">{event.category}</span>
        <h3 className="event-title">{event.title}</h3>
      </div>
      <div className="event-card-body">
        <p className="event-department">{event.department}</p>
        <p className="event-date">
          Event Date: {event.eventDate ? new Date(event.eventDate).toLocaleDateString() : ''}
        </p>
        <p className="event-deadline">
          Registration Deadline:{' '}
          {event.registrationDeadline
            ? new Date(event.registrationDeadline).toLocaleDateString()
            : ''}
        </p>
      </div>
      <div className="event-card-actions">
        <button className="event-rsvp-btn">RSVP Now</button>
        <button className="event-edit-btn" onClick={() => setIsEditing(true)}>
          Edit
        </button>
        <button
          className="event-delete-btn"
          onClick={() => onDelete(event._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default EventCard;