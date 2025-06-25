'use client';
import Image from 'next/image';

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
      
    </section>
  );
};

export default HeroSection;
