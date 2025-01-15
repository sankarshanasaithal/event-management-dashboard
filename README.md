
# Event Management Dashboard

A robust event management system with features for managing events, attendees, and tasks. The application uses a React frontend and a Node.js/Express backend with JWT-based authentication.

## Features

- **Login/Logout** using JWT-based authentication.
- Manage **Events**, **Attendees**, and **Tasks** via an intuitive dashboard.
- **Protected routes** ensuring only authenticated users access the dashboard.
- User-friendly **responsive design** with Tailwind CSS.

---

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MySQL](https://www.mysql.com/)

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/event-management-dashboard.git
cd event-management-dashboard
```

### 2. Setup Backend

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install 
   ```

3. Configure `.env` file:
   - Create a `.env` file in the `backend` directory and add the following variables:
     ```env
     PORT=5000
     DB_HOST=localhost
     DB_USER=your-mysql-username
     DB_PASSWORD=your-mysql-password
     DB_NAME=event_management
     JWT_SECRET=your-secret-key
     ```

4. Create the database:
   - Log in to MySQL and run:
     ```sql
     CREATE DATABASE event_management;
     ```

5. Start the backend server:
   ```bash
   npm run dev
   ```

### 3. Setup Frontend

1. Navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure `.env` file:
   - Create a `.env` file in the `frontend` directory and add:
     ```env
     REACT_APP_API_URL=http://localhost:5000
     ```

4. Start the frontend development server:
   ```bash
   npm start
   ```

5. Access the app at [http://localhost:3000](http://localhost:3000).

---

## API Documentation

### Base URL

All API endpoints are prefixed with: `http://localhost:5000/api`

### Authentication

#### Login
- **POST** `/api/auth/login`
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "token": "your-jwt-token"
  }
  ```

---

### Events

#### Get All Events
- **GET** `/api/events`
- **Response:**
  ```json
  [
    {
      "id": 1,
      "name": "Tech Conference",
      "description": "A conference about technology.",
      "location": "New York",
      "date": "2025-02-15"
    }
  ]
  ```

#### Create Event
- **POST** `/api/events`
- **Request Body:**
  ```json
  {
    "name": "Tech Conference",
    "description": "A conference about technology.",
    "location": "New York",
    "date": "2025-02-15"
  }
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "name": "Tech Conference"
  }
  ```

---

### Attendees

#### Get All Attendees
- **GET** `/api/attendees`
- **Response:**
  ```json
  [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "role": "Speaker"
    }
  ]
  ```

#### Add Attendee
- **POST** `/api/attendees`
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "role": "Speaker"
  }
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "name": "John Doe"
  }
  ```

#### Delete Attendee
- **DELETE** `/api/attendees/:id`
- **Response:**
  ```json
  {
    "message": "Attendee deleted successfully."
  }
  ```

---

### Tasks

#### Get All Tasks
- **GET** `/api/tasks`
- **Response:**
  ```json
  [
    {
      "id": 1,
      "title": "Prepare Slides",
      "status": "pending",
      "progress": 50
    }
  ]
  ```

#### Create Task
- **POST** `/api/tasks`
- **Request Body:**
  ```json
  {
    "title": "Prepare Slides",
    "event_id": 1,
    "assignee_id": 1
  }
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "title": "Prepare Slides"
  }
  ```

#### Delete Task
- **DELETE** `/api/tasks/:id`
- **Response:**
  ```json
  {
    "message": "Task deleted successfully."
  }
  ```

---

## Folder Structure

```
event-management-dashboard/
├── backend/      # Node.js backend
├── frontend/     # React frontend
```

---

## Scripts

### Backend
- **Start Backend:** `npm run dev`

### Frontend
- **Start Frontend:** `npm start`
