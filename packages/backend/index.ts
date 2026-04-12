import dotenv from 'dotenv';
import express, { type Request, type Response } from 'express';
import { chatController } from './controllers/chat.controller';

dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

console.log('BOTAI_API_KEY:', process.env.BOTAI_API_KEY);

app.get('/', (req: Request, res: Response) => {
   res.send('test5');
   // res.send(process.env.BOTAI_API_KEY);
});

app.get('/api/test', (req: Request, res: Response) => {
   res.json({ message: 'test22' });
});

app.post('/api/chat', chatController.sendMessage);

app.listen(port, () => {
   console.log(`Server is running at http://localhost:${port}`);
});
