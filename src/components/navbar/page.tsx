import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="bg-black font-thin text-3xl border-b-8 border-green-400">
        <ul className="flex justify-evenly mx-auto p-6 bg-transparent space-x-8 md:space-x-12">
          {/* Make the navbar items stack vertically on smaller screens */}
          <li className="text-white hover:text-green-400">
            <Link href={'/home'}>Home</Link>
          </li>
          <li className="text-white hover:text-green-400">
            <Link href={'/ourblog'}>Our Blogs</Link>
          </li>
          <li className="text-white hover:text-green-400">
            <Link href={'/contactus'}>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
