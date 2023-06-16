import { IconScan, IconEdit, IconReceipt, IconTrash } from "@tabler/icons-react";
import { TableDetails } from "../../global/types";

type OrderTableFeaturesProps = {
  selectedTable: TableDetails;
};

const IconAttributes = {
  strokeWidth: 1.25,
  className: "cursor-pointer",
};

const OrderTableFeatures = ({ selectedTable }: OrderTableFeaturesProps) => {
  return (
    <div className="flex items-center justify-between border-b-[1px] px-4 h-[70px] ">
      <div className="flex flex-col justify-center">
        <p className="text-xl font-semibold">Table {selectedTable.tableNumber}</p>
        <p className="capitalize text-xs text-slate-600 font-medium">{"johnhansen flamingo"}</p>
      </div>
      <div className="grid grid-cols-4 justify-stretch">
        <div className="centerOut px-3">
          <IconScan {...IconAttributes} />
        </div>
        <div className="centerOut px-2">
          <IconEdit {...IconAttributes} />
        </div>
        <div className="centerOut px-2">
          <IconReceipt {...IconAttributes} />
        </div>
        <div className="centerOut px-2">
          <IconTrash {...IconAttributes} />
        </div>
      </div>
    </div>
  );
};

export default OrderTableFeatures;
