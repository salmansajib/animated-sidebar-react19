import { AlignJustify } from "lucide-react";

function MenuButton({ isOpen, toggleSidebar }) {
  return (
    <button
      onClick={toggleSidebar}
      className={`${
        isOpen ? "opacity-0" : "opacity-100"
      } fixed top-4 left-4 cursor-pointer p-[5px] border border-gray-50 rounded-md transition-opacity duration-500 ease-in-out`}
    >
      <AlignJustify />
    </button>
  );
}

export default MenuButton;
