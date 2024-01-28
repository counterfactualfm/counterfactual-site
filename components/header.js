import Link from "next/link";

export default function Header() {
  return (
    <h2 className="mb-20 mt-8 text-2xl font-semibold leading-tight tracking-tight text-teal-800 md:text-4xl md:tracking-tighter">
      <Link href="/" className="hover:underline">
        Counterfactual
      </Link>
    </h2>
  );
}
