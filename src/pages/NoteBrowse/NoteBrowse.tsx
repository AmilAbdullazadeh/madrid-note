import { Link } from 'react-router-dom'
import SearchBar from '../../components/SearchBar/SearchBar'
import { useState } from 'react'
import Note from '../Note/Note'
import { useFetchNotesQuery } from '../../services/notesApi'

export default function NoteBrowse() {
    const [searchTerm, setSearchTerm] = useState('')
    const { data, error, isLoading } = useFetchNotesQuery(); 

    const handleSearch = (searchTerm: string) => {
        setSearchTerm(searchTerm)
    }

    const filteredNotes = data?.filter((note: any) => {
        return note.title.toLocaleLowerCase().includes(searchTerm.toLowerCase()) || note.content.toLocaleLowerCase().includes(searchTerm.toLowerCase())
    })

  return (
    <div>
        <div className='flex justify-between' >
            <span>
                You dont have any note, create one
                <Link to='/note/new' className='ml-2 text-blue-500'>here</Link>
            </span>
        </div>

        <div className='flex flex-col justify-center mb-5' >
            <div className='w-full' >
                <SearchBar onSearch={handleSearch} placholder='Pls enter your search term' />
            </div>
        </div>

        <Note notes={filteredNotes}  />
    </div>
  )
}
