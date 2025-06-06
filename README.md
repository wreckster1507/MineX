# MineX Application

## Overview
MineX is a comprehensive application designed to streamline shift logging and summary generation processes. It consists of a backend and frontend, providing a seamless user experience for managing shift logs, generating summaries, and user authentication.

## Features

### Backend
- **Authentication**: Secure user login and registration.
- **Shift Log Management**: Create, update, and manage shift logs.
- **Summary Generation**: Generate summaries based on shift logs.
- **Database Integration**: Connects to a database for storing user and shift log data.

### Frontend
- **User Interface**: Intuitive and responsive UI built with React and Tailwind CSS.
- **Shift Log Form**: Allows users to input shift log details.
- **Summary Page**: Displays generated summaries.
- **Authentication Pages**: Login and registration pages for user access.
- **Error Handling**: Page not found and loader components for better user experience.

## Technologies Used

### Backend
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for data storage.
- **Docker**: Containerization for easy deployment.

### Frontend
- **React**: JavaScript library for building user interfaces.
- **Vite**: Fast build tool for modern web projects.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Installation

### Prerequisites
- Node.js
- Docker

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/wreckster1507/MineX.git
   ```
2. Navigate to the backend folder and install dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Navigate to the frontend folder and install dependencies:
   ```bash
   cd ../frontend
   npm install
   ```
4. Start the backend server:
   ```bash
   cd ../backend
   npm start
   ```
5. Start the frontend development server:
   ```bash
   cd ../frontend
   npm run dev
   ```

## Usage
- Access the application via the frontend development server.
- Register or log in to manage shift logs and generate summaries.

## Contributing
Feel free to fork the repository and submit pull requests for improvements or new features.

## License
This project is licensed under the MIT License.
