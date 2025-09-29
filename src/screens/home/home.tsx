import { Hero } from "./components/hero.tsx"
import { QuoteBox } from "./components/quotebox.tsx";
import { Cards } from "./components/card.tsx";

export function Home() {
  return (
    <div className="min-h-screen bg-[#0D0C15] text-white font-serif">
      <Hero />
      <QuoteBox />
      <Cards />
    </div>
  );
}
