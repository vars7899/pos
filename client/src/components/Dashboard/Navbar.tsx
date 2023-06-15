import { useState } from "react";
import { IconBallVolleyball, IconChevronDown, IconSun } from "@tabler/icons-react";
import * as Component from "..";

interface NavbarProps {
  $toggleTheme?(): void;
}

export const Navbar = ({ $toggleTheme }: NavbarProps) => {
  const [currentDate] = useState<string>(Date());
  return (
    <div className="px-6 border-b-[1px] border-Black h-[75px] flex items-center justify-between dark:bg-Black">
      <div className="border-[1px] rounded-md px-6 py-4 flex items-center">
        <div className="mr-4 overflow-hidden">
          <p className="font-medium truncate">Rocky Mountaineer Company</p>
          <p className="text-xs truncate text-zinc-400">1175 Victoria street, Vancouver, British Columbia</p>
        </div>
        <IconChevronDown />
      </div>
      <div className="flex items-center">
        <div className="flex flex-col items-end mr-4">
          <p className="text-lg font-medium dark:text-zinc-50">Vaibhav Dhiman</p>
          <p className="text-sm text-zinc-500 font-medium">{currentDate.slice(0, 15).replace(/-/g, "/")}</p>
        </div>
        <button className="rounded-md border-[1px] p-3 dark:text-zinc-50" onClick={$toggleTheme}>
          <IconSun />
        </button>
      </div>
    </div>
  );
};
