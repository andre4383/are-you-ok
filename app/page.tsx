"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow">
        <Hero />
      </div>
      <Footer />
    </main>
  );
}
