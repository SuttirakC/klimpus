import React from "react";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-auto items-center flex justify-end md:flex-nowrap flex-wrap md:px-10 px-4 mt-12">
          <div className="flex-col md:flex-row list-none items-center hidden md:flex text-white text-md font-semibold">
            Hi! {session?.user?.firstname}
          </div>
        </div>
      </nav>
    </>
  );
}
