import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="main p-8 pb-20">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <Link href="/blog"><p>Blog</p></Link>
      <div>
        <p className="text-[1.8rem] text-center mb-2">oil price increases</p>
        <div className="flex gap-5">
          <Link href="/articles/oil-prices-increase?lang=fr">Read blog in French</Link>
          <Link href="/articles/oil-prices-increase?lang=en">Read blog in english</Link>
          <Link href="/order-product">order</Link>
        </div>
      </div>

    </div>
  );
}
