import Link from 'next/link';
import Head from 'next/head';
import FruitList from '@/components/FruitList';
//import fruits from '@/lib/data';
import { getAllFruits } from '@/model/fruits.js';

export default function Home({ fruit_data }) {
  console.log(fruit_data);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <FruitList fruits={fruit_data} />
        <Link href="/fruits/berries">Berries</Link>
        <Link href="/fruits/citrus">Citrus</Link>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allFruits = await getAllFruits();
  console.log(allFruits, 'fruits!!!');

  return {
    props: {
      fruit_data: allFruits,
    },
  };
}
