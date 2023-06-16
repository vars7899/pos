import * as Component from "../components";
import * as Hook from "../hooks";

interface DashboardLayoutParams {
  isLoading?: boolean;
  children: React.ReactNode;
}

const DashboardLayout = ({ isLoading, children }: DashboardLayoutParams) => {
  const { $toggleTheme, theme } = Hook.useThemeMode();

  return (
    <div className="max-h-[100vh] h-[100vh] grid grid-cols-[auto,_1fr]">
      <Component.Dashboard.Sidebar />
      <div className="h-[100%]">
        <Component.Dashboard.Navbar theme={theme} $toggleTheme={$toggleTheme} />
        <div className="dark:bg-UltraDark h-[calc(100vh-75px)]">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
