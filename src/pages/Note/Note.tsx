import { Link } from 'react-router-dom'
import { useDeleteNoteMutation, useFetchNotesQuery } from '../../services/notesApi';

interface NoteProps {
    notes: any;
}

export default function Note({notes}: NoteProps) {

  return (
    <div className='flex flex-wrap' >
            {
              notes?.map((note: any) => (
                <div key={note.id} className='w-[300px] m-2 p-2 border border-gray-300 rounded-md' >
                    <h2 className='text-lg font-semibold' >{note.title}</h2>
                    <p className='text-sm' >{note.content}</p>
                    <div className='flex justify-between' >
                        <Link to={`/note/${note.id}`} className='text-blue-500' >View</Link>
                    </div>
                </div>
            ))
            }
        </div>
  )
}
