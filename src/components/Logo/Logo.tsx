interface ILogoProps {
    title: string,
    subtitle: string,
    onClick: () => void,
}

export default function Logo(
    {title, subtitle, onClick}: ILogoProps
) {
  return (
    <div onClick={onClick} >
        <h1 className="text-4xl font-bold text-gray-800" >{title}</h1>
        <h2 className="text-sm text-gray-500" >{subtitle}</h2>
    </div>
  )
}
