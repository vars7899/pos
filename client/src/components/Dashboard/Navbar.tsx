import { IconChevronDown, IconMoon, IconNotification, IconPlus, IconSun } from "@tabler/icons-react";
import * as Function from "../../functions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../redux/store";
import { SET_CURRENT_STORE } from "../../redux/feature/storeSlice";

interface NavbarProps {
  theme: string;
  $toggleTheme?(): void;
}
const iconSetting = {
  strokeWidth: 1.5,
  size: 28,
};

export const Navbar = ({ theme, $toggleTheme }: NavbarProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { user } = useSelector((state: any) => state.auth);
  const { storeList, currentStore } = useSelector((state: any) => state.store);
  const [showStoreList, setShowStoreList] = useState<boolean>(false);

  return (
    <div className="px-6 border-b-[1px] border-Black h-[75px] flex items-center justify-between dark:bg-Black font-beVietnam">
      <div
        onMouseEnter={() => setShowStoreList(true)}
        onMouseLeave={() => setShowStoreList(false)}
        className="relative"
      >
        {currentStore ? (
          <div
            className={`${
              showStoreList ? "rounded-t-md border-b-[2px] dark:border-neutral-900" : "rounded-md"
            } px-4 py-2 flex items-center dark:bg-neutral-800 dark:text-neutral-200 cursor-pointer`}
          >
            <div className="mr-3 overflow-hidden ">
              <p className="font-medium truncate text-sm">{currentStore.name}</p>
              <p className="text-[10px] truncate text-zinc-400">
                {currentStore.address.street}, {currentStore.address.city}, {currentStore.address.state}{" "}
                {currentStore.address.country}
              </p>
            </div>
            <IconChevronDown size={20} />
          </div>
        ) : null}

        {showStoreList ? (
          <div className="absolute dark:bg-neutral-800 dark:text-neutral-200 rounded-b-md rounded-t- w-[100%] overflow-hidden">
            {storeList
              .filter((store) => store !== currentStore)
              .map((store) => (
                <div
                  className="px-4 py-2 flex items-center cursor-pointer z-50 dark:bg-neutral-900 hover:dark:bg-neutral-950 duration-150 ease-in-out"
                  // TODO when changing the store also get information about the store
                  onClick={() => dispatch(SET_CURRENT_STORE(store))}
                >
                  <div className="mr-3 overflow-hidden ">
                    <p className="font-medium truncate text-sm">{store.name}</p>
                    <p className="text-[10px] truncate text-zinc-400">
                      {store.address.street}, {store.address.city}, {store.address.state} {store.address.country}
                    </p>
                  </div>
                </div>
              ))}
            <div
              className="px-4 py-3 flex items-center justify-between cursor-pointer z-50 dark:bg-neutral-900 hover:dark:bg-neutral-950 duration-150 ease-in-out border-t-[2px] border-neutral-900"
              onClick={() => navigate("/dashboard/store/create")}
            >
              <div>
                <p className="text-sm">Add Store</p>
                <p className="text-[10px] truncate text-zinc-400">Create upto 5 store</p>
              </div>
              <IconPlus size={20} />
            </div>
          </div>
        ) : null}
      </div>

      <div className="flex items-center">
        <button className="rounded-md p-3 dark:text-zinc-50">
          <IconPlus {...iconSetting} />
        </button>
        <button className="rounded-md p-3 dark:text-zinc-50">
          <IconNotification {...iconSetting} />
        </button>
        <button className="rounded-md p-3 dark:text-zinc-50" onClick={$toggleTheme}>
          {theme === "dark" ? <IconSun {...iconSetting} /> : <IconMoon {...iconSetting} />}
        </button>
        <div className="ml-2 flex flex-col items-start rounded-md px-4 py-2 dark:bg-neutral-800 dark:text-neutral-200 w-[180px] overflow-hidden cursor-pointer">
          <p className="font-medium dark:text-neutral-200 truncate block">
            {user ? Function.hideStringOverflow(`${user.firstName} ${user.lastName}`, 14) : "Loading..."}
          </p>
          <p className="text-[10px] text-neutral-400 font-medium uppercase">
            {user ? user.email : "default@registerox.com"}
          </p>
        </div>
      </div>
    </div>
  );
};
