import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href="./fruits/berries">Berries</Link>
      <Link href="./fruits/citrus">Citrus</Link>
    </div>
  );
}
