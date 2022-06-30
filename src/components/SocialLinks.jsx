import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={34} />
        </>
      ),
      href: "https://www.linkedin.com/in/lucasantonioalipiodesouza368b84218/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={34} />
        </>
      ),
      href: "https://github.com/Lucas-Alipio",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={34} />
        </>
      ),
      href: "mailto:lucasantonio@gec.inatel.br",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={34} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  
  return (
    <div className="hidden lg:flex flex-col fixed top-[35%] left-0 ">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] " + 
              "hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-600 " +
              " " +
              link.style
            }
          >
            <a
              href={link.href}
              className="flex justify-between items-center w-full text-white"
              download={link.download}
              target="_blank"
              rel="noreferrer"
            >
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
