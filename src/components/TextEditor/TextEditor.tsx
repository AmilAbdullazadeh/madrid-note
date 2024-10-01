import { useState } from "react";
import { Trash } from "react-bootstrap-icons";

interface ITextEditorProps {
  id: string;
  title: string;
  content: string;
  subtitle?: string;
  onClick: () => void;
  onClickTrash: () => void;
}

export default function TextEditor({
  id,
  title,
  content,
  subtitle,
  onClick,
  onClickTrash,
}: ITextEditorProps) {
  const [isCardHovered, setIsCardHovered] = useState<boolean>(false);
  const [isTrashHovered, setIsTrashHovered] = useState<boolean>(false);

  function onClickTrashHandler(e) {
    onClickTrash();
    e.stopPropagation();
  }

  return (
    <div
      onClick={onClick}
      className="flex flex-col container"
      style={{ backgroundColor: isCardHovered ? "rgba(0,0,0,0.1)" : "white" }}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      <div className="container">
        <h5 className="text-white bg-blue-500 p-2 rounded-t-lg">{title}</h5>
        <Trash
          size={20}
          className="absolute right-0 m-2 cursor-pointer"
          style={{ color: isTrashHovered ? "red" : "black" }}
          onMouseEnter={() => setIsTrashHovered(true)}
          onMouseLeave={() => setIsTrashHovered(false)}
          onClick={onClickTrashHandler}
        />
        <h6 className="mb-2 text-gray-400">{subtitle}</h6>
        <p className="font-medium text-indigo-400 italic">{content}</p>
      </div>
    </div>
  );
}
