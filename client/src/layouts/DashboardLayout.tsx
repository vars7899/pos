import React from "react";
import * as Component from "../components";
import * as Hook from "../hooks";

interface DashboardLayoutParams {
  isLoading?: boolean;
  children: React.ReactNode;
}

const DashboardLayout = ({ isLoading, children }: DashboardLayoutParams) => {
  const { $toggleTheme } = Hook.useThemeMode();

  return (
    <div className="max-h-[100vh] h-[calc(100vh-75px)]">
      <Component.DashboardNavbar $toggleTheme={$toggleTheme} />
      <div className="grid grid-cols-[350px,_1fr] bg-zinc-100 h-[100%]">
        <Component.DashboardSidebar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
