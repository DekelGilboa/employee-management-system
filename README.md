# Employees Management System - Server Side

![image](https://github.com/DekelGilboa/employee-management-system-server-/assets/105774551/d0dcc5d8-83ad-41df-a745-14b5d9fe197c)

## Deploymet

The Server for the Employees Management System is deployed on AWS EC2 for production access. You can access the deployed application using the following link:
[Employees Management System - Server](http://ec2-3-141-153-254.us-east-2.compute.amazonaws.com:3000/api/v1/employees/)

This project is a server-side application that serves a web API to interact with a MongoDB database. It allows clients to send requests to the server for CRUD operations on employees, which are then performed on the database. The server offers the following options:
### 👇 Full documentation at the end of the file 👇

- **Get Single User by ID:** Send a GET request to `server/:id` to retrieve a single user by their ID.
- **Get Many with Filter and Sort:** Send a GET request to (example) `server/?sort=-e,e2,&filters=salary>1000&name=e&position=e` to get multiple users with filtering and sorting options.
- **Add New Employee:** Send a POST request to `server/` with a JSON payload to add a new employee to the database.
- **Update Employee:** Send a PUT request to `server/:id` to update an existing employee by their ID.
- **Delete Employee:** Send a DELETE request to `server/:id` to delete an employee by their ID.

## Technologies Used

- Node.js
- Express.js
- MongoDB (using Mongoose)
- Design Patterns:
  - Singleton Pattern: Used for connecting to the database.
  - Service Layer Pattern: Encapsulates business logic into reusable service classes.
  - Middleware Pattern: Handles request processing and routing.

## Features

- **Data Validation:** Models are used for data validation to ensure data integrity and handle errors effectively.
- **Error Handling:** The server implements robust error handling mechanisms to provide meaningful error messages and responses.
- **Deployment:** The server is deployed on AWS EC2 for production access.

## Getting Started

To run the server locally or contribute to it, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/employees-management-system-server.git
   cd employees-management-system-server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (if required) for MongoDB connection, server port, etc.

4. Start the server:
   ```bash
   node app
   ```

5. The server will be running at `http://localhost:3000` by default.

## API Documentation

### Base URL
The base URL for accessing the Employees Management System API is `http://ec2-3-141-153-254.us-east-2.compute.amazonaws.com:3000/api/v1/employees/`.

## Endpoints

### Get Single User by ID

- **URL:** `/endpoint/:id`
- **Method:** GET
- **Description:** Retrieves a single user by their ID.
- **Parameters:**
  - `id` (required): The ID of the user to retrieve.
- **Example Request:**
  ```http
  GET /endpoint/662512f1d0
  ```
- **Example Response:**
  ```json
  {
    "msg": "Employee has been found",
    "count": 1,
    "data": [
      {
        "_id": "662512f1d0",
        "name": "Dekel",
        "position": "CTO",
        "salary": 10000,
        "__v": 0
      }
    ]   
  }
  ```

### Get Many with Filter and Sort

- **URL:** `/endpoint`
- **Method:** GET
- **Description:** Retrieves multiple users with filtering and sorting options.
- **Query Parameters:**
  - `sort` (optional): Sorts the results based on specified fields. Use `-` prefix for descending order.
  - `filters` (optional): Filters the results based on specified conditions. Numeric filters on `salary` can be applied using the following operators:
    - `=`: Equal to (e.g., `salary=50000`)
    - `!=`: Not equal to (e.g., `salary!=20000`)
    - `<`: Less than (e.g., `salary=<10000`)
    - `<=`: Less than or equal to (e.g., `salary<=50000`)
    - `>`: Greater than (e.g., `salary>1000`)
    - `>=`: Greater than or equal to (e.g., `salary>=30000`)
    - 
- **Example Request:**
  ```http
  GET /endpoint/?sort=-salary&filters=salary>20000&position=Manager
  ```
- **Example Response:**
  ```json
  {
    "msg": "Employees were found",
    "count": 2,
    "data": [
      {
        "_id": "662512f1d0d0eb8c017a21da",
        "name": "John Doe",
        "position": "Manager",
        "salary": 60000,
        "__v": 0
      },
      {
        "_id": "789012",
        "name": "Jane Smith",
        "position": "Manager",
        "salary": 50000,
        "__v": 0
      }
    ]
  }
  ```

### Add New Employee

- **URL:** `/endpoint`
- **Method:** POST
- **Description:** Adds a new employee to the database.
- **Example Request:**
  ```http
  POST /endpoint
  Content-Type: application/json

  {
    "name": "New Employee",
    "position": "Intern",
    "salary": 30000
  }
  ```
- **Example Response:**
  ```json
  {
    "msg": "Employee has been Added",
    "data": [
      {
        "_id": "123456",
        "name": "New Employee",
        "position": "Intern",
        "salary": 30000,
        "__v": 0
      },
    ]
  }
  ```

### Update Employee

- **URL:** `/endpoint/:id`
- **Method:** PUT
- **Description:** Updates an existing employee by their ID.
- **Parameters:**
  - `id` (required): The ID of the employee to update.
- **Example Request:**
  ```http
  PUT /endpoint/123456
  Content-Type: application/json

  {
    "name": "Updated Employee",
    "position": "Senior Developer",
    "salary": 80000
  }
  ```
- **Example Response:**
  ```json
  {
    "msg": "Employee has been updated",
    "data": [
      {
      "id": "123456",
      "name": "Updated Employee",
      "position": "Senior Developer",
      "salary": 80000
      }
    ]
  }
  ```

### Delete Employee

- **URL:** `/endpoint/:id`
- **Method:** DELETE
- **Description:** Deletes an employee by their ID.
- **Parameters:**
  - `id` (required): The ID of the employee to delete.
- **Example Request:**
  ```http
  DELETE /endpoint/123456
  ```
- **Example Response:**
  ```json
  {
    "msg": "Employee has been deleted",
    "data": [
      {
      "id": "123456",
      "name": "Employee has been deleted",
      "position": "Senior Developer",
      "salary": 80000
      }
    ]
  }
  
  ```
