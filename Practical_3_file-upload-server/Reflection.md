# Reflection.md

## a) Documentation

In this practical, I implemented a complete file upload system on the backend using **Node.js**, **Express**, and **Multer**, designed to integrate with a frontend built with React/Next.js. The main concepts applied in this task were:

- **Multipart Form Data Handling**: Used `Multer` to parse incoming form data and extract uploaded files.
- **File Storage**: Configured Multer’s `diskStorage` to store uploaded files with unique names inside an `uploads` directory.
- **File Validation**: Added custom `fileFilter` logic to accept only PDF files and implemented `limits` to restrict file sizes.
- **Error Handling**: Wrote middleware to catch and respond to file upload errors, including unsupported types and oversized files.
- **CORS Configuration**: Enabled cross-origin access using `cors` middleware to allow frontend-backend communication across ports.
- **Frontend Integration**: Modified the frontend to post files directly to the Express server using Axios, and used the `onUploadProgress` callback to display real-time progress.

## b) Reflection

This practical gave me a solid understanding of how file uploads work in full-stack applications. I’ve used file inputs before, but this was my first time building a full flow from client to server that handles files securely and efficiently.

### What I Learned
- How to configure and use Multer for handling file uploads in Express.
- How multipart form data is processed under the hood.
- Implementing proper validation to accept only specific file types and limit file size.
- Managing errors in a user-friendly way with both backend responses and frontend alerts.
- Real-time upload progress tracking using Axios.
- Configuring CORS correctly to allow React to communicate with the Express backend.

### Challenges Faced

One challenge I faced was with Multer's file filter. Initially, my file validation wasn't working correctly and was rejecting all file types — even PDFs. After some debugging, I realized the MIME type string was case-sensitive. Updating the condition to use `.toLowerCase()` solved the problem.

Another issue was handling large files that exceeded the set size limit. The server was crashing instead of responding with a proper error. I fixed this by using Multer's `limits` option and adding a custom error handler to return a clear JSON message to the frontend.

---

Overall, this practical helped me feel much more confident handling files in a full-stack web environment. It combined backend logic, security, and frontend communication in a way that was both practical and directly applicable to real-world development.
