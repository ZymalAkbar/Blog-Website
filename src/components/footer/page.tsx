import Link from "next/link";
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div>
            <footer className="bg-black border-b-8 border-green-400 py-4">
                <div className="flex justify-center items-center space-x-6">
                    <Link href={'https://www.facebook.com/?_rdr'}><BsFacebook size={50} className="text-white hover:text-green-400 transition-colors" /></Link>
                    <Link href={"https://github.com/ZymalAkbar"}><FaGithub size={50} className="text-white hover:text-green-400 transition-colors" /></Link>
                    <Link href={'https://www.linkedin.com/in/zymal-akbar-673859279/'}><FaLinkedin size={50} className="text-white hover:text-green-400 transition-colors" /></Link>
                </div>
                <div className="text-center mt-4">
                    <h3 className="text-white text-2xl"> &copy; Zymal&apos;s Blog</h3>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
