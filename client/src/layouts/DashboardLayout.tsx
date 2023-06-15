import * as Component from "../components";
import * as Hook from "../hooks";
import { useState } from "react";

interface DashboardLayoutParams {
  isLoading?: boolean;
  children: React.ReactNode;
}

const DashboardLayout = ({ isLoading, children }: DashboardLayoutParams) => {
  const { $toggleTheme } = Hook.useThemeMode();
  const [expandSidebar, setExpandSidebar] = useState<boolean>(true);

  function $toggleSidebar() {
    setExpandSidebar((prev) => !prev);
  }

  return (
    <div className="max-h-[100vh] h-[100vh] grid grid-cols-[auto,_1fr]">
      <Component.Dashboard.Sidebar expandSidebar={expandSidebar} $toggleSidebar={$toggleSidebar} />
      <div className="h-[100%]">
        <Component.Dashboard.Navbar $toggleTheme={$toggleTheme} />
        <div className="dark:bg-UltraDark">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
