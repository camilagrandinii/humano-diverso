'use client';
import Image from 'next/image';
import Link from 'next/link';

const GeneralSection = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
        {/* Texto */}
        <div className="w-full lg:w-1/2 text-left">
          <h3 className="text-sm font-bold text-[#D8902E] uppercase mb-2">
            Emancipe seus pensamentos
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Estamos pensando... ou sendo pensados?
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            Vivemos em uma sociedade onde muitas decisões que afetam nosso dia a dia são tomadas por pessoas e grupos dos quais, muitas vezes, nem temos consciência. 
            <br /><br />
            Preconceitos enraizados, falta de informação... ou até mesmo o excesso dela afetam nossa forma de pensar.
            <br /><br />
            <p className="text-gray-700 text-base leading-relaxed mb-6">
            Ademais, devemos ter em mente o fato de que o ser humano é diverso, plural e complexo. Levar a vida com essas premissas é essenical para respeitar as diferenças.
            </p>
            E você? Já parou pra refletir sobre isso? 
          </p>
          <Link
            href="/quizzes"
            className="text-base text-gray-800 underline underline-offset-2 hover:text-[#D8902E] font-medium transition"
          >
            Faça o quiz e descubra!
          </Link>
        </div>

        {/* Imagem */}
        <div className="w-full lg:w-1/2">
          <div className="aspect-[8/5] w-full relative rounded-lg overflow-hidden shadow-md">
            <Image
              src="/critical-thinking.jpeg"
              alt="Pedra do Salão em Rubim, Minas Gerais"
              fill
              quality={100}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralSection;
