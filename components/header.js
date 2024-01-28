import Link from "next/link";

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-semibold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 text-teal-800">
      <Link href="/" className="hover:underline">
        Counterfactual
      </Link>
    </h2>
  );
}
