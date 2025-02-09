import { SidebarProvider } from "./context/SidebarContext";
import Sidebar from "./components/Sidebar";
import MenuButton from "./components/MenuButton";
import Heading from "./components/Heading";

function App() {
  return (
    <SidebarProvider>
      <div className="bg-zinc-950 text-gray-50 font-geist-mono min-h-svh grid place-content-center p-4">
        <Heading />
        <MenuButton />
        <Sidebar />
      </div>
    </SidebarProvider>
  );
}

export default App;
