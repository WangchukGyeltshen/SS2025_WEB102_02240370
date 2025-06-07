# Reflection.md

## a) Documentation

For this practical, I focused on designing and implementing RESTful API endpoints for a simple social media application. The key concepts I applied include:

- **RESTful Design**: I structured clean, predictable URIs such as `/users`, `/posts/:id`, `/comments` etc., and used the correct HTTP methods (`GET`, `POST`, `PUT`, `DELETE`) based on the operation type.
- **HTTP Status Codes**: I implemented standard status codes to reflect the result of each request (e.g. `200 OK`, `201 Created`, `404 Not Found`, `500 Internal Server Error`).
- **Content Negotiation**: Middleware was added to check the `Accept` header and return JSON responses, allowing the API to support different response formats if needed.
- **Express Project Structure**: The project followed a modular structure with separate folders for `controllers`, `routes`, `middleware`, and `utils`.
- **Error Handling**: I created custom error-handling middleware (`errorHandler.js`) and utility files for error responses and async handling.
- **Mock Data**: Without a real database, I used mock data from `utils/mockData.js` to simulate user, post, comment, and like data.

## b) Reflection

This practical helped me understand how to properly design and implement RESTful APIs using Node.js and Express. While I had a theoretical understanding of REST principles, applying them in a structured, real-world scenario made everything click for me.

### What I Learned
- Setting up a full Express server from scratch.
- Building clean, versionable endpoints.
- Writing reusable controller functions and custom middlewares.
- Handling async operations and errors properly.
- Implementing content negotiation and serving static documentation.

### Challenges Faced

One major issue I ran into was with error handling. My middleware wasn’t catching certain route errors properly. After checking the structure, I realized I forgot to forward the error to `next()` in one of the async functions. Fixing that allowed my custom error messages to show up correctly.

Another challenge was getting the content negotiation middleware to return JSON responses consistently. I initially forgot to check for fallback formats if the `Accept` header wasn’t provided, but I resolved it by setting a default content type.

---

Overall, this was a rewarding hands-on experience that helped me connect API design theory with real backend development. I now feel more confident building RESTful services from scratch.
