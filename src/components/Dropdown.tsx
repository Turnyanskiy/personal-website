import { useState } from "react";

export default function Dropdown({label, content}: { label: React.ReactNode, content: React.ReactNode}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button>
      { label }
      </button>
      {isOpen && (
        <div className="absolute border border-white bg-zinc-900 w-[45rem] p-2">
          {content}
        </div>
      )}
    </div>
  )
}
