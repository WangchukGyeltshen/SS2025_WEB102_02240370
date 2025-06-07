import { Hono } from "hono";
import { cors } from "hono/cors";
import { PrismaClient, Prisma } from "@prisma/client";
import { HTTPException } from "hono/http-exception";
import { decode, sign, verify } from 'hono/jwt';
import { jwt } from 'hono/jwt';
import type { JwtVariables } from 'hono/jwt';


const app = new Hono();
const prisma = new PrismaClient();

// Enable CORS for all routes
app.use("/*", cors());

app.get("/:userId/account/balance", async (c) => {
  const { userId } = c.req.param();

  // fetch user account data 
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { Account: { select: { balance: true, id: true } } },
  });

  return c.json({ data: user });
});

app.post("/register", async (c) => {
  try {
    const body = await c.req.json();

    const bcryptHash = await Bun.password.hash(body.password, {
      algorithm: "bcrypt",
      cost: 4, // number between 4-31
    });

    const user = await prisma.user.create({
      data: {
        email: body.email,
        hashedPassword: bcryptHash,
        Account: {
          create: {
            balance: 0,
          },
        },
      },
    });

    return c.json({ message: `${user.email} created successfully}` });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      if (e.code === 'P2002') {
        console.log(
          'There is a unique constraint violation, a new user cannot be created with this email'
        )
        return c.json({ message: 'Email already exists' })
      }
    }
    throw e
  }
});

app.post("/login", async (c) => {
  try {
    const body = await c.req.json();

    const user = await prisma.user.findUnique({
      where: { email: body.email },
      select: { id: true, hashedPassword: true },
    });

    if (!user) {
      return c.json({ message: "User not found" });
    }

    const match = await Bun.password.verify(body.password, user.hashedPassword,"bcrypt");

    if (match) {
      return c.json({ message: "Login successful" });
    } else {
      throw new HTTPException(401, { message: "Invalid credentials" });
    }

  } catch (error) {
    throw new HTTPException(401, { message: 'Invalid credentials' })
  }
});

export default app;
