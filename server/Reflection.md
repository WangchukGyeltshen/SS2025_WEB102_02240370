# Reflection.md

## a) Documentation

In this practical, I developed a RESTful API for a TikTok-like platform using **Node.js** and **Express**. The main concepts I applied were:

- **RESTful Architecture**: I carefully followed REST conventions, creating clean and descriptive endpoints such as `/api/videos`, `/api/users/:id/videos`, and `/api/comments/:id/likes`.
- **HTTP Methods**: The API used appropriate methods (`GET`, `POST`, `PUT`, `DELETE`) for each resource based on the operation.
- **Express Middleware**: I utilized middleware such as `morgan` for logging, `cors` for cross-origin access, `body-parser` for parsing JSON, and `dotenv` for handling environment variables.
- **In-Memory Data Models**: Since we didn’t connect a database yet, I used hardcoded data in `src/models/index.js` to simulate database responses.
- **Controller-Based Logic**: I created separate controller files for users, videos, and comments to keep the logic modular and easy to manage.
- **Routing Layer**: I implemented and connected the routes with controllers through clearly organized route files like `users.js`, `videos.js`, and `comments.js`.
- **Testing the API**: I used `curl` and Postman to manually test different endpoints and verify that the API responded with the correct data and status codes.

## b) Reflection

This practical helped me gain a deeper understanding of how REST APIs are structured and implemented from the ground up. Compared to the first practical, this one felt more natural and organized since I was already familiar with Express basics.

### What I Learned
- How to simulate a backend using in-memory data structures.
- Structuring controllers and routes effectively for scalability.
- Managing environment variables using `.env`.
- Testing endpoints using both `curl` commands and Postman.
- Writing better modular code with reusable functions across multiple resource types.

### Challenges Faced

A major issue I ran into was while linking the `userController` to its routes. I initially forgot to export the controller functions properly, which led to `undefined` errors in the routes. After reviewing my code, I corrected the export syntax and the issue was resolved.

Another challenge was parsing nested routes like `/api/users/:id/videos` and `/api/videos/:id/comments`. I mistakenly placed them in the wrong route file at first, causing incorrect behavior. I later refactored the route logic and assigned the handlers to the correct modules.

---

Overall, this practical was a great hands-on experience for building a real-world backend API. I now feel more confident about handling multiple resources in a backend application and preparing it to connect with a frontend like Next.js in future sessions.
