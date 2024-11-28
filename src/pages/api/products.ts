import type { NextApiRequest, NextApiResponse } from 'next';
import { products } from '../../data/products'; 

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate=59');
  res.status(200).json(products);
}
