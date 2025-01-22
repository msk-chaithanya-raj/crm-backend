# CRM Backend System

This is a backend system for a basic CRM (Customer Relationship Management) application built using **Node.js**, **Express**, and **SQLite**. It provides APIs for managing customer data and user authentication. The system is designed to be scalable, secure, and well-documented.

---

## Features

1. **Customer Management**:
   - Create, Read, Update, and Delete (CRUD) operations for customer data.
   - Each customer has the following fields:
     - `id` (unique identifier)
     - `name` (string, required)
     - `email` (string, required, unique)
     - `phone` (string, required)
     - `company` (string, optional)
     - `created_at` (timestamp, auto-generated)
     - `updated_at` (timestamp, auto-updated)
2. **User Authentication**:
   - User registration and login endpoints.
   - Password hashing for secure storage.
   - JWT-based authentication for API requests.
3. **Search and Filtering**:
   - Search customers by name, email, or phone.
   - Filter customers by company.
4. **API Documentation**:
   - Detailed API documentation using Swagger/OpenAPI.

---

## Technologies Used

- **Backend**: Node.js, Express
- **Database**: SQLite
- **Authentication**: JSON Web Tokens (JWT)
- **API Documentation**: Swagger/OpenAPI
- **Password Hashing**: bcryptjs
- **Error Handling**: Custom middleware for validation and error responses

---

## Setup Instructions

### Prerequisites

1. Install [Node.js](https://nodejs.org/) (v18 or higher).
2. Install [SQLite](https://sqlite.org/download.html).
3. Install [Git](https://git-scm.com/).

### Steps to Run the Project

1. **Clone the Repository**:
   git clone https://github.com/your-username/crm-backend.git
   cd crm-backend
2. **Install Dependencies**:
   npm install
3. **Set Up the Database**:
   Run the following command to initialize the SQLite database:
   sqlite3 crm.db < database.sql
4. **Start the Server**:
   npm run dev
   The server will start at http://localhost:3000.

5. **Access API Documentation**:
   Open your browser and navigate to http://localhost:3000/api-docs.
   Explore the API endpoints using Swagger UI.

---

## API Endpoints

### Authentication

**Register a User**:
POST /api/auth/register
Request Body:
{
"username": "admin",
"password": "password123"
}

**Login**:
POST /api/auth/login
Request Body:
{
"username": "admin",
"password": "password123"
}

### Customer Management

**Create a Customer**:
POST /api/customers
Request Body:
{
"name": "John Doe",
"email": "john@example.com",
"phone": "1234567890",
"company": "ABC Corp"
}

**Get All Customers**:
GET /api/customers
Query Parameters:

- search (optional)
- company (optional)

**Get a Single Customer**:
GET /api/customers/:id

**Update a Customer**:
PUT /api/customers/:id
Request Body:
{
"name": "John Doe",
"email": "john@example.com",
"phone": "1234567890",
"company": "XYZ Corp"
}

**Delete a Customer**:
DELETE /api/customers/:id

---

## Database Schema

### Tables

**Users**:

- id (Primary Key)
- username (Unique)
- password (Hashed)
- created_at

**Customers**:

- id (Primary Key)
- name
- email (Unique)
- phone
- company
- created_at
- updated_at
- user_id (Foreign Key to users)

---
