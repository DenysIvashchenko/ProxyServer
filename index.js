const express = require('express');
const path = require('path');
const fs = require('fs');
const corse = require('cors');
require('dotenv').config();
const apiRate = require('express-rate-limit');

const PORT = process.env.PORT || 3500;

const app = express();

const limiter = apiRate({
    windowMs: 10 * 60 * 1000,
    max: 50
});
app.use(limiter);
app.set('trust proxy', 1);

app.use(corse());

app.use('/api', require('./routes'));

app.listen(PORT, () => {
    console.log(`server run on port ${PORT}` )
})