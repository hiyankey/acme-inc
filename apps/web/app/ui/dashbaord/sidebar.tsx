import Link from "next/link";
import { Logo } from "../icons/logo";


export function Sidebar({className}:{className?:string}) {
    return <div className={`${className} w-[25.6rem] h-screen p-4`}>
       <Link href={'/'} className="flex items-center"><Logo className="mr-4"/> Acme Inc.</Link>
    </div>
}