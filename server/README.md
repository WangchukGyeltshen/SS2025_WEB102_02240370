# TikTok REST API

## Overview

This project implements a RESTful API for a TikTok-style platform using **Node.js** and **Express**. It includes endpoints for managing videos, users, and comments, with in-memory data handling. The backend is designed to work seamlessly with a frontend like **Next.js**.

---

## API Resources and Endpoints

### Videos

* `GET /api/videos` – Get all videos
* `GET /api/videos/:id` – Get video by ID
* `POST /api/videos` – Create a new video
* `PUT /api/videos/:id` – Update a video
* `DELETE /api/videos/:id` – Delete a video
* `GET /api/videos/:id/comments` – Get comments for a video
* `GET /api/videos/:id/likes` – Get likes for a video
* `POST /api/videos/:id/likes` – Like a video
* `DELETE /api/videos/:id/likes` – Unlike a video

### Users

* `GET /api/users` – Get all users
* `GET /api/users/:id` – Get user by ID
* `POST /api/users` – Create user
* `PUT /api/users/:id` – Update user
* `DELETE /api/users/:id` – Delete user
* `GET /api/users/:id/videos` – Get user's videos
* `GET /api/users/:id/followers` – Get user's followers
* `POST /api/users/:id/followers` – Follow user
* `DELETE /api/users/:id/followers` – Unfollow user
* `GET /api/users/:id/following` – Get users that the user is following

### Comments

* `GET /api/comments` – Get all comments
* `GET /api/comments/:id` – Get comment by ID
* `POST /api/comments` – Create a comment
* `PUT /api/comments/:id` – Update a comment
* `DELETE /api/comments/:id` – Delete a comment
* `GET /api/comments/:id/likes` – Get likes on a comment
* `POST /api/comments/:id/likes` – Like a comment
* `DELETE /api/comments/:id/likes` – Unlike a comment

---

## Setup Instructions

1. **Create and initialize the project**

```bash
mkdir -p server
cd server
npm init -y
```

2. **Install required dependencies**

```bash
npm install express cors morgan body-parser dotenv
npm install --save-dev nodemon
```

3. **Create project structure**

```bash
mkdir -p src/controllers src/routes src/models src/middleware src/utils
```

4. **Add core files**

```bash
touch src/app.js src/server.js .env
```

5. **Configure .env**

```
PORT=3000
```

6. **Run the application**

```bash
npm run dev
```

---

## Testing the API

Use Postman or curl to test the following:

* Get all users:

  ```bash
  curl -X GET http://localhost:3000/api/users
  ```
* Get all videos:

  ```bash
  curl -X GET http://localhost:3000/api/videos
  ```
* Get video by ID:

  ```bash
  curl -X GET http://localhost:3000/api/videos/1
  ```
* Get user's videos:

  ```bash
  curl -X GET http://localhost:3000/api/users/1/videos
  ```
* Get video comments:

  ```bash
  curl -X GET http://localhost:3000/api/videos/1/comments
  ```

---

## Notes

* The application currently uses in-memory data defined in `src/models/index.js`.
* Controllers are implemented for videos, users, and comments.
* Each route follows RESTful conventions and is modularized.
* Designed to integrate with a frontend such as Next.js.
