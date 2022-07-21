const express = require('express');

const errorMiddleware = require('./middleware/error.middleware');
const { authRouter, userRouter, categorieRouter, postRouter } = require('./routes/index');

const app = express();

app.use(express.json());

app.use('/login', authRouter);
app.use('/user', userRouter);
app.use('/categories', categorieRouter);
app.use('/post', postRouter);
app.use(errorMiddleware);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
