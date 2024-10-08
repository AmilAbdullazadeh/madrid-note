import { useState } from "react";
import Button from "../Button/Button";

interface NoteFormProps {
    isUpdate: boolean;
    note: any;
    onClickEdit: () => void;
    onClickDelete: () => void;
    onClickSave: (note: any) => void;
}

export default function NoteForm<NoteFormProps>({
    isUpdate = false,
    note,
    onClickEdit,
    onClickDelete,
    onClickSave,
}) {

    const [title, setTitle] = useState(note?.title || "");
    const [content, setContent] = useState(note?.content || "");

    const handleSubmit = () => {
        onClickSave({ title, content });
    }

  return (
    <div className="w-full flex flex-col items-center justify-between" >
        <div >
                <h2 className="mb-3" >Note Form 🔥</h2>
        </div>

        {/* title input */}
        <div className="mb-3 w-[350px]" >
            <label htmlFor="title" className="block text-sm font-medium text-gray-700" >Title</label>
            <input
                 type="text"
                 name="title" 
                 id="title" 
                 value={note?.title} 
                 className="w-full mt-1 p-2 border border-gray-300 rounded-md" 
                 onChange={(e) => setTitle(e.target.value)}
            />
        </div>

        {/* content input */}
        <div className="mb-3 w-[350px]" >
            <label htmlFor="content" className="block text-sm font-medium text-gray-700" >Content</label>
            <input
                 type="text"
                 name="content" 
                 id="content" 
                 value={note?.content} 
                 className="w-full mt-1 p-2 border border-gray-300 rounded-md" 
                 onChange={(e) => setContent(e.target.value)}
            />
        </div>

        <div className="my-5 w-[300px]" >
            <Button onClick={handleSubmit} >Save</Button>
        </div>


    </div>
  )
}
