import { motion, AnimatePresence } from "motion/react";
import { useSidebar } from "../context/SidebarContext";

function Heading() {
  const { isOpen } = useSidebar();

  return (
    <div className=" overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.h1
          initial={{
            y: -30,
          }}
          animate={{
            y: 0,
          }}
          exit={{
            y: 30,
          }}
          transition={{
            duration: 0.3,
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
      </AnimatePresence>
    </div>
  );
}

export default Heading;
