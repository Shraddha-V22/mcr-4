import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-white p-2 py-3">
      <nav className="mx-auto w-[80%]">
        <Link to="/" className="text-xl font-bold text-violet-600">
          MyForum
        </Link>
      </nav>
    </header>
  );
}
