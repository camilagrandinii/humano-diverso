'use client'

import Quiz from '@/features/quizzes/components/Quiz';
import { useParams } from 'next/navigation'

export default function QuizPage() {
  const params = useParams()
  let quizId = params.quiz

  if (Array.isArray(quizId)) {
    quizId = quizId[0]
  }

  return (
    <main>
      <Quiz quizId={quizId} />
    </main>
  )
}




