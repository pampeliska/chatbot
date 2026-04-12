import dotenv from 'dotenv';
import express from 'express';
import router from './routes';

dotenv.config(); // configure env variables from .env file

const app = express(); // create express app
app.use(express.json()); // middleware to parse JSON request bodies
app.use(router); // use the defined routes
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

console.log('BOTAI_API_KEY:', process.env.BOTAI_API_KEY);

app.listen(port, () => {
   console.log(`Server is running at http://localhost:${port}`);
});
