import tagColorsJson from '../posts/tagColors.json'
const tagColors: Record<string, string> = tagColorsJson

interface TagProps {
  label: string;
  isActive: boolean;
  onSelect: () => void;
}

export default function Tag({label, isActive, onSelect}: TagProps){
  return (
    <button className="px-2 first:pl-0" onClick={onSelect}>
      <span className={`${isActive ? `text-black bg-${tagColors[label]}-400` : `hover:bg-opacity-60 text-${tagColors[label]}-400`} hover:bg-${tagColors[label]}-400 hover:text-black px-1`}>{label}</span>
    </button>
  )
}
