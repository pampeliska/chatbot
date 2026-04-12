import type { Request, Response } from 'express';
import express from 'express';
import { chatController } from './controllers/chat.controller';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
   res.send('test5');
   // res.send(process.env.BOTAI_API_KEY);
});

router.get('/api/test', (req: Request, res: Response) => {
   res.json({ message: 'test22' });
});

router.post('/api/chat', chatController.sendMessage);

export default router;
