const express = require('express');
const app = new express();
const fs = require('node:fs');

app.listen(3000, () => console.log("Server started"));

app.use(express.static('Public'));
app.use(express.json());

app.post('/feedbackSubmission', (request, response) => {
    console.log(request.body);
});