
import { prisma } from "@repo/db";

export default async function Home() {
  const user = await prisma.user.findFirst()
  return (
                  <div className="font-sans">
      {user?.name ?? <p className="mr-4">No user added yet</p>} 
    <div className="relative w-3 h-3 inline-flex justify-center">
      <span className="absolute bg-red-400 opacity-75 rounded-full w-full h-full inline-flex animate-ping " />
      <span className="relative bg-red-600 rounded-full w-3 h-3 inline-flex"/>
    </div>
    </div>
  );
}