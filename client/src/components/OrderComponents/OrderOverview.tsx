import { Currency } from "../../global/constants";
import { OrderDetails } from "../../global/types";
import { IconCircleMinus } from "@tabler/icons-react";

type OrderOverviewProps = {
  orderDetails: OrderDetails;
};

const OrderOverview = ({ orderDetails }: OrderOverviewProps) => {
  return (
    <div className="px-4 py-3">
      {orderDetails.orderItem.map((item, index) => (
        <div className="" key={`order-item-${index}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <p className="font-bold w-5">{item.quantity}</p>
              <p className="capitalize font-semibold tracking-wide ml-3">{item.product.name}</p>
              <p className="bg-slate-400 p-2 text-white font-bold rounded-full ml-3 text-xs">G{item?.guestNumber}</p>
            </div>
            <p className="font-semibold">{Currency + " " + item.product.price}</p>
          </div>
          {item.add ? (
            <div className="relative ml-1 pl-7 border-l-[1px] py-1">
              <p className="font-medium mb-1">Add</p>
              {item?.add.map((ing, index) => (
                <div key={`ingredient-${index}`} className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <IconCircleMinus className="text-red-400" />
                    <p className="font-medium text-gray-400 capitalize ml-2">{ing.name}</p>
                  </div>
                  <p className="font-medium text-gray-400">{Currency + " " + ing.price}</p>
                </div>
              ))}
              <div className="w-5 border-t-[1px] absolute top-4 left-0"></div>
            </div>
          ) : null}
          {item.remove ? (
            <div className="relative ml-1 pl-7 border-l-[1px] py-1">
              <p className="font-medium mb-1">Remove</p>
              {item?.remove.map((ing, index) => (
                <div key={`ingredient-${index}`} className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <IconCircleMinus className="text-red-400" />
                    <p className="font-medium text-gray-400 capitalize ml-2">{ing.name}</p>
                  </div>
                  <p className="font-medium text-gray-400">{Currency + " " + ing.price}</p>
                </div>
              ))}
              <div className="w-5 border-t-[1px] absolute top-4 left-0"></div>
            </div>
          ) : null}
          {item.sides ? (
            <div className="relative ml-1 pl-7 border-l-[1px] py-1">
              <p className="font-medium mb-1">Sides</p>
              {item?.sides.map((ing, index) => (
                <div key={`ingredient-${index}`} className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <IconCircleMinus className="text-red-400" />
                    <p className="font-medium text-gray-400 capitalize ml-2">{ing.name}</p>
                  </div>
                  <p className="font-medium text-gray-400">{Currency + " " + ing.price}</p>
                </div>
              ))}
              <div className="w-5 border-t-[1px] absolute top-4 left-0"></div>
            </div>
          ) : null}
          {item.notes ? (
            <div className="relative ml-1 pl-7 border-l-[1px] py-2">
              <p className="font-medium mb-1">Note</p>
              <div className="flex py-2">
                <IconCircleMinus className="text-red-400 w-[24px]" />
                <p className="font-medium text-gray-400 ml-2 w-[90%]">{item.notes}</p>
              </div>
              <div className="w-5 border-t-[1px] absolute top-5 left-0"></div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default OrderOverview;
