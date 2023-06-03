import { IconDiscount, IconGridDots } from "@tabler/icons-react";
import { Currency } from "../../global/constants";

const IconAttributes = {
  strokeWidth: 1.25,
  className: "cursor-pointer",
};

const OrderTotalSection = () => {
  return (
    <div>
      <div className="grid grid-cols-2 border-[1px] divide-x-[1px]">
        <button className="flex items-center justify-center py-3 text-emerald-600">
          <IconDiscount {...IconAttributes} />
          <p className="ml-2 font-semibold text-lg">Discount</p>
        </button>
        <button className="flex items-center justify-center py-3 text-purple-600">
          <IconGridDots {...IconAttributes} />
          <p className="ml-2 font-semibold text-lg">Add Amount</p>
        </button>
      </div>
      {/* order price summary */}
      <div className="px-4 py-1">
        <div className="flex items-center justify-between py-1 font-semibold text-gray-400">
          <p>Tax</p>
          <p>{Currency + " " + 23.23}</p>
        </div>
        <div className="flex items-center justify-between py-1 font-semibold text-gray-400">
          <p>Subtotal</p>
          <p>{Currency + " " + 207.66}</p>
        </div>
        <div className="flex items-center justify-between py-1 font-semibold">
          <p>Total</p>
          <p>{Currency + " " + 230.89}</p>
        </div>
      </div>
      {/* fire Order button */}
      <button className="text-xl font-semibold tracking-wide flex items-center justify-center w-[100%] py-4 bg-indigo-100">
        <p className="text-indigo-800">Fire Order</p>
      </button>
    </div>
  );
};

export default OrderTotalSection;
