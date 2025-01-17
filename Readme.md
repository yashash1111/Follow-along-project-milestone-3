# E-Commerce Application

This repository contains the backend and frontend code for the e-commerce application project. It is a work in progress, with multiple milestones to structure and enhance the application. 

---

## Milestone 3: Backend Setup and Integration

### Summary  
In this milestone, we set up the backend for the e-commerce application, ensuring it is organized, functional, and integrated with MongoDB. The key tasks included structuring the backend, configuring the server, and handling basic errors. Below are the details of the progress made:

---

### Backend Folder Structure
The backend is structured to ensure code organization and maintainability. Below is the folder hierarchy:


---

### Node.js Server Setup
- A **Node.js** server was created using **Express.js** to handle incoming API requests.
- The server listens on a configurable port, with the default set to `5000`.
- Basic middleware was added to parse JSON request bodies.

---

### MongoDB Integration
- Connected the backend to **MongoDB** using **Mongoose**.
- MongoDB connection details are stored in the `.env` file for security.
- Verified the database connection and ensured proper error logging for connection issues.

---

### Error Handling Implementation
- Added basic error handling middleware to catch errors and provide clear messages to the client.
- Centralized error responses ensure consistent and informative feedback for debugging.

---

### How to Run the Backend Locally
1. Clone the repository:
   ```bash
   git clone <repository-link>
