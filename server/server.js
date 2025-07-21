import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'booktracker'
})

// Gett all books
app.get('/books', (req, res) => {
    const q = "SELECT * FROM books";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })    
})

// Get a single book
app.get('/books/:id', (req, res) => {
    const bookId = req.params.id;
    const q = "SELECT * FROM books WHERE id = ?";

    db.query(q, [bookId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json(data[0]);
    })
})

// Add a new book
app.post('/books', (req, res) => {
    const q = "INSERT INTO books (`title`, `author`, `date`, `totalpage`, `genre`, `status`, `currentpage`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.author,
        req.body.date,
        req.body.totalpage,
        req.body.genre,
        req.body.status,
        req.body.currentpage,
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Book added successfully");
    })
})

// Update a book
app.put('/books/:id', (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    const fields = Object.keys(updates);
    const values = Object.values(updates);

    if (fields.length === 0) {
        return res.status(400).json({error: "No field provided for update"});
    }

    const setClause = fields.map(field => `\`${field}\` = ?`).join(', ');
    const q = `UPDATE books SET ${setClause} WHERE id = ?`;

    db.query(q, [...values, id], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json({message: "Book updated successfully"});
    })
})

// Delete a book
app.delete('/books/:id', (req, res) => {
    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id = ?";

    db.query(q, bookId, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json({message: "Book deleted successfully"});
    })
})

app.listen(5000, () => {
    console.log("Server started at http://localhost:5000");
})
