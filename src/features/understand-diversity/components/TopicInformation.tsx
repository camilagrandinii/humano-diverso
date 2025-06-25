'use client';
import Image from 'next/image';
import Link from 'next/link';

type PersonReference = {
  name: string;
  photo: string;
  book: string;
};

type TopicInfoProps = {
  title: string;
  headline: string;
  content: string[];
  cta?: {
    text: string;
    link: string;
  };
  images: string[];
  centerText?: {
    title: string;
    description: string;
  };
  references?: PersonReference[];
};

const TopicInfo = ({
  title,
  headline,
  content,
  cta,
  images,
  centerText,
  references = [],
}: TopicInfoProps) => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white space-y-24">
      {/* Texto com imagem ao lado */}
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
        {/* Texto */}
        <div className="w-full lg:w-1/2 text-left">
          <h3 className="text-sm font-bold text-[#D8902E] uppercase mb-2">
            {title}
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            {headline}
          </h2>

          <div className="text-gray-700 text-base leading-relaxed space-y-4">
            {content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {cta && (
            <Link
              href={cta.link}
              className="inline-block mt-6 text-base text-white bg-[#D8902E] hover:bg-[#d98c25] px-5 py-2 rounded font-medium transition"
            >
              {cta.text}
            </Link>
          )}
        </div>

        {/* Imagens ao lado */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {images.map((imgSrc, idx) => (
            <div
              key={idx}
              className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-md"
            >
              <Image src={imgSrc} alt={`Imagem ${idx + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Texto centralizado */}
      {centerText && (
        <div className="container mx-auto px-6 lg:px-48 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{centerText.title}</h2>
          <p className="text-gray-700 text-base leading-relaxed">{centerText.description}</p>
        </div>
      )}

      {/* Referências */}
      {references.length > 0 && (
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Referências
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {references.map((person, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-4">
                <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-md">
                  <Image src={person.photo} alt={person.name} fill className="object-cover" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{person.name}</h3>
                <div className="relative w-32 h-48 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={person.book}
                    alt={`Livro de ${person.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default TopicInfo;
