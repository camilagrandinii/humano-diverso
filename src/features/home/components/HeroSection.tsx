'use client';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-[calc(100vh-4rem)] min-h-[500px] flex items-center justify-center text-white"
    >
      {/* Background Image */}
      <Image
        src="/home.png"
        alt="Cabeça pensante, logo da Humanos - Diversos"
        fill
        className="object-cover z-0"
        quality={85}
        priority
        sizes='(max-height: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      />

      {/* Overlay escura para contraste */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Conteúdo */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          Humanos - Diversos
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Olá 123
        </p>
        <Link
          href="#servicos"
          className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-bold uppercase px-6 py-3 rounded transition"
        >
          Fazer quiz
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
