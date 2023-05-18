import Image from "next/image";
import bgLogoNLWSpacetime from "../assets/bg-logo-nlw-spacetime.svg";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="space-y-5">
      <Image src={bgLogoNLWSpacetime} alt="NLW Spacetime logo" />

      <div className="max-w-[420px] space-y-1">
        <h1 className="text-5xl font-bold leading-tight text-gray-50">
          Your time capsule
        </h1>
        <p className="text-lg leading-relaxed">
          Collect memorable moments from your journey and share (if you want)
          with the world!
        </p>
      </div>

      <Link
        href="/memories/new"
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-second text-sm uppercase leading-none text-black hover:bg-green-600"
      >
        REGISTER MEMORIES
      </Link>
    </div>
  );
}
