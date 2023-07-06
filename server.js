const express = require('express');
const app = express();
const path = require('path');
const sequelize = require('./util/database');
const bodyParser = require('body-parser')
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const adminRoutes = require('./routes/admin');

app.use(adminRoutes);

sequelize.sync()
    .then(result => {
        app.listen(3100);
    })
    .catch(err => console.log(err))
