const express = require('express');
const bodyParser = require('body-parser');

const errorMiddleware = require('./middleware/error.middleware');
const authRouter = require('./routes/auth.router');
const userRouter = require('./routes/user.router');

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use('/login', authRouter);
app.use('/user', userRouter);
app.use(errorMiddleware);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
