'use client'

import { useEffect, useState } from 'react'
import QuestionCard from './QuestionCard'
import Result from './Result'

interface QuizData {
  titulo: string
  perguntas: {
    pergunta: string
    alternativas: { [key: string]: string }
    gabarito: string
  }[]
  resultados: {
    [key: string]: string
  }
  link_saber_mais: string
}

interface QuizProps {
  quizId: string | undefined
}

export default function Quiz({ quizId }: QuizProps) {
    const [quizData, setQuizData] = useState<QuizData | null>(null)
    const [error, setError] = useState(false)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [userAnswers, setUserAnswers] = useState<Record<number, string>>({})
    const [showResult, setShowResult] = useState(false)

    // get quiz data
    useEffect(() => {
        if (!quizId) return

        const loadQuiz = async () => {
            try {
            const dataModule = await import(`@/features/quizzes/data/${quizId}.json`, {
                assert: { type: 'json' },
            })
            setQuizData(dataModule.default)
            } catch (err) {
                console.error('Erro ao carregar quiz:', err)
                setError(true)
            }
        }
        
        loadQuiz()
    }, [quizId])

    if (error) return <p className="text-red-600">Quiz não encontrado.</p>
    if (!quizData) return <p>Carregando...</p>

    const currentQuestion = quizData.perguntas[currentQuestionIndex]
    const totalQuestions = quizData.perguntas.length

    const handleSelect = (letra: string) => {
        setUserAnswers((prev) => ({
        ...prev,
        [currentQuestionIndex]: letra,
        }))
    }

    const handleNext = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex((i) => i + 1)
        } else {
            setShowResult(true)
        }
    }

    const handlePrev = () => {
        if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex((i) => i - 1)
        }
    }

    const getScore = () => {
        return quizData.perguntas.reduce((acc, pergunta, i) => {
            return acc + (userAnswers[i] === pergunta.gabarito ? 1 : 0)
        }, 0)
    }

    // Mostra o resultado
    if (showResult) {
        return (
            <Result
            score={getScore()}
            total={totalQuestions}
            resultados={quizData.resultados}
            linkSaibaMais={quizData.link_saber_mais}
            onRetry={() => {
                setShowResult(false)
                setCurrentQuestionIndex(0)
                setUserAnswers({})
            }}
            />
        )
    }

  return (
    <div className="w-full min-h-screen bg-white pl-50 pr-50 pt-10">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#D8902E]">
            {quizData.titulo}
        </h1>
        <QuestionCard
            index={currentQuestionIndex}
            total={totalQuestions}
            pergunta={currentQuestion.pergunta}
            alternativas={currentQuestion.alternativas}
            selected={userAnswers[currentQuestionIndex]}
            onSelect={handleSelect}
        />

        <div className="flex justify-between mt-6">
            <button
            onClick={handlePrev}
            disabled={currentQuestionIndex === 0}
            className="px-4 py-2 rounded bg-gray-500 hover:bg-gray-600 disabled:opacity-50"
            >
            Voltar
            </button>
            <button
            onClick={handleNext}
            className="px-4 py-2 rounded bg-[#D8902E] text-white hover:bg-[#b56f1e]"
            >
            {currentQuestionIndex < totalQuestions - 1
                ? 'Próxima'
                : 'Finalizar'}
            </button>
        </div>
    </div>
  )
}
