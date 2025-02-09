import { AlignJustify } from "lucide-react";
import { useSidebar } from "../context/SidebarContext";

function MenuButton() {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <button
      onClick={toggleSidebar}
      className={`${
        isOpen ? "opacity-0" : "opacity-100"
      } fixed top-4 left-4 cursor-pointer p-[5px] border border-gray-50 rounded-md transition-opacity duration-500 ease-in-out`}
    >
      <AlignJustify size={24} />
    </button>
  );
}

export default MenuButton;
