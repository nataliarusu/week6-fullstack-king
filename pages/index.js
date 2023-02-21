import Link from 'next/link';
import Head from 'next/head';
import FruitList from '@/components/FruitList';
import fruits from '@/lib/data';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <FruitList fruits={fruits} />
        <Link href="/fruits/berries">Berries</Link>
        <Link href="/fruits/citrus">Citrus</Link>
      </div>
    </>
  );
}

// export function getStaticProps() {
//   const allFruits = fruits;

//   console.log(allFruits);
//   return {
//     props: {
//       fruit_data: allFruits,
//     },
//   };
// }
