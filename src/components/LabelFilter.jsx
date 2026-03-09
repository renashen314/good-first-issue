import { LABELS } from '../data/labels'

function LabelFilter({ selectedLabel, onSelectLabel }) {
  return (
    <div className="flex flex-row lg:flex-col gap-2">
      {LABELS.map((label) => {
        const isSelected = selectedLabel === label.name
        return (
          <button
            key={label.id}
            onClick={() => onSelectLabel(label.name)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap border-2 cursor-pointer ${
              isSelected
                ? 'bg-purple-500 text-white border-purple-500 ring-2 ring-offset-2 ring-purple-500'
                : 'bg-white text-gray-700 border-gray-200 hover:border-purple-300 hover:text-purple-400'
            }`}
          >
            {label.name}
          </button>
        )
      })}
    </div>
  )
}

export default LabelFilter
