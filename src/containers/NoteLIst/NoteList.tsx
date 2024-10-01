import React from 'react'
import TextEditor from '../../components/TextEditor/TextEditor'

interface INoteList {
        id: string,
        title: string,
        content: string,
        subtitle?: string,
        onClick: () => void,
        onClickTrash: () => void,
}

export default function NoteList({noteList}: {noteList: INoteList[]}) {
  return (
    <div className='flex flex-col justify-center container p-6' >
        {
            noteList.map((note) => (
                <TextEditor 
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    content={note.content}
                    onClick={() => alert('Hello')}
                    onClickTrash={() => alert('Trash')}
                />
            ))
        }
    </div>
  )
}
