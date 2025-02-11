import React from 'react';

const AboutPage = () => {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.heroSection}>
        <h1 style={styles.title}>College Staff Leave Management Portal</h1>
        <p style={styles.subTitle}>A simple portal to manage leave requests and substitutes for college staff</p>
      </div>
      
      <div style={styles.content}>
        <section style={styles.section}>
          <h2 style={styles.heading}>How to Use the Portal</h2>
          <p style={styles.text}>
            The College Staff Leave Management Portal allows college staff to apply for leave and for other faculty members to volunteer to cover their periods.
            Here's a guide on how to get started:
          </p>

          <h3 style={styles.subHeading}>1. User Authentication</h3>
          <p style={styles.text}>
            - **Teaching Staff** can log in and apply for leave.
            - **Admin (Head of Department)** can approve or reject leave requests and view reports.
            You can log in via email/password or use Google Authentication through Firebase Auth.
          </p>

          <h3 style={styles.subHeading}>2. Applying for Leave</h3>
          <p style={styles.text}>
            Once logged in as a teaching staff member:
            <ul style={styles.list}>
              <li>Choose the **Date & Time** for your leave.</li>
              <li>Provide a **Reason** for your leave.</li>
              <li>Specify which **Subjects/Periods** are affected by your absence.</li>
            </ul>
            After submission, your leave status will be shown as **Pending**, and you will receive an email notification when your leave is approved or rejected.
          </p>

          <h3 style={styles.subHeading}>3. Substitutes for Your Classes</h3>
          <p style={styles.text}>
            If you're on leave, other staff members can volunteer to cover your periods. Here's how it works:
            <ul style={styles.list}>
              <li>Other faculty members will see the open leave requests and choose to take the class.</li>
              <li>A staff member can accept multiple periods, but the periods cannot overlap.</li>
              <li>Once a period is assigned, it will be marked as **taken** and cannot be selected again.</li>
            </ul>
          </p>

          <h3 style={styles.subHeading}>4. Dashboard</h3>
          <p style={styles.text}>
            - **Staff View**: View your applied leaves and accepted substitutes.
            - **Admin View**: View pending leave requests, approve/reject them, and track substitutes.
          </p>

          <h3 style={styles.subHeading}>5. Notifications</h3>
          <p style={styles.text}>
            - **Email notifications** are sent to staff members when their leave is approved or when a substitute is found to cover their periods.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>Tech Stack</h2>
          <p style={styles.text}>
            The portal uses the following technologies:
          </p>
          <ul style={styles.list}>
            <li><strong>Frontend:</strong> React (Next.js), Tailwind CSS</li>
            <li><strong>Backend:</strong> Option 1 (SQL) – PlanetScale (MySQL) or PostgreSQL; Option 2 (NoSQL) – Firebase Firestore</li>
            <li><strong>Authentication:</strong> Firebase Auth (Google & Email Login)</li>
            <li><strong>Hosting:</strong> Frontend: Vercel (Free-tier), Backend: Railway (Free-tier for databases)</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>Development Roadmap</h2>
          <p style={styles.text}>
            The development of the portal follows this roadmap:
          </p>
          <ul style={styles.list}>
            <li><strong>Week 1:</strong> Set up frontend, Firebase authentication, and create staff & admin roles.</li>
            <li><strong>Days 3-4:</strong> Build leave application form and approval system, store leave data in MySQL/Firestore.</li>
            <li><strong>Day 5:</strong> Develop substitute selection system and update UI.</li>
            <li><strong>Day 6:</strong> Add dashboard & email notifications.</li>
            <li><strong>Day 7:</strong> Final testing and deployment.</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>Monetization Ideas</h2>
          <p style={styles.text}>
            If desired, the portal can be monetized by offering premium features:
            <ul style={styles.list}>
              <li>Analytics for colleges.</li>
              <li>Custom branding for different institutions.</li>
            </ul>
          </p>
        </section>
      </div>

      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2025 College Staff Leave Management Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  pageContainer: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f4f8',
    color: '#333',
    padding: '20px',
    textAlign: 'center',
  },
  heroSection: {
    backgroundColor: '#4A90E2',
    color: '#fff',
    padding: '40px 20px',
    borderRadius: '8px',
    marginBottom: '30px',
  },
  title: {
    fontSize: '3rem',
    margin: '0',
  },
  subTitle: {
    fontSize: '1.25rem',
    fontWeight: '300',
  },
  content: {
    margin: '0 auto',
    maxWidth: '900px',
    textAlign: 'left',
  },
  section: {
    marginBottom: '30px',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '10px',
    color: '#2c3e50',
  },
  subHeading: {
    fontSize: '1.5rem',
    marginTop: '20px',
    marginBottom: '10px',
    color: '#2c3e50',
  },
  text: {
    fontSize: '1rem',
    lineHeight: '1.5',
    color: '#555',
  },
  list: {
    listStyleType: 'disc',
    marginLeft: '20px',
    textAlign: 'left',
  },
  footer: {
    marginTop: '40px',
    backgroundColor: '#2c3e50',
    color: '#fff',
    padding: '20px 0',
  },
  footerText: {
    fontSize: '1rem',
    margin: '0',
  },
};

export default AboutPage;
