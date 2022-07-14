const express = require('express');
const bodyParser = require('body-parser');

const errorMiddleware = require('./middleware/errorMiddleware');
const authRouter = require('./routes/auth.router');

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use('/login', authRouter);
app.use(errorMiddleware);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
