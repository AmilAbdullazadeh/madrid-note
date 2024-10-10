import { useState } from "react";
import Button from "../Button/Button";
import { useGetNoteByIdQuery, useUpdateNoteMutation } from "../../services/notesApi";
import { useNavigate, useParams } from "react-router-dom";

export default function NoteForm() {

    let { id } = useParams();
    const route = useNavigate();
    
    const { data } = useGetNoteByIdQuery(id);

    const [updateNote] = useUpdateNoteMutation();

    const [isEditing, setIsEditing] = useState(false);

    const [title, setTitle] = useState(data?.title || "");
    const [content, setContent] = useState(data?.content || "");

    const handleEdit = () => {
        setIsEditing(true)
    }

    const handleSubmit = async () => {
        setIsEditing(false)
        const body = {
            title,
            content,
            created_at: data?.created_at || new Date().toISOString(),
            updated_at: new Date().toISOString()
        }
        try {
            await updateNote({ id, ...body }).unwrap(); // unwrapping the response to handle errors
            route('/')
        } catch (error) {
            console.error("Failed to update the note:", error);
        }
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
                 defaultValue={data?.title} 
                 disabled={!isEditing && data?.title}
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
                 defaultValue={data?.content} 
                 disabled={!isEditing && data?.content}
                 className="w-full mt-1 p-2 border border-gray-300 rounded-md" 
                 onChange={(e) => setContent(e.target.value)}
            />
        </div>

        <div className="my-5 w-[300px]" >
            {
                (data && !isEditing) ? (
                    <Button onClick={handleEdit} >Edit</Button>
                ) : (
                    <Button onClick={handleSubmit} >Save</Button>
                )
            }
        </div>


    </div>
  )
}
