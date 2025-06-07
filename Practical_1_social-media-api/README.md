# Social Media API

## Overview

This project implements a RESTful API for a social media platform (similar to Instagram), using **Node.js** and **Express**. It supports CRUD operations for core resources: Users, Posts, Comments, Likes, and Followers. The API is built following REST principles, with proper HTTP methods, status codes, content negotiation, and structured error handling.

---

## Objectives

* Design RESTful endpoints for all resources.
* Implement Express-based API with best practices.
* Handle different MIME types using content negotiation.
* Create and use middleware for error handling.
* Serve basic HTML API documentation.

---

## Prerequisites

* Node.js installed on your machine
* npm (Node package manager)

---

## Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/social-media-api.git
   cd social-media-api
   ```

2. **Install project dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```
   PORT=3000
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

---

## API Resources and Endpoints

Each resource has the following operations:

* **GET /resource** – List all items
* **GET /resource/\:id** – Get a single item by ID
* **POST /resource** – Create a new item
* **PUT /resource/\:id** – Update an existing item
* **DELETE /resource/\:id** – Delete an item

### Example: Users API

* `GET /users`
* `POST /users`
* `GET /users/:id`
* `PUT /users/:id`
* `DELETE /users/:id`

The same structure applies to: `/posts`, `/comments`, `/likes`, `/followers`

---

## Features Implemented

* RESTful routing with Express
* Mock data (`utils/mockData.js`) for all resources
* Content negotiation using `Accept` header
* Centralized error handling with custom middleware
* Async handler utility for cleaner controller logic
* Static API documentation page at `/docs`

---

## Sample Request

**POST /users**

```json
{
  "username": "new_user",
  "email": "new@example.com",
  "password": "securepassword",
  "full_name": "New User",
  "bio": "Excited to be here!"
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "id": 51,
    "username": "new_user",
    "full_name": "New User",
    "created_at": "2023-03-20"
  }
}
```

---

## Running Documentation

To view the API documentation:

```
http://localhost:3000/docs
```

---

## Notes

* All resources use mock data for simulation purposes.
* Token-based authorization is assumed in headers for protected routes.
* The server runs by default on port 3000.

---

