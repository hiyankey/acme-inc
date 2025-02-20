import { PropsWithChildren } from "react";
import { Sidebar } from "../ui/dashbaord/sidebar";
import { Header } from "../ui/dashbaord/header";


export default function Layout({children}: Readonly<PropsWithChildren>) {
    return  <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-zinc-900 text-zinc-300 w-screen">
    <Sidebar/><div className='flex flex-col w-full'><Header/>
        {children}</div>
    </div>
}