import Link from 'next/link';
import Head from 'next/head';
import { getAllFruits } from '@/model/fruits';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <Link href="/fruits/berries">Berries</Link>
        <Link href="/fruits/citrus">Citrus</Link>
      </div>
    </>
  );
}

export function getStaticProps() {
  const allFruits = getAllFruits();
  console.log(allFruits);
  return {
    props: {
      fruit_data: [],
    },
  };
}
