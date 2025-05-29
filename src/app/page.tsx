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
      <h1 className="">HELLO WORLD!</h1>
      <Link href="/blog"><p>Blog</p></Link>
      <Link href="/product"><p>Products</p></Link>
    </div>
  );
}
