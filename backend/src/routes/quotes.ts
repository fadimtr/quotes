import { Router, Request, Response } from 'express';
import { quoteService } from '../services/quoteService.js';
import { FilterType, QuoteFilterOptions } from '../types/quote.js';

const router = Router();

router.get('/random', async (req: Request, res: Response): Promise<void> => {
  try {
    const pageParam = req.query.page as string;
    const page = pageParam ? Number(pageParam) : 1;
    if (isNaN(page) || page < 1) {
      res.status(400).json({ error: 'Page must be a valid positive number' });
      return;
    }

    const count = parseInt(req.query.count as string);
    if (!req.query.count || isNaN(count) || count < 1) {
      res.status(400).json({ error: 'Count parameter must be a positive numbe' });
      return;
    }

    const options: QuoteFilterOptions = {
      filter: req.query.filter as string,
      type: req.query.type as FilterType,
    };

    const result = await quoteService.getQuotes(page, count, options);
    res.json(result);
  } catch (error) {
    console.error('Error in quotes endpoint:', error);
    if (error instanceof Error) {
      if (error.message.includes('Rate limit')) {
        res.status(429).json({ error: error.message });
        return;
      }
      if (error.message.includes('Invalid API key')) {
        res.status(401).json({ error: error.message });
        return;
      }
    }
    res.status(500).json({ error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' });
  }
});

export default router; 