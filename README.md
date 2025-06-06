
# 🚨 Alarm System Backend

A robust backend system designed to manage alarm events, user authentication, and system configurations for a comprehensive alarm management solution.

---

## 🧰 Tech Stack

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MySQL**: Relational database management system.
- **Sequelize**: Promise-based Node.js ORM for MySQL.
- **JWT**: JSON Web Tokens for authentication.
- **dotenv**: Module to load environment variables.

---

## 📁 Project Structure

```
AlarmSystem-backend/
├── Controller/        # Business logic for routes
├── Database/          # Database connection and models
├── Routes/            # API route definitions
├── alarm_system.sql   # SQL script to set up the database
├── app.js             # Initializes the Express app
├── server.js          # Entry point of the application
├── package.json       # Project metadata and dependencies
└── .gitignore         # Specifies files to ignore in version control
```

---

## 🔧 Setup & Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/NPSarode/AlarmSystem-backend.git
   cd AlarmSystem-backend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure environment variables**:

   Create a `.env` file in the root directory and add your environment-specific variables:

   ```env
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   JWT_SECRET=your_jwt_secret
   ```

4. **Set up the database**:

   - Ensure PostgreSQL is running.
   - Execute the `alarm_system.sql` script to create the necessary database and tables.

5. **Start the server**:

   ```bash
   npm start
   ```

   The server will start on the port specified in your `.env` file or default to `3000`.

---

## 📬 API Endpoints

### Authentication

- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Authenticate a user and return a JWT.

### Alarms

- `GET /api/alarms`: Retrieve all alarms.
- `POST /api/alarms`: Create a new alarm.
- `PUT /api/alarms/:id`: Update an existing alarm.
- `DELETE /api/alarms/:id`: Delete an alarm.

### Users

- `GET /api/users`: Retrieve all users.
- `GET /api/users/:id`: Retrieve a specific user.
- `PUT /api/users/:id`: Update user information.
- `DELETE /api/users/:id`: Delete a user.

*Note: All routes (except for authentication) are protected and require a valid JWT.*

---

## 🛡️ Security

- **Authentication**: Implemented using JWT to ensure secure access to protected routes.
- **Password Hashing**: User passwords are hashed using bcrypt before storage.
- **Input Validation**: All inputs are validated to prevent SQL injection and other common vulnerabilities.

---

## 🚀 Future Enhancements

- **Role-Based Access Control**: Implement roles (e.g., admin, user) to manage permissions.
- **Real-Time Notifications**: Integrate WebSocket or similar technologies for real-time alarm notifications.
- **Logging**: Implement comprehensive logging for monitoring and debugging.
- **Testing**: Add unit and integration tests to ensure code reliability.

---







*Thank you for checking out the Alarm System Backend! If you have any questions or feedback, feel free to reach out.*
