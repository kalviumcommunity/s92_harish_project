import './EventCard.css';

function EventCard({ title, category, department, date, deadline }) {
  return (
    <div className="event-card">
      <div className="event-card-header">
        <span className="event-category">{category}</span>
        <h3 className="event-title">{title}</h3>
      </div>
      <div className="event-card-body">
        <p className="event-department">{department}</p>
        <p className="event-date">Event Date: {date}</p>
        <p className="event-deadline">Registration Deadline: {deadline}</p>
      </div>
      <button className="event-rsvp-btn">RSVP Now</button>
    </div>
  );
}

export default EventCard;