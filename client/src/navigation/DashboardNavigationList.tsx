import { NavigationOptionList } from "./Navigation";
import { IconReceipt, IconPaperBag, IconDashboard, IconUser, IconBooks, IconSettings } from "@tabler/icons-react";

const IconSetting = {
  size: 32,
  strokeWidth: 1,
};

export const DashboardNavigationList: NavigationOptionList = [
  {
    name: "Overview",
    path: "/dashboard/overview",
    icon: <IconDashboard {...IconSetting} />,
  },
  {
    name: "Employee",
    path: "/dashboard/employee",
    icon: <IconUser {...IconSetting} />,
  },
  {
    name: "Menu & Product",
    path: "/dashboard/product",
    icon: <IconBooks {...IconSetting} />,
  },
  {
    name: "Store Setting",
    path: "/dashboard/setting",
    icon: <IconSettings {...IconSetting} />,
  },
  {
    name: "Orders",
    path: "/dashboard/order",
    icon: <IconPaperBag {...IconSetting} />,
  },
  {
    name: "Customer",
    path: "/dashboard/customer",
    icon: <IconReceipt {...IconSetting} />,
  },
];
