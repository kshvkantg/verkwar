const express = require('express');
const connectToMongoDB = require('./database/mongoose-connect');
const dotenv = require('dotenv');

const profileRoutes = require('./basic_info/route/user');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/user', profileRoutes);

app.get('/', (req, res) => {
    const jsonData = {
        message: 'Hello, world!',
        timestamp: new Date(),
        status: 'success'
      };
    res.send(jsonData);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

connectToMongoDB()
    .catch(err => {
        console.error('Failed to start server:', err);
    });
