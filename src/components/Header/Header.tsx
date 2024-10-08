import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";

export default function Header() {
  const route = useNavigate()

  return (
    <div className="!w-full flex justify-between !items-center border p-6 border-red-50 rounded" >
            <Logo 
                title="Note App" 
                subtitle="Create your notes"
                onClick={() => route('/')}
            />
        <div className="">
            <Button 
                onClick={() => route('/note/new')} 
            >Create Note +</Button>
        </div>
    </div>
  ) 
}
