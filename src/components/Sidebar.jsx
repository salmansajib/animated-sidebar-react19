import { X } from "lucide-react";
import { motion } from "motion/react";
import { useSidebar } from "../context/SidebarContext";
import NavLinks from "./NavLinks";

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
        duration: 0.7,
        ease: "easeInOut",
      }}
      className="sidebar fixed top-0 left-0 w-full sm:w-80 h-full bg-zinc-700/50 backdrop-blur-md p-4"
    >
      <div className="flex items-center justify-between mb-5">
        <button
          onClick={toggleSidebar}
          className="order-2 bg-blue-300 hover:bg-red-200 p-0.5 rounded-md cursor-pointer text-zinc-950 transition-colors duration-200 ease-in-out"
        >
          <X />
        </button>
        <h2 className="order-1 font-semibold text-xl uppercase text-gray-50">
          Sidebar
        </h2>
      </div>
      <NavLinks />
    </motion.div>
  );
}

export default Sidebar;
