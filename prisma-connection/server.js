const express = require('express');
const cors = require('cors');
const prisma = require('./prisma');

const app = express();
const port = 5100; // Using a different port from the original app

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.get('/student', async (req, res) => {
    try {
        // Using Prisma to fetch all students
        const student = await prisma.student.findMany();
        res.json(student);
    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/student/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        // Using Prisma to fetch a student by ID
        const student = await prisma.student.findUnique({ 
            where: { id } 
        });
        
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }

        res.json(student);
    } catch (error) {
        console.error('Error fetching student:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/student', async (req, res) => {
    try {
        const { name, email, course, enrollment_date } = req.body;
        // Using Prisma to create a new student
        const newStudent = await prisma.student.create({
            data: { 
                name, 
                email, 
                course, 
                enrollment_date: new Date(enrollment_date)
            }
        });

        res.status(201).json(newStudent);
    } catch (error) {
        console.error('Error Creating Student:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Gracefully shut down Prisma whent the app terminates
process.on('SIGINT', async () => {
    await prisma.$disconnect();
    process.exit();
});

//Start the server
app.listen(port, () => { 
    console.log(`Prisma server running up on http://localhost:${port}`);
});