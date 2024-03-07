import Image from "next/image";
import { Header } from "../components/header";
import { Hero } from "@/components/hero";
import { Overview } from "@/components/overview";
import { Features } from "@/components/features";
import { Features01 } from "@/components/features01";
import { Pricing } from "@/components/pricing";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="h-full scroll-smooth bg-zinc-950 text-white">
      <Header />
      <Hero />
      <Overview />
      <Features />
      <Features01 />
      <Pricing />
      <Footer />
    </main>
  );
}
