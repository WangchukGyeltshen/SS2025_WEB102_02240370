# Reflection.md

## a) Documentation

In this practical, I implemented **token-based authentication** using **JWT (JSON Web Tokens)** in a Node.js and Express backend. The primary goal was to secure the API by allowing only authenticated users to access protected routes. The key concepts I applied include:

- **User Authentication Flow**: Implemented a login route where users submit credentials and receive a signed JWT in response.
- **JWT Generation**: Used the `jsonwebtoken` package to generate access tokens upon successful login.
- **Token Validation Middleware**: Created Express middleware that checks for the presence and validity of JWTs on protected routes.
- **Environment Variables**: Stored the secret key and token expiration settings in the `.env` file for security.
- **Access Control**: Protected sensitive endpoints (like `/api/profile`, `/api/posts/create`) so they are only accessible to users with valid tokens.

## b) Reflection

This practical gave me hands-on experience with secure, stateless authentication. It built upon my previous understanding of login flows by introducing token management and route protection, which are crucial for modern API security.

### What I Learned

- The mechanics of JWT: how tokens are created, signed, and verified.
- How to build middleware in Express to handle token checking and error handling.
- The importance of setting expiration times and using secure environment variables.
- Structuring authentication logic to keep the backend modular and maintainable.

### Challenges Faced

One issue I encountered was token expiration. Initially, I forgot to set the expiration properly, which led to tokens that never expired. After reviewing the `jwt.sign()` options, I added the `expiresIn` parameter to improve security.

Another challenge was testing token validation. When manually sending requests via Postman, I sometimes forgot to include the token in the `Authorization` header. I eventually created a collection with pre-configured headers to make the process easier.

---

Overall, this practical solidified my understanding of API security using JWTs. It's a foundational skill for backend development, and I now feel confident building applications that require user authentication and authorization.
