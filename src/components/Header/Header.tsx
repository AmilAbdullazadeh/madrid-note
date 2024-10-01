import Button from "../Button/Button";
import Logo from "../Logo/Logo";

export default function Header() {
  return (
    <div className="flex flex-col container" >
        <div className="flex flex-1" >
            <Logo 
                title="Note App" 
                subtitle="Create your notes"
                onClick={() => alert('Hello')}
            />
        </div>
        <div className="w-full">
            <Button 
                onClick={() => alert('Hello')} 
            >Create Note +</Button>
        </div>
    </div>
  ) 
}
