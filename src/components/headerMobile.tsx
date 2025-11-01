import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { SiGoogleclassroom } from "react-icons/si";

export function HeaderMobile() {
  const navLinks = [
    { icon: <IoHomeSharp size={24} />, href: ["/home"], activeClass: "text-white border-b" },
    { icon: <PiStudentFill size={24} />, href: ["/student", "/notification"], activeClass: "text-white border-b" },
    { icon: <SiGoogleclassroom size={24} />, href: ["/classes"], activeClass: "text-white border-b" },
    { icon: <RiDashboardHorizontalFill size={24} />, href: ["/dashboard"], activeClass: "text-white border-b" },
    { icon: <FaUser size={24} />, href: ["/profile"], activeClass: "text-white border-b" },
  ];

  const pathname = location.pathname;
  const isDashboard = pathname.startsWith("/dashboard");

  const renderLinks = () =>
    navLinks.map((link) => {
      const hrefs = Array.isArray(link.href) ? link.href : [link.href];
      const isActive = hrefs.includes(pathname);
      return (
        <motion.a
          key={hrefs[0]}
          href={hrefs[0]}
          className={isActive ? link.activeClass : "hover:text-gray-300"}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {link.icon}
        </motion.a>
      );
    });

  return (
    <div>
      <div
        className={`z-100 h-[86px] text-white/20 fixed bottom-0 left-0 w-full flex justify-around items-center transition-all duration-300 ${
          isDashboard ? "bg-[#322F50]" : "bg-[#7B73C3]/20"
        }`}
      >
        {renderLinks()}
      </div>
    </div>
  );
}
