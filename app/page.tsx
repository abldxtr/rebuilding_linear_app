import Image from "next/image";
import { Header } from "../components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
export default function Home() {
  return (
    <main className="h-full scroll-smooth bg-zinc-950 text-white">
      <Header />
      <Hero />
      <Features />
    </main>
  );
}
