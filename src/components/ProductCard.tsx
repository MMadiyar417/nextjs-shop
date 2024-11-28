import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/ProductCard.module.css'; 

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{product.name}</h3>
      <Image
        src={product.image}
        alt={product.name}
        width={250}  
        height={200} 
        className={styles.cardImage}
      />
      <p className={styles.cardDescription}>{product.description}</p>
      <p className={styles.cardPrice}>{product.price} ₽</p>
      <Link href={`/product/${product.id}`}>
        <button className={styles.cardButton}>
          Подробнее
        </button>
      </Link>
    </div>
  );
}
