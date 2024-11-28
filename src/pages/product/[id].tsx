import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

type ProductPageProps = {
  product: Product | null;
};

export default function ProductPage({ product }: ProductPageProps) {
  const router = useRouter();

  if (!product) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-semibold mb-4">Товар не найден</h1>
        <button
          onClick={() => router.push('/')}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Вернуться на главную
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">{product.name}</h1>
      
      <div className="flex justify-center mb-6">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          style={{ objectFit: 'cover', borderRadius: '8px' }}
        />
      </div>
      
      <p className="text-lg mb-4">{product.description}</p>
      <p className="text-xl font-semibold mb-6">
        <strong>Цена: {product.price} ₽</strong>
      </p>
      
      <div className="text-center">
        <button
          onClick={() => router.push('/')}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Вернуться на главную
        </button>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  const product = await res.json();

  if (!product) {
    return {
      props: {
        product: null,
      },
    };
  }

  return {
    props: {
      product,
    },
  };
};
