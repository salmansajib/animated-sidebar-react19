import { motion } from "motion/react";
import { useSidebar } from "../context/SidebarContext";

function Heading() {
  const { isOpen } = useSidebar();

  return (
    <div className=" overflow-hidden">
      <motion.h1
        initial={{
          y: -40,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        key={isOpen}
        className="text-2xl font-semibold"
      >
        {isOpen ? (
          <span className="bg-gradient-to-r from-red-300 to-blue-300 text-transparent bg-clip-text capitalize">
            Isn&apos;t it awesome!
          </span>
        ) : (
          <span className="bg-gradient-to-r from-red-300 to-blue-300 text-transparent bg-clip-text capitalize">
            Click on the menu to show the sidebar.
          </span>
        )}
        🥳
      </motion.h1>
    </div>
  );
}

export default Heading;
