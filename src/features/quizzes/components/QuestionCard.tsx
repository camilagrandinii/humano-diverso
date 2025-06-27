interface QuestionCardProps {
  index: number
  total: number
  pergunta: string
  alternativas: { [key: string]: string }
  selected: string | undefined
  onSelect: (value: string) => void
}

export default function QuestionCard({
  index,
  total,
  pergunta,
  alternativas,
  selected,
  onSelect,
}: QuestionCardProps) {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-lg">
      <p className="text-lg font-bold text-[#333] mb-4">
        Pergunta {index + 1} de {total}
      </p>
      <p className="mb-6 text-gray-700">{pergunta}</p>
      <ul className="space-y-3">
        {Object.entries(alternativas).map(([letra, texto]) => {
          const isSelected = selected === letra
          return (
            <li key={letra}>
              <button
                className={`w-full text-left px-4 py-3 rounded-lg border transition-colors duration-200 font-medium
                  ${isSelected
                    ? 'bg-[#D8902E] text-white border-[#b56f1e]'
                    : 'bg-gray-50 text-gray-800 border-gray-300 hover:bg-[#f1d0a6] hover:text-[#4d2d00]'}
                `}
                onClick={() => onSelect(letra)}
              >
                <strong className="mr-2">{letra}.</strong> {texto}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
