import React, { useState } from "react";

const useTabs = (givenTabList: { title: string; component: React.ReactNode }[]) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function $jumpTo(n: number) {
    if (n === undefined) return;
    if (n < 0 || n > givenTabList.length - 1) return;
    setCurrentTabIndex(() => n);
  }

  return {
    $jumpTo,
    currentTab: givenTabList[currentTabIndex].component,
    tabButtons: (
      <div className="mt-10 flex">
        {givenTabList.map((tab, index) => (
          <p
            key={index}
            className={`border-b-4 py-2 px-8 capitalize w-fit cursor-pointer hover:bg-zinc-100 ${
              currentTabIndex === index ? "border-emerald-600 text-emerald-600" : "border-none text-zinc-500"
            }`}
            onClick={() => $jumpTo(index)}
          >
            {tab.title}
          </p>
        ))}
      </div>
    ),
  };
};

export default useTabs;
