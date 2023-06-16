import { IconChevronDown, IconMoon, IconSun } from "@tabler/icons-react";
import { useSelector } from "react-redux";
import Switch from "react-switch";

interface NavbarProps {
  theme: string;
  $toggleTheme?(): void;
}
const iconSetting = {
  strokeWidth: 1.5,
  size: 28,
};

export const Navbar = ({ theme, $toggleTheme }: NavbarProps) => {
  const { user } = useSelector((state: any) => state.auth);
  return (
    <div className="px-6 border-b-[1px] border-Black h-[75px] flex items-center justify-between dark:bg-Black font-beVietnam">
      <div className="rounded-md px-4 py-2 flex items-center dark:bg-neutral-800 dark:text-neutral-200">
        <div className="mr-3 overflow-hidden ">
          <p className="font-medium truncate">Rocky Mountaineer Company</p>
          <p className="text-[10px] truncate text-zinc-400">1175 Victoria street, Vancouver, British Columbia</p>
        </div>
        <IconChevronDown size={20} />
      </div>
      <div className="flex items-center">
        <div className="flex flex-col items-end mr-4">
          <p className="font-medium dark:text-neutral-200">
            {user ? `${user.firstName} ${user.lastName}` : "John Doe"}
          </p>
          <p className="text-[10px] text-neutral-400 font-medium uppercase">
            {user ? user.email : "johndoe@registerox.com"}
          </p>
        </div>
        <button className="rounded-md p-3 dark:text-zinc-50" onClick={$toggleTheme}>
          {theme === "dark" ? <IconSun {...iconSetting} /> : <IconMoon {...iconSetting} />}
        </button>
      </div>
    </div>
  );
};
