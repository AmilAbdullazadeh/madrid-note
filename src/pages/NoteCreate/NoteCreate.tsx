import NoteForm from "../../components/NoteForm/NoteForm";

export default function NoteCreate() {
  return (
    <div className="w-full h-[50vh] my-6 flex justify-center items-center" >
      <NoteForm
        isUpdate={false}
        note={{}}
        onClickEdit={() => {}}
        onClickDelete={() => {}}
        onClickSave={() => {}}
      />
    </div>
  )
}
