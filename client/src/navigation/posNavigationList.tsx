import { NavigationOptionList } from "./Navigation";
import { IconArmchair, IconLayoutGrid, IconReceipt, IconClock, IconPaperBag } from "@tabler/icons-react";

export const posNavigationList: NavigationOptionList = [
  {
    name: "Menu",
    path: "/pos/menu",
    icon: <IconLayoutGrid />,
  },
  {
    name: "Table",
    path: "/pos/table",
    icon: <IconArmchair />,
  },
  {
    name: "Order List",
    path: "/pos/order-list",
    icon: <IconPaperBag />,
  },
  {
    name: "History",
    path: "/pos/history",
    icon: <IconClock />,
  },
  {
    name: "Bills",
    path: "/pos/bills",
    icon: <IconReceipt />,
  },
];
