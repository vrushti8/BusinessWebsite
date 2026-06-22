# Business Website

A simple business website with a React frontend and an Express backend. The frontend provides pages for Home, About, Menu, Contact, and Reservations. The backend stores reservation requests and contact messages in text files.

## Project Structure

- `frontend/` - React application built with `create-react-app`
  - `public/` - static HTML and asset files
  - `src/` - React components and styling
    - `App.jsx`
    - `index.js`
    - `style.css`
    - `components/`
      - `About.jsx`
      - `Contact.jsx`
      - `Footer.jsx`
      - `Home.jsx`
      - `Menu.jsx`
      - `Navbar.jsx`
      - `Reservation.jsx`

- `backend/` - Express server
  - `server.js` - backend API endpoints
  - `contacts.txt` - saved contact messages
  - `reservations.txt` - saved reservation entries

## Features

- Responsive landing page and navigation
- About section for business information
- Menu display
- Reservation form to submit booking requests
- Contact form to send messages
- Backend API saves data to text files

## Getting Started

### Prerequisites

- Node.js installed
- npm available

### Run the backend

1. Open a terminal in the `backend/` folder
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. The backend will run at `http://localhost:5000`

### Run the frontend

1. Open a terminal in the `frontend/` folder
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm start
   ```
4. The frontend will run at `http://localhost:3000`

## API Endpoints

- `POST /reserve` - save a reservation
- `POST /contact` - save a contact message

## Notes

- Data is stored in plain text files: `backend/reservations.txt` and `backend/contacts.txt`
- In a production application, replace text storage with a database for better scalability and reliability


