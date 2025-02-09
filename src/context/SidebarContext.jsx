/* eslint-disable react/prop-types */

import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

const useSidebar = () => useContext(SidebarContext);

const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarProvider, useSidebar };
