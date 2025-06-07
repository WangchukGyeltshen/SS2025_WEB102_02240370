# Reflection.md

## a) Documentation

In this practical, I connected the TikTok backend application to a PostgreSQL database using **Prisma ORM**. The main concepts I applied included:

- **Database Configuration**: I created a PostgreSQL database and user, and configured the connection using environment variables stored in a `.env` file.
- **Prisma Setup**: I initialized Prisma in the project, defined the schema in `schema.prisma`, and generated a Prisma Client to interact with the database.
- **Migrations**: Used `npx prisma migrate dev` to apply database changes and create migration files for version control.
- **ORM Concepts**: Defined models like `User`, `Video`, `Comment`, etc., which Prisma mapped to PostgreSQL tables with relationships.
- **Authentication**: Implemented user registration and login using bcrypt for password hashing and JWT for secure token-based authentication.
- **Database Integration**: Updated all controllers to interact with the PostgreSQL database via Prisma instead of using in-memory data.
- **Seed Script**: Created a `seed.js` file to populate the database with test data (users, videos, comments, likes, and follows) for testing purposes.

## b) Reflection

This practical gave me real-world experience in replacing mock data with a real relational database and using an ORM to simplify data access and management. It was a big step forward from earlier exercises where I worked only with static data or in-memory objects.

### What I Learned
- How to set up and connect to a PostgreSQL database using Prisma ORM.
- Writing database schemas in Prisma’s DSL and managing schema migrations.
- Creating and running seed scripts to populate test data for development.
- Securing API endpoints with JWT authentication and protecting routes using middleware.
- Structuring backend code to be modular and maintainable while working with persistent storage.
- Testing the full flow of user registration, login, and authorized access to protected API routes using Postman.

### Challenges Faced

One challenge I faced was getting the database connection to work. I initially had a typo in the `.env` file which caused the Prisma Client to fail. After reviewing the connection string and confirming the user and database names, I corrected it and Prisma connected successfully.

Another issue was updating all controller logic from mock data to asynchronous database calls. It took time to refactor existing code to use `await` and handle potential exceptions properly. After a few iterations and testing with Postman, everything was functioning correctly.

---

Overall, this practical helped solidify my understanding of relational databases and how to connect them with Node.js applications using an ORM. I now feel much more confident in managing real data, building secure authentication, and working with backend systems that interact with a production-grade database.
