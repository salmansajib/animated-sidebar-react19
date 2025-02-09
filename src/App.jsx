import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MenuButton from "./components/MenuButton";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-zinc-950 text-gray-50 font-geist-mono min-h-svh grid place-content-center p-4">
      <h1 className="text-2xl font-semibold">
        Click on the menu to show the sidebar
      </h1>
      <MenuButton isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default App;
