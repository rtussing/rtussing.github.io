const express = require('express');
const app = new express();
const sqlite3 = require('sqlite3');

/**
 * Create/open a database
 */
const db = new sqlite3.Database('./db/feedback.db', (err) => {
    if (err) {
        console.error(err.message)
    }
    else {
        console.log('Connected to feedback database')
        console.log(__dirname)
    }
})

app.listen(3000, () => console.log("Server started"));

app.use(express.static('Public'));
app.use(express.json());

app.post('/feedbackSubmission', (request, response) => {
    const content = request.body;
    let date = new Date();
    date = date.toString();
    const sql = "INSERT INTO feedback (date, feedback) VALUES (?,?)";

    db.all(sql,[date, content.feedback],function (err) {
            response.send({
                message: "Date and feedback successfully added to db"
            });
        });
});