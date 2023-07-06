import * as Layout from "../../layouts";
import * as Component from "../../components";
import * as Hook from "../../hooks";
import { IconCloudDownload, IconPlus } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export const ProductList = () => {
  const navigate = useNavigate();
  const { currentTab, tabButtons } = Hook.useTabs([
    { title: "all products", component: <Component.Default.Table /> },
    { title: "hidden", component: <div>2</div> },
    { title: "new inventory", component: <div>3</div> },
  ]);
  return (
    <Layout.DashboardLayout>
      <div className="px-6 pt-6 dark:bg-Black">
        <Component.Default.BreadCrumb />
        <div className="flex items-start justify-between pt-4">
          <div>
            <p className="dark:text-white font-beVietnam text-2xl">Product List</p>
            <p className="dark:text-neutral-600 mt-1 max-w-6xl">
              Please allocate some time to thoroughly evaluate and meticulously review every single product available in
              your store. This comprehensive assessment will enable you to meticulously examine each item, identify any
              areas for improvement, and make the necessary modifications and adjustments. Your attention to detail and
              dedication to ensuring the highest quality of your inventory will contribute to enhancing customer
              satisfaction and overall success in your business.
            </p>
          </div>
          <div className="grid grid-flow-col gap-3">
            <div className="flex items-center justify-between dark:border-[1px] px-5 py-2 rounded-md dark:text-neutral-200 dark:border-neutral-200">
              <IconCloudDownload />
              <p className="ml-3">Export</p>
            </div>
            <div
              className="flex items-center justify-between dark:border-[1px] px-5 py-2 rounded-md dark:text-neutral-200 bg-indigo-800 border-indigo-800 cursor-pointer"
              onClick={() => navigate("/dashboard/product/create")}
            >
              <IconPlus strokeWidth={1.5} />
              <p className="ml-2">Add Product</p>
            </div>
          </div>
        </div>
        {/* <div className="mt-4">
          <input
            className="border-[1px] border-zinc-200 bg-transparent rounded-md text-base text-zinc-950 px-[16px] py-[10px] dark:border-neutral-800"
            placeholder="Search for products"
          />
          <div></div>
        </div> */}
        <div>{tabButtons}</div>
      </div>
      <div className="p-6">
        <div>{currentTab}</div>
      </div>
    </Layout.DashboardLayout>
  );
};
