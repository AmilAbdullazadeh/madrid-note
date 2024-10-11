
interface IButton {
    onClick?: () => void,
    disabled?: boolean,
    className?: string,
    children: React.ReactNode,
}

export default function Button({onClick, className, disabled = false ,children}: IButton) {
  return (
    <button 
        onClick={onClick} 
        disabled={disabled}
        className={`${className} w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
    >{children}</button>
  )
}
