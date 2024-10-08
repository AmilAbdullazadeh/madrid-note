
interface IButton {
    onClick: () => void,
    disabled?: boolean,
    children: React.ReactNode,
}

export default function Button({onClick, disabled = false ,children}: IButton) {
  return (
    <button 
        onClick={onClick} 
        disabled={disabled}
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >{children}</button>
  )
}
