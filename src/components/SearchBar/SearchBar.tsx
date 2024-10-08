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
        className="flex items-end justify-center"
    >
        <input 
            type="text" 
            placeholder={placholder} 
            className="w-[300px] border rounded-md border-gray-300 p-2"
            onChange={(e) => onSearch(e.target.value)}
        />
    </div>
  )
}
