const express = require('express');
const app = express();
const noteRouter = require('./controllers/noteController');

app.use(express.json());
app.use('/notes', noteRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});