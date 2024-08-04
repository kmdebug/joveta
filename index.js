const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    status: true,
    code: 200,
    text: 'Hi',
  });
});

app.listen(PORT, () => console.log(`server running port ${PORT}`));
