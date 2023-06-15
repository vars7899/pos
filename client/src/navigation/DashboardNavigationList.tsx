import { NavigationOptionList } from "./Navigation";
import { IconReceipt, IconPaperBag, IconDashboard, IconUser, IconBooks, IconSettings } from "@tabler/icons-react";

export const DashboardNavigationList: NavigationOptionList = [
  {
    name: "Business Overview",
    path: "/dashboard/overview",
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
