import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const Navbar = () => {
  const links = [
    { link: "Home", href: "/" },
    { link: "Portfolio", href: "#portfolio" },
    { link: "About me", href: "#/about" },
    { link: "Contact", href: "#contact" },
  ];
  return (
    <div className="flex justify-between items-center p-4 ">
      <div className="font-bold text-lg tracking-widest">SG</div>
      <div className="hidden md:flex gap-3">
        {links.map((item) => (
          <div>
            <Link
              className="text-sm text-gray-700"
              href={item.href}
              key={item.href}
            >
              {item.link}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <Link href="">
          <FaGithub />{" "}
        </Link>
        <Link href="">
          <FaLinkedinIn />{" "}
        </Link>

        <Button size="sm" variant="outline" href="contact">
          Resume <Download className="ml-1" size={16} />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
