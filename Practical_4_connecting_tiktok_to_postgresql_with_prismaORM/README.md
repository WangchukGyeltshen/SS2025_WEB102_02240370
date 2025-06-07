# TikTok API with PostgreSQL and Prisma ORM

## Overview

This project connects a TikTok-style REST API to a PostgreSQL database using **Prisma ORM**. It migrates from in-memory data to a fully persistent system, adds authentication, and uses Prisma to handle schema, queries, and relationships.

---

## Objectives

* Set up PostgreSQL for persistent data storage
* Use Prisma ORM to model and interact with the database
* Implement secure authentication with JWT and bcrypt
* Refactor controllers to use database operations
* Seed database with test data

---

## Setup Instructions

### 1. Set up PostgreSQL

```sql
sudo -u postgres psql
CREATE DATABASE tiktok_db;
CREATE USER tiktok_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE tiktok_db TO tiktok_user;
\q
```

### 2. Initialize Prisma

```bash
cd server
npm install @prisma/client prisma --save-dev
npx prisma init
```

Edit `.env` with your database URL:

```
DATABASE_URL="postgresql://tiktok_user:your_password@localhost:5432/tiktok_db?schema=public"
```

Replace `schema.prisma` with TikTok data models.

### 3. Create the Database Schema

```bash
npx prisma migrate dev --name init
```

### 4. Generate Prisma Client

Create a new file:

```js
// src/lib/prisma.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export default prisma;
```

---

## Authentication Setup

1. Install dependencies:

```bash
npm install bcrypt jsonwebtoken
```

2. Add JWT and encryption in `auth.js` middleware.

3. Protect routes by using the `auth.js` middleware.

4. Configure `.env`:

```
PORT=5000
JWT_SECRET=yourverylongandsecurerandomsecret
JWT_EXPIRE=30d
```

---

## Updating Controllers

Update the following controllers to use Prisma:

* `userController.js`: for registration, login (with bcrypt and JWT)
* `videoController.js`: for handling relationships and complex queries
* `commentController.js`: for comment storage and retrieval

---

## Seeding the Database

1. Create a file at `prisma/seed.js`
2. Add to `package.json`:

```json
"scripts": {
  "dev": "nodemon src/index.js",
  "start": "node src/index.js",
  "seed": "node prisma/seed.js"
}
```

3. Run:

```bash
npm install bcrypt
npm run seed
```

This will create:

* 10 users
* 50 videos
* 200 comments
* 300 video likes
* 150 comment likes
* 40 follow relationships

---

## Testing API with Postman

1. Start the server:

```bash
npm run dev
```

2. Test the following:

* Register and login
* Use token for protected routes
* Create videos, comments, likes, follows

---

## Key Concepts

* **Database Schema Design:** Users, videos, comments, likes, follows
* **ORM Mapping:** Prisma simplifies querying and relationships
* **Authentication:** Secure passwords and stateless sessions using JWT
* **Seeding:** Populate database with realistic test data
* **Prisma Features:** Schema modeling, migrations, transactions, and aggregations
