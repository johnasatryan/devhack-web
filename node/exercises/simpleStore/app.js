const express = require('express');
const settings = require('./utils/config');
const authRouter = require('./routes/auth');

require('./database/connection_async');

const app = express();
app.use(express.json());

app.use('/auth', authRouter);

app.listen(settings.PORT, () => {
  console.log(`Server runing on port ${settings.PORT}`);
});
