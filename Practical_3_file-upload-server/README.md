# File Upload Server Application

## Overview

This project demonstrates how to implement server-side file upload functionality using **Node.js** and **Express**, and how to connect it with a React/Next.js frontend. Files are handled securely and efficiently using the **Multer** middleware, with validations for file type and size, and appropriate error handling.

---

## Objectives

* Receive and handle file uploads from the frontend
* Validate and store files on the server securely
* Use Multer for multipart form data handling
* Implement file type and size validation
* Set up CORS for frontend-backend integration
* Provide meaningful error messages and status responses

---

## Setup Instructions

1. **Initialize the project**

```bash
mkdir file-upload-server
cd file-upload-server
npm init -y
```

2. **Install dependencies**

```bash
npm install express cors multer morgan dotenv
```

3. **Create basic structure**

```bash
touch server.js .env
```

4. **Add environment variable in `.env`**

```
PORT=8000
```

5. **Run the server**

```bash
node server.js
```

---

## Key Implementation Steps

### 1. Configure Express Server

* Use middleware like `express.json()`, `cors()`, and `morgan()`

### 2. Set Up Multer

* Configure file storage using `diskStorage`
* Define `fileFilter` to accept only PDFs or other valid types
* Add file size limits

### 3. Create Upload Route

* Add a POST route at `/api/upload`
* Handle and return success/failure messages

### 4. Handle Errors

* Use custom error middleware to catch Multer and general errors

### 5. Enable CORS

* Configure `cors` to allow requests from your frontend

---

## Connecting with Frontend

1. Update the React/Next.js frontend to point to the Express backend endpoint (e.g. `http://localhost:8000/api/upload`)
2. Use Axios with `FormData` to submit the file
3. Use `onUploadProgress` to track and display upload progress
4. Adjust Dropzone to allow PDF drag-and-drop
5. Show uploaded filenames in the UI

---

## Testing the Upload System

1. Start the backend server:

```bash
node server.js
```

2. Start the frontend (e.g. Next.js):

```bash
npm run dev
```

3. Open the file upload form in the browser
4. Upload a file and verify:

   * File type and size validation works
   * Upload progress is shown
   * Files are saved in `uploads/`
   * Errors are handled and shown properly

---

## Key Concepts

* **Multipart Form Data:** Allows files and fields to be sent in the same request using FormData.
* **Multer:** Handles file parsing, storage configuration, filtering, and metadata.
* **Error Handling:** Ensures both server-side and client-side errors are caught and returned with meaningful messages.
* **CORS:** Allows cross-origin requests between frontend and backend.
* **Progress Tracking:** Uses Axios `onUploadProgress` to give real-time feedback to users.
