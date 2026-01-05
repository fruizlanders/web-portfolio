"use client";

import { JSX } from "react";
import { createContext, useContext, useState, type ReactNode } from "react";

type CVModalContextType = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const CVModalContext = createContext<CVModalContextType | undefined>(undefined);

export function CVModalProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CVModalContext.Provider
      value={{
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
      }}
    >
      {children}
    </CVModalContext.Provider>
  );
}

export function useCVModal(): CVModalContextType {
  const context = useContext(CVModalContext);

  if (!context) {
    throw new Error("useCVModal must be used within CVModalProvider");
  }

  return context;
}
