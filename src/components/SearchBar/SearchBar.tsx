interface ISearchBarProps {
    onSearch: (searchTerm: string) => void,
    placholder: string,
}

export default function SearchBar({
    onSearch,
    placholder,
}: ISearchBarProps) {
  return (
    <div 
        className="flex items-center justify-center"
    >
        <input 
            type="text" 
            placeholder={placholder} 
            className="border border-gray-300 p-2 w-full"
            onChange={(e) => onSearch(e.target.value)}
        />
    </div>
  )
}
