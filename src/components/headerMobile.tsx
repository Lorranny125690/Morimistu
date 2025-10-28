import { motion } from "framer-motion"
import { FaUser } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { SiGoogleclassroom } from "react-icons/si";

export function HeaderMobile () {  
  const navLinks = [
    { icon: <IoHomeSharp size={24} />, href: ["/home"], activeClass: "text-white border-b" },
    { icon: <PiStudentFill size={24} />, href: ["/student", "/notification"], activeClass: "text-white border-b" },
    { icon: <SiGoogleclassroom size={24} />, href: ["/classes"], activeClass: "text-red-400 border-b" },
    { icon: <RiDashboardHorizontalFill size={24} />, href: ["/dashboard"], activeClass: "text-red-400 border-b" },
    { icon: <FaUser size={24} />, href: ["/dashboard"], activeClass: "text-red-400 border-b" },
  ];

  const renderLinks = () =>
    navLinks.map((link) => {
      const hrefs = Array.isArray(link.href) ? link.href : [link.href];
      const isActive = hrefs.includes(location.pathname);
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
    
  return(
    <div>
      <motion.div className="h-[86px] text-white/20 fixed bottom-0 left-0 w-full bg-[#7B73C3]/20 flex justify-around items-center" initial={{ y: 100 }} animate={{ y: 0 }} transition={{ type: "spring", stiffness: 200 }}>
        {renderLinks()}
      </motion.div>
    </div>
  )
}