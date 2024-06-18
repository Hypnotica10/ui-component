import React, {
  ReactElement,
  createContext,
  createRef,
  useContext,
  useRef,
  useState,
} from "react";

type TabsProviderProps = {
  children: React.ReactNode;
};

const useTab = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const lineRef = useRef<HTMLSpanElement>(null);

  const handleClick = (ordinal: number): void => {
    const button = document.querySelector(
      `[aria-label=tab${ordinal + 1}]`
    ) as HTMLButtonElement;
    if (lineRef.current) {
      lineRef.current.style.width = `${button.offsetWidth}px`;
      lineRef.current.style.left = `${button.offsetLeft}px`;
    }

    setActiveTab(ordinal);
  };

  return { activeTab, lineRef, handleClick };
};

type UseTab = ReturnType<typeof useTab>;

const initialContextState: UseTab = {
  activeTab: 0,
  lineRef: createRef(),
  handleClick: () => {},
};

const TabsContext = createContext<UseTab>(initialContextState);

export const TabsProvider = ({ children }: TabsProviderProps): ReactElement => {
  const value: UseTab = useTab();

  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};

export const useTabsContext = (): UseTab => {
  const context = useContext(TabsContext);
  if (context === undefined) {
    throw new Error("useTabs must be used within a TabsProvider");
  }
  return context;
};
