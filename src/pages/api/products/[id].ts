import type { NextApiRequest, NextApiResponse } from 'next';
import { products } from '../../../data/products'; 

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const product = products.find((p) => p.id === id); 

  if (!product) {
    return res.status(404).json({ message: 'Товар не найден' });
  }

  res.status(200).json(product); 
}
