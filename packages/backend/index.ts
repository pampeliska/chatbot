import dotenv from 'dotenv';
import express, { type Request, type Response } from 'express';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

console.log('BOTAI_API_KEY:', process.env.BOTAI_API_KEY);

app.get('/', (req: Request, res: Response) => {
  res.send('test');
});

app.get('/api/test', (req: Request, res: Response) => {
  res.json({ message: 'test2' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
