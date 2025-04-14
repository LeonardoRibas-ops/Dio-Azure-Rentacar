const express = require('express');
const app = express();
const rentRoutes = require('./routes/rentRoutes');

app.use(express.json());
app.use('/rent', rentRoutes);

app.listen(3000, () => console.log('BFF running on port 3000'));
