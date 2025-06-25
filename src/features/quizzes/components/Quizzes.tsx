'use client';

import { quizzesSubjects } from '../constants/QuizSummary';
import QuizCard from './QuizCard';

const Quizzes = () => {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Quizzes
          </h2>
        </div>
        <div className="aspect-[8/4.2] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {quizzesSubjects.map((exp, index) => (
            <QuizCard
              key={index}
              imageUrl={exp.imageUrl}
              imageAlt={exp.imageAlt}
              title={exp.title}
              description={exp.description}
              linkUrl={exp.linkUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quizzes;
