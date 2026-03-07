import { LABELS } from '../data/labels'

function LabelFilter({ selectedLabel, onSelectLabel }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {LABELS.map((label) => {
        const isSelected = selectedLabel === label.name
        return (
          <button
            key={label.id}
            onClick={() => onSelectLabel(label.name)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              isSelected
                ? 'ring-2 ring-offset-2 ring-blue-500'
                : 'hover:opacity-80'
            }`}
            style={{
              backgroundColor: `#${label.color}25`,
              color: `#${label.color}`,
              border: `2px solid #${label.color}`,
            }}
          >
            {label.name}
          </button>
        )
      })}
    </div>
  )
}

export default LabelFilter
