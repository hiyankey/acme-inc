'use client'
import Link from "next/link";
import { Logo } from "../icons/logo";
import { Code } from "../icons/code";
import { usePathname } from "next/navigation";
import { Asterisk } from "../icons/asterisk";
import { Message } from "../icons/message";
import { LineChart } from "../icons/line-chart";
import { Dollar } from "../icons/dollar";
import { Invoice } from "../icons/invoice";

const navLinks = [
    [{name: 'Feed', path: '/dashboard', icon: Asterisk },
        {name: 'Messages', path: '/dashboard/messages', icon: Message},
        {name: 'Metrics', path: '/dashboard/metrics', icon: LineChart},
        {name: 'Income', path: '/dashboard/income', icon: Dollar}
    ],[
        {name: 'Issues', path: '/dashboard/issues', icon: Message},
        {name: 'Invoices', path: '/dashboard/invoices', icon: Invoice},
    ]
]
export function Sidebar({className}:{className?:string}) {

    const pathname = usePathname()
    console.log(pathname);
    
    return <div className={`${className} w-[25.6rem] h-screen `}>
        <div className="h-[6.4rem] w-full p-[8px] flex items-center">
            <div className="flex items-center justify-between px-[8px] py-[6px] hover:bg-zinc-800/70 w-full rounded-[6px]"><Link href={'/'} className="flex items-center"><Logo className="mr-4"/> Acme Inc.</Link>
       <Code/></div></div>
       <div className="">
        
        <nav>
            <div className="flex flex-col space-y-2 p-4">
                <h4 className="uppercase text-xs text-zinc-300/50">General</h4>
                   <ul className="flex flex-col space-y-1">{navLinks[0]?.map((link, index)=> <Link className="relative h-[3.6rem] rounded-[8px] w-full flex items-center text-sm hover:bg-zinc-800 px-[8px] overflow-clip " key={index} href={link.path}><span className="z-10 flex w-full h-full items-center"><link.icon className="mr-[12px]"/>{link.name} </span>{pathname === link.path && <div className="absolute inset-0 bg-zinc-800 [box-shadow:inset_0_1px_0_0_hsla(0,_0%,_100%,_12%)]  rounded-[8px] z-0"/>}</Link>)}</ul>
            </div>
            <div className="flex flex-col space-y-2 p-4">
                <h4 className="uppercase text-xs text-zinc-300/50">More</h4>
                   <ul className="flex flex-col space-y-1">{navLinks[1]?.map((link, index)=> <Link className="h-[3.6rem] rounded-[8px] w-full flex items-center text-sm hover:bg-zinc-800 px-[8px]"key={index} href={link.path}><span className="z-10 flex w-full h-full items-center"><link.icon className="mr-[10px]"/>{link.name} </span>{pathname === link.path && <div className="absolute inset-0 bg-zinc-800 [box-shadow:inset_0_1px_0_0_hsla(0,_0%,_100%,_12%)]  rounded-[8px] z-0"/>}</Link>)}</ul>
            </div>
         

        </nav>
       </div>
       
    </div>
}