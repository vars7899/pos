import { NavigationOptionList } from "./Navigation";
import {
  IconArmchair,
  IconLayoutGrid,
  IconReceipt,
  IconClock,
  IconPaperBag,
  IconDashboard,
  IconUser,
  IconBooks,
  IconSettings,
} from "@tabler/icons-react";

export const DashboardNavigationList: NavigationOptionList = [
  {
    name: "Business Dashboard",
    path: "/dashboard/home",
    icon: <IconDashboard />,
  },
  {
    name: "Employee",
    path: "/dashboard/employee",
    icon: <IconUser />,
  },
  {
    name: "Menu & Product",
    path: "/dashboard/product",
    icon: <IconBooks />,
  },
  {
    name: "Store Setting",
    path: "/dashboard/setting",
    icon: <IconSettings />,
  },
  {
    name: "Orders",
    path: "/dashboard/order",
    icon: <IconPaperBag />,
  },
  {
    name: "Customer",
    path: "/dashboard/customer",
    icon: <IconReceipt />,
  },
];
