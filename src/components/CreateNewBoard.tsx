import Link from "next/link";
import React from "react";

const CreateNewBoard = () => {
  return (
    <section className="w-96 h-34 rounded-xl bg-white p-4">
      <h1 className="font-bold">Create New Board</h1>
      <p className="text-sm">Start a fresh canvas for your ideas</p>
      <Link href='/board' className="w-88 px-4  bg-black p-1 text-white rounded-md mt-4 hover:cursor-pointer" >
        Create Board
      </Link>
    </section>
  );
};

export default CreateNewBoard;
