# College Staff Leave Management Portal

A simple portal for college staff to apply for leave and allow other faculty members to volunteer as substitutes.

---

## 🌟 *Key Features*

### ⿡ *User Authentication*
- *Two user roles*:
  - *Teaching Staff*: Can apply for leave.
  - *Admin (Head of Department)*: Can approve/reject leave applications and view reports.
- *Login options*:
  - Email/password
  - Google login (via Firebase Auth)

### ⿢ *Leave Application System*
- *Leave Application*:
  - Staff can apply for leave by specifying:
    - Date & Time of leave
    - Reason for leave
    - Subjects/Periods affected
- *Status Tracking: Track leave status from *Pending to Approved/Rejected.

### ⿣ *Substitute Faculty Selection*
- *Substitute Faculty System*:
  - Available faculty members can see open leave requests and choose to cover affected periods.
  - A faculty member can accept multiple periods, provided there is no overlap.
  - Once a period is taken, it is marked as "assigned."

### ⿤ *Dashboard for Staff & Admins*
- *Staff Dashboard*:
  - View applied leaves, track approved leave, and see accepted substitutes.
- *Admin Dashboard*:
  - View and manage pending leave approvals.
  - Track substitute assignments.

### ⿥ *Notifications (Optional)*
- *Email Notifications*:
  - Notifications are sent when a leave request is approved or a substitute is assigned.

---

## 🛠 *Tech Stack*

### *Frontend*:
- *Framework*: React (Next.js)
- *UI Library*: Tailwind CSS

### *Backend*:
- PlanetScale (MySQL) or PostgreSQL

### *Authentication*:
- Firebase Authentication

### *Hosting*:
- *Frontend*: Vercel 

---