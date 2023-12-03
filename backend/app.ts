const express = require('express');
import documentRoutes from './documentRoutes';

const app = express();

app.use(express.json());

app.use('/api', documentRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is  running on port ${PORT}`);
});
