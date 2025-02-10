import { AlignJustify } from "lucide-react";
import { useSidebar } from "../context/SidebarContext";

function MenuButton() {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <button
      onClick={toggleSidebar}
      className={`${
        isOpen ? "opacity-0" : "opacity-100"
      } fixed top-4 left-4 cursor-pointer p-[5px] bg-blue-300 hover:bg-green-300 text-zinc-950 rounded-md transition-all duration-500 ease-in-out`}
    >
      <AlignJustify size={28} />
    </button>
  );
}

export default MenuButton;
