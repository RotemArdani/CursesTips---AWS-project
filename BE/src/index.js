import express from 'express';
import router  from './routes/tips.routes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.API_PORT || 3000;

app.use(express.json());

app.use('/api/tips', router); 

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
