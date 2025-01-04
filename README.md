#Micro Instagram Backend

Overview

This is a Node.js-based backend application for a micro Instagram-like platform. The application provides RESTful APIs for managing users and their posts, including creating, editing, and deleting posts and retrieving all users or posts.


---

Features

User management with unique mobile numbers.

Post management with support for images.

APIs for CRUD operations on users and posts.

Relational database schema using Sequelize ORM.

Unit tests for APIs.

Designed following REST API best practices.



---

Tech Stack

Node.js: Runtime environment.

Express.js: Web framework for routing and middleware.

Sequelize: ORM for database operations.

PostgreSQL: Relational database (can be replaced with MySQL if needed).

Mocha/Chai or Jest: For unit testing.

dotenv: For environment variable management.



---

Prerequisites

1. Node.js: Ensure you have Node.js installed (version 14 or later).


2. Database: Install PostgreSQL or MySQL.


3. Git: Ensure Git is installed for cloning the repository.




---

Setup and Installation

1. Clone the repository:

git clone <repository_url>
cd micro-instagram-backend


2. Install dependencies:

npm install


3. Configure the environment:

Create a .env file in the root directory with the following details:

DB_HOST=localhost
DB_PORT=5432
DB_NAME=micro_instagram
DB_USER=your_db_user
DB_PASSWORD=your_db_password
PORT=3000



4. Run database migrations:

npx sequelize-cli db:migrate


5. Start the server:

npm start


6. (Optional) Run the development server with nodemon:

npm run dev




---

Available Scripts

Start the application:

npm start

Run development server:

npm run dev

Run tests:

npm test



---

API Endpoints

Users

Posts


---

Testing

Run the tests using the following command:

npm test


---

Folder Structure

micro-instagram-backend/
├── controllers/       # API controllers
├── db/                # Database connection
├── models/            # Sequelize models
├── routes/            # API route definitions
├── tests/             # Unit tests
├── migrations/        # Sequelize migrations
├── .env               # Environment variables
├── .gitignore         # Ignored files for Git
├── package.json       # Dependencies and scripts
├── README.md          # Project documentation
├── server.js          # Entry point
└── app.js             # App initialization


---

To-Do

Add more robust error handling.

Integrate with a cloud storage solution for images.

Implement authentication andAuthorization 


