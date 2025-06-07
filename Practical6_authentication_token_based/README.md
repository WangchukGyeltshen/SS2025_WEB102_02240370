## Practical Report: Authentication Tutorials

### Objective

The objective of this practical was to understand and implement user authentication in web applications. The tutorials focused on the processes of verifying user identity and ensuring secure access to protected resources.

### Tools and Technologies Used

* HTML, CSS, JavaScript
* Node.js and Express.js
* PostgreSQL
* Passport.js
* JSON Web Tokens (JWT)
* Git and GitHub

### Overview of the Tutorials

The tutorials provided step-by-step guidance on implementing authentication. The major topics included:

1. **Authentication vs. Authorization**

   * Authentication verifies user identity.
   * Authorization controls user access to resources.

2. **Backend Setup**

   * A server was created using Node.js and Express.js.
   * PostgreSQL was used to store user credentials securely.

3. **User Registration and Login**

   * Registration and login endpoints were created.
   * Passwords were hashed using bcrypt before storing.
   * Login logic validated user credentials and issued tokens.

4. **JSON Web Tokens (JWT)**

   * Tokens were generated upon successful login.
   * Tokens were stored on the client side and attached to requests.
   * Middleware verified tokens to protect private routes.

5. **Passport.js Integration**

   * Passport strategies were used to handle local authentication.
   * Sessions and persistent login states were managed.

6. **Frontend Integration**

   * Forms for registration and login were created.
   * Frontend logic sent requests and handled responses.
   * Error messages were displayed based on authentication outcomes.

### Outcomes

By completing these tutorials, the following learning outcomes were achieved:

* A clear understanding of user authentication mechanisms.
* The ability to securely register and authenticate users.
* Familiarity with JWT-based protection of routes.
* Knowledge of integrating Passport.js for session management.

### Challenges Faced

* Managing token expiration and refreshing mechanisms required careful handling.
* Ensuring detailed and user-friendly error responses added complexity to both backend and frontend development.

### Conclusion

This practical provided essential hands-on experience in implementing secure authentication workflows. The step-by-step tutorials enabled the creation of a robust system that can serve as a foundation for any modern web application requiring user login functionality.
