const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

function isValidDate(day, month, year) {
    const date = new Date(year, month - 1, day);
    return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
    );
}

app.post('/check-date', (req, res) => {
    const { day, month, year } = req.body;
    if (!day || !month || !year) {
        return res.status(400).json({ error: "Thiếu dữ liệu" });
    }
    const valid = isValidDate(day, month, year);
    res.json({ valid });
});

app.listen(3001, () => {
    console.log("Server chạy ở http://localhost:3001");
});
