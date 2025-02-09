import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { useSidebar } from "../context/SidebarContext";

const menuItems = [
  { id: 1, label: "Home", href: "#" },
  { id: 2, label: "About", href: "#" },
  { id: 3, label: "Services", href: "#" },
  { id: 4, label: "Contact", href: "#" },
];

function NavLinks() {
  const { toggleSidebar } = useSidebar();
  const [activeId, setActiveId] = useState(menuItems[0].id);
  const [position, setPosition] = useState({ top: 0, height: 0 });

  const listRef = useRef([]);

  useEffect(() => {
    if (listRef.current[activeId]) {
      const { offsetTop, offsetHeight } = listRef.current[activeId];
      setPosition({ top: offsetTop, height: offsetHeight });
    }
  }, [activeId]);

  const handleHover = (id) => {
    if (listRef.current[id]) {
      const { offsetTop, offsetHeight } = listRef.current[id];
      setPosition({ top: offsetTop, height: offsetHeight });
    }
  };

  const handleMouseLeave = () => {
    if (listRef.current[activeId]) {
      const { offsetTop, offsetHeight } = listRef.current[activeId];
      setPosition({ top: offsetTop, height: offsetHeight });
    }
  };

  return (
    <div className="relative w-48" onMouseLeave={handleMouseLeave}>
      {/* Animated background */}
      <motion.div
        className="absolute left-0 w-full bg-blue-400 rounded-md"
        animate={{ top: position.top, height: position.height }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />

      <ul className="relative">
        {menuItems.map((item) => (
          <li key={item.id} ref={(el) => (listRef.current[item.id] = el)}>
            <a
              onClick={() => {
                setActiveId(item.id);
                toggleSidebar();
              }}
              onMouseEnter={() => handleHover(item.id)}
              className="relative text-gray-50 w-full h-10 flex items-center pl-3 rounded-md transition-colors duration-200 ease-in-out"
              href={item.href}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavLinks;
