import dotenv from 'dotenv';
import express, { type Request, type Response } from 'express';
import OpenAI from 'openai';
import z from 'zod';

dotenv.config();

const client = new OpenAI({
   apiKey: process.env.BOTAI_API_KEY,
});

const chatSchema = z.object({
   prompt: z
      .string()
      .trim()
      .min(1, 'Prompt is required')
      .max(1000, 'Prompt is too long, maximum 1000 characters'),
   conversationId: z.string().uuid(),
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

const converstations = new Map<string, string>();

app.post('/api/chat', async (req: Request, res: Response) => {
   const parseResult = chatSchema.safeParse(req.body);

   if (!parseResult.success) {
      res.status(400).json(parseResult.error.format());
      return;
   }

   try {
      const { prompt, conversationId } = req.body;
      const response = await client.responses.create({
         model: 'gpt-4o-minir',
         input: prompt,
         temperature: 0.2,
         max_output_tokens: 100,
         previous_response_id: converstations.get(conversationId),
      });

      converstations.set(conversationId, response.id);

      res.json({ message: response.output_text });
   } catch (error) {
      res.status(500).json({
         error: 'Something went wrong. Failed to generate response.',
      });
   }
});

app.listen(port, () => {
   console.log(`Server is running at http://localhost:${port}`);
});
