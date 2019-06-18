const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('First Log!');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('Second Log!');
//     res.send('<h1>Hello from Assignment #2!</h1>');
// });

app.use('/users', (req, res, next) => {
    res.send('<h1>This is "Users" page.</h1>');
});

app.use('/', (req, res, next) => {
    res.send('<h1>This is home page.</h1>');
});

app.listen(3000);