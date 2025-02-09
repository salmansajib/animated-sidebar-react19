import { X } from "lucide-react";
import { motion } from "motion/react";
import { useSidebar } from "../context/SidebarContext";

function Sidebar() {
  const { isOpen, toggleSidebar } = useSidebar();

  // Motion animation values
  const sidebarVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={sidebarVariants}
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      transition={{
        duration: 0.5,
        ease: "anticipate",
      }}
      className="fixed top-0 left-0 w-80 h-full bg-zinc-700/50 backdrop-blur-md p-4 rounded-tr-[20px] rounded-br-[20px]"
    >
      <div className="flex items-center justify-between mb-5">
        <button
          onClick={toggleSidebar}
          className="order-2 hover:bg-blue-300 p-1 rounded-md cursor-pointer hover:text-zinc-950 transition-colors duration-200 ease-in-out"
        >
          <X />
        </button>
        <h2 className="order-1 font-semibold text-xl">Sidebar</h2>
      </div>
      <ul className="">
        <li>
          <a
            className="hover:bg-blue-300 text-gray-50 hover:text-zinc-950 w-full h-10 flex items-center pl-3 rounded-md transition-colors duration-200 ease-in-out"
            href="#"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="hover:bg-blue-300 text-gray-50 hover:text-zinc-950 w-full h-10 flex items-center pl-3 rounded-md transition-colors duration-200 ease-in-out"
            href="#"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="hover:bg-blue-300 text-gray-50 hover:text-zinc-950 w-full h-10 flex items-center pl-3 rounded-md transition-colors duration-200 ease-in-out"
            href="#"
          >
            Services
          </a>
        </li>
        <li>
          <a
            className="hover:bg-blue-300 text-gray-50 hover:text-zinc-950 w-full h-10 flex items-center pl-3 rounded-md transition-colors duration-200 ease-in-out"
            href="#"
          >
            Contact
          </a>
        </li>
      </ul>
    </motion.div>
  );
}

export default Sidebar;
