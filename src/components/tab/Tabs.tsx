import React, { useEffect } from "react";
import { TabsProvider, useTabsContext } from "./TabsContext";

type TabProps = {
  children: React.ReactNode;
  activeTab?: number;
};

type TabTitle = {
  render?: () => React.ReactNode;
  tabsTitle: {
    id: string;
    title: string;
  }[];
};

type TabPanel = {
  render?: () => React.ReactNode;
  tabsContent: {
    id: string;
    content: React.ReactNode;
  }[];
};

const Tabs = ({ children }: TabProps) => {
  return <TabsProvider>{children}</TabsProvider>;
};

Tabs.TabTitle = ({ render, tabsTitle }: TabTitle) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { handleClick, activeTab, lineRef } = useTabsContext();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const button = document.querySelector(
      `[aria-selected="true"]`
    ) as HTMLButtonElement;
    if (lineRef.current) {
      lineRef.current.style.width = `${button.offsetWidth}px`;
      lineRef.current.style.left = `${button.offsetLeft}px`;
    }
  }, []);
  if (!render) {
    return (
      <div className="flex relative">
        {tabsTitle.map(
          ({ id, title }: { id: string; title: string }, index: number) => (
            <button
              key={id}
              id={`tab-control-${id}`}
              role="tabtitle"
              aria-label={`${id}`}
              aria-controls={`tab-content-${id}`}
              aria-selected={activeTab === index}
              onClick={() => handleClick && handleClick(index)}
              type="button"
              className="p-4"
            >
              {title}
            </button>
          )
        )}
        <span
          ref={lineRef}
          className="absolute block bg-blue-600 h-px bottom-0 transition-all"
        ></span>
      </div>
    );
  }
  return render();
};

Tabs.TabPanel = ({ render, tabsContent }: TabPanel) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { activeTab } = useTabsContext();
  const { id, content } = tabsContent[activeTab];
  if (!render) {
    return (
      <div
        className="p-4"
        key={id}
        id={`tab-content-${id}`}
        role="tabpanel"
        aria-labelledby={`tab-control-${id}`}
      >
        {content}
      </div>
    );
  }
  return render();
};

export default Tabs;
