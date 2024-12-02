const express = require('express');
const router = express.Router();
const Borrow = require('../schema/Borrow');
const Return = require('../schema/Return');

router.post('/borrow', async (req, res) => {
    try {
        const borrow = new Borrow(req.body);
        await borrow.save();
        res.status(201).json({message: "Book Borrowed Successfully!", borrow});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.post('/return', async (req, res) => {
    try {
        const { username, bookId, fine } = req.body;
        const returnBook = new Return({ username, bookId, fine });
        await returnBook.save();
        res.status(201).json({message: "Book Returned Successfully!", returnBook});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
