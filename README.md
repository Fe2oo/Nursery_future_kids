This is a microservices-based e-learning system for a nursery that allows seamless learning and management of content. The system is built using NestJS for the backend services, React for the frontend, and MongoDB for the database.

Project Structure
Backend (NestJS):
A set of microservices for user management, course management, content delivery, and notifications.
Each microservice is responsible for a specific domain and communicates through an API Gateway.
Frontend (React):
The React application interacts with the backend via APIs to provide users with an interactive learning experience.
Database (MongoDB):
MongoDB stores user data, course content, and related information in a scalable way.
Features
User Management:
Register and authenticate users (students, parents, teachers).
Role-based access control (admin, teacher, student).
Course Management:
Teachers can create, update, and manage courses.
Students can browse and enroll in courses.
Content Delivery:
Deliver interactive learning materials (videos, quizzes, reading materials).
Notifications:
Push notifications to keep users informed about course updates or important announcements.
