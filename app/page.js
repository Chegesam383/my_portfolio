import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Work from "@/components/work";

export default function Home() {
  return (
    <div className="max-w-[768px] mx-auto">
      <header>
        <nav>
          <Navbar />
        </nav>
        <Hero />
        <Work />
      </header>
    </div>
  );
}
