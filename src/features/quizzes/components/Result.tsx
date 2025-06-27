/* eslint-disable @next/next/no-img-element */
'use client'

interface ResultProps {
  score: number
  total: number
  resultados: { [key: string]: string }
  linkSaibaMais: string
  onRetry: () => void
}

export default function Result({
  score,
  total,
  resultados,
  linkSaibaMais,
  onRetry,
}: ResultProps) {

  // Função que verifica se o score está dentro da faixa (ex: "0-4")
  function isScoreInRange(range: string, score: number): boolean {
    const [minStr, maxStr] = range.split('-')
    const min = Number(minStr.trim())
    const max = Number(maxStr.trim())
    return score >= min && score <= max
  }

  // Encontra o texto do resultado que corresponde à faixa correta para o score
  const resultadoTexto = Object.entries(resultados).find(([range]) =>
    isScoreInRange(range, score)
  )?.[1] ?? 'Resultado não encontrado'

  return (
    <div className="text-center w-full min-h-screen bg-white pl-50 pr-50 pt-10 text-black">
        <h2 className="text-3xl font-bold text-[#D8902E] mb-4">Resultado</h2>
        <p className="text-lg mb-4">
            Você acertou <strong>{score}</strong> de <strong>{total}</strong>{' '}
            perguntas.
        </p>
        <p className="text-base mb-6">{resultadoTexto}</p>

        {/* Imagem centralizada */}
        <div className="flex justify-center mb-6">
            <img
                src="/diversidadeQuizResult2.jpg"
                alt="Resultado do Quiz"
                className="w-140 h-auto rounded-md"
            />
        </div>


        <div className="flex justify-center gap-4 flex-wrap">
            <button
                onClick={onRetry}
                className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded"
            >
                Refazer Quiz
            </button>
            <a
                href={linkSaibaMais}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#D8902E] hover:bg-[#b56f1e] text-white rounded"
            >
                Quer aprender mais sobre a diversidade?
            </a>
        </div>
    </div>
  )
}
