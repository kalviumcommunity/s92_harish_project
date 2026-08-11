# 🎓 Campus Connect

> **Discover every campus opportunity in one place.**  
> A centralized platform that helps university students find workshops, hackathons, competitions, internships, seminars, and cultural events without missing important opportunities.

---

## 📖 Overview

# CampusConnect

Campus event discovery platform.

Universities host numerous academic, technical, and cultural events throughout the year. However, event announcements are often scattered across WhatsApp groups, emails, notice boards, Telegram channels, and Learning Management Systems (LMS). As a result, students frequently miss valuable opportunities.

**Campus Connect** solves this problem by bringing all campus events into a single platform where students can easily discover, explore, and register for events based on their interests.

---

## ❓ Problem Statement

Students often struggle to stay informed about campus events because:

- 📢 Event announcements are spread across multiple platforms.
- ⏰ Registration deadlines are easily missed.
- 🔍 Finding relevant events requires checking several sources.
- 🚀 Students lose opportunities due to lack of awareness.
- 📈 Event organizers face lower participation because announcements don't reach everyone.

---

## 💡 Our Solution

Campus Connect provides a centralized event discovery platform that simplifies the way students and organizers interact.

Students can:
- Browse all upcoming campus events.
- Search and filter events by category.
- Register directly through the platform.
- Save favorite events.
- Receive reminders before registration deadlines.

Organizers can:
- Create and manage events.
- Monitor registrations.
- Update event details.
- Reach a wider student audience.

Administrators can:
- Manage users.
- Approve or remove events.
- Monitor platform activity.

---

# ✨ Key Features

## 👨‍🎓 Student Portal

- Secure Login & Registration
- Browse Upcoming Events
- Search Events
- Category Filters
- Event Details Page
- Register for Events
- Bookmark Favorite Events
- Deadline Reminders
- Personalized Recommendations *(Future Enhancement)*

---

## 🎯 Organizer Portal

- Organizer Authentication
- Create New Events
- Edit Existing Events
- Delete Events
- Manage Participants
- Upload Event Posters

---

## 🛡️ Admin Dashboard

- User Management
- Event Approval
- Content Moderation
- Dashboard Analytics

---

# 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React.js |
| Styling | Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Authentication | JWT |
| API Testing | Postman |
| Version Control | Git & GitHub |

---

# 🏗️ System Architecture

```
                +----------------------+
                |      Students        |
                +----------+-----------+
                           |
                           |
                +----------v-----------+
                |     React Frontend   |
                +----------+-----------+
                           |
                    REST APIs
                           |
                +----------v-----------+
                | Express + Node.js    |
                +----------+-----------+
                           |
                +----------v-----------+
                |      MongoDB         |
                +----------------------+
```

---

# 📂 Project Structure

```
Campus-Connect/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── services/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── server.js
│   └── package.json
│
├── README.md
└── .gitignore
```

---

# 🚀 Getting Started

## Clone the Repository

```bash
git clone https://github.com/your-username/campus-connect.git
```

```bash
cd campus-connect
```

---

## Install Dependencies

### Frontend

```bash
cd client
npm install
```

### Backend

```bash
cd ../server
npm install
```

---

## Run the Application

### Start Backend

```bash
npm run dev
```

### Start Frontend

```bash
cd ../client
npm run dev
```

---

# 🎨 Screenshots

> Screenshots will be added as the project progresses.

- Login Page
- Student Dashboard
- Event Listing
- Event Details
- Organizer Dashboard
- Admin Dashboard

---

# 🗺️ Development Roadmap

| Phase | Status |
|--------|--------|
| Project Planning | ✅ Completed |
| Research & Requirement Analysis | ✅ Completed |
| UI/UX Design | ⏳ In Progress |
| Frontend Development | ⬜ Planned |
| Backend Development | ⬜ Planned |
| Database Integration | ⬜ Planned |
| Authentication | ⬜ Planned |
| Event Management Module | ⬜ Planned |
| Testing & Debugging | ⬜ Planned |
| Deployment | ⬜ Planned |

---

# 📅 Week-by-Week Timeline

## Week 1
- Project research
- Problem analysis
- Feature planning
- GitHub repository setup
- README creation

**Deliverable:** Project planning completed

---

## Week 2
- UI wireframes
- High-fidelity Figma designs
- User flow planning

**Deliverable:** UI/UX design completed

---

## Week 3
- React project setup
- Build reusable components
- Develop Home, Login, Signup, and Event pages

**Deliverable:** Frontend MVP

---

## Week 4
- Express server setup
- MongoDB integration
- User authentication
- REST API development

**Deliverable:** Backend ready

---

## Week 5
- Connect frontend with backend
- Event CRUD operations
- Search & filter
- Registration module

**Deliverable:** Full-stack integration

---

## Week 6
- Testing
- Bug fixes
- Performance optimization
- Validation

**Deliverable:** Stable application

---

## Week 7
- UI improvements
- Notifications
- Code cleanup
- Documentation updates

**Deliverable:** Feature-complete application

---

## Week 8
- Deployment
- Final testing
- Presentation preparation
- Documentation review

**Deliverable:** Final project submission

---

# 🔮 Future Enhancements

- 🤖 AI-powered event recommendations
- 📅 Google Calendar integration
- 📲 Push notifications
- 📍 Interactive campus event map
- 📷 QR Code attendance system
- 🏆 Certificate generation
- ⭐ Event ratings and feedback
- 📱 Mobile application
- 💬 Organizer announcements
- 📊 Analytics dashboard

---

# 🎯 Expected Outcomes

- Increased student participation in campus events.
- A centralized platform for all university activities.
- Improved communication between organizers and students.
- Easier event management for clubs and faculty.
- Better visibility of academic and extracurricular opportunities.

---

# 👥 Team

| Name | Role |
|------|------|
| Harish | Full Stack Developer |

> *Add your teammates here if you're working in a group.*

---

# 🤝 Contributing

Contributions, suggestions, and feedback are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Open a Pull Request.

---

# 📄 License

This project is developed for **educational purposes** as part of a university academic project.

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and support the development of **Campus Connect**!

## Version - 1.00


