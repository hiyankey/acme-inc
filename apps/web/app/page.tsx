
import { prisma } from "@repo/db";

export default async function Home() {
  const user = await prisma.user.findFirst()
  return (
                  <div className="font-sans">
      {user?.name ?? "No user added yet"}
    </div>
  );
}