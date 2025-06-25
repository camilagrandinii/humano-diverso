'use client';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-[103vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden bg-[#FDF9F1]"
    >
      {/* Background Image */}
      <Image
        src="/logo-humanos.png"
        alt="Cabeça pensante, logo da Humanos - Diversos"
        fill
        className="object-cover object-bottom z-0"
        quality={85}
        priority
        sizes="100vw"
      />

      {/* Overlay escura para contraste */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Conteúdo */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          Ser humano é ser Diverso
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Você realmente pensa por si… ou está sendo guiado sem saber? Descubra agora!
        </p>
        <Link
          href="quizzes"
          className="inline-block bg-[#D8902E] hover:bg-[#d8912ea1] text-white text-xl font-bold uppercase px-10 py-6 rounded transition"
        >
          Fazer quiz
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
