import { useState } from 'react';
import dynamic from 'next/dynamic';

const ProductCard = dynamic(() => import('../components/ProductCard'));

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

type HomePageProps = {
  products: Product[];
};

export default function HomePage({ products }: HomePageProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="homepage-container">
      <h1 className="homepage-title">Список товаров</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Введите название товара"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="no-products-message">Товары не найдены. Попробуйте изменить запрос.</p>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/products');
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}
