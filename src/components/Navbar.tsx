"use client";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="mt-2 -z-[10]  border border-solid rounded-xl  w-full bg-transparent shadow-sm border-b border-gray-200 flex items-center justify-between px-6 py-3">
      <h1
        onClick={() => router.push("/")}
        className="text-2xl font-bold text-gray-900 cursor-pointer"
      >
        Collab<span className="text-blue-600">Board</span>
      </h1>

      <div className="flex gap-4">
        <button
          onClick={() => router.push("/")}
          className="w-30 font-bold p-1  rounded-md hover:cursor-pointer"
        >
          Home
        </button>

        <button
          onClick={() => router.push("/board")}
          className="w-40 font-bold p-1  rounded-md hover:cursor-pointer"
        >
          UML Diagrams
        </button>

        <button
          onClick={() => router.push("/join")}
          className="w-30 font-bold p-1  rounded-md hover:cursor-pointer"
        >
          Join Board
        </button>

        <button
          onClick={() => router.push("/about")}
          className="w-30  font-bold p-1  rounded-md hover:cursor-pointer"
        >
          About
        </button>
      </div>
    </div>
  );
}
