import dotenv from 'dotenv';
import express, { type Request, type Response } from 'express';
import OpenAI from 'openai';

dotenv.config();

const client = new OpenAI({
   apiKey: process.env.BOTAI_API_KEY,
});

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

app.post('/api/chat', async (req: Request, res: Response) => {
   const { prompt } = req.body;

   const response = await client.responses.create({
      model: 'gpt-4o-mini',
      input: prompt,
      temperature: 0.2,
      max_output_tokens: 100,
   });

   res.json({ message: response.output_text });
});

app.listen(port, () => {
   console.log(`Server is running at http://localhost:${port}`);
});
