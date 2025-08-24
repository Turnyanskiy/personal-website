import { useState } from "react";

export default function Dropdown({label, content, position="bottom"}: { label: React.ReactNode, content: React.ReactNode, position?: "bottom" | "cover"}) {
  const [isOpen, setIsOpen] = useState(false)

  const positionClasses = {
    bottom: "top-full left-0",
    cover: "inset-0",
  };

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
        <div className={`absolute z-10 border border-white bg-zinc-900 w-[45rem] p-2 ${positionClasses[position]}`}>
          {content}
        </div>
      )}
    </div>
  )
}
