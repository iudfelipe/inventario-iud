const express = require('express');
const cors = require('cors');
const rutasEquipo = require('./routes/equipo');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"))
app.listen(3001, () => console.log('server running at 3001'));

app.get('/', (req, res) => {
    res.json({ message: 'api working' });
});

app.use('/equipo', rutasEquipo);
