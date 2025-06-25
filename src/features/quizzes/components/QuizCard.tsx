'use client';
import Image from 'next/image';
import Link from 'next/link';

const QuizCard: React.FC<QuizCardProps> = ({
  imageUrl,
  imageAlt,
  title,
  description,
  linkUrl,
}) => {
  return (
    <div className="w-full max-w-sm h-full bg-white rounded shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Imagem */}
      <div className="relative w-full h-78">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col flex-grow p-5 justify-between">
        <div>
          <Link
            href={linkUrl}
            className="text-lg font-semibold text-gray-900 hover:text-[#D8902E] inline-flex items-center transition"
          >
            {title} <span className="ml-1 text-[##D8902E]">›</span>
          </Link>
          <p className="mt-2 text-sm text-gray-600">{description}</p>
          <div className="flex justify-center mt-12">
          <Link
            href="quizzes"
            className="inline-block bg-[#D8902E] hover:bg-[#d8912ea1] text-white text-sm font-bold uppercase px-6 py-4 rounded transition"
          >
            Fazer quiz
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
