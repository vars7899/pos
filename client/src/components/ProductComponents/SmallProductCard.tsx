import { IconArrowNarrowRight, IconPlus, IconMinus } from "@tabler/icons-react";
import { Currency } from "../../global/constants";
import { Product } from "../../global/types";

type SmallProductCardProps = {
  product: Product;
};

const SmallProductCard = ({ product }: SmallProductCardProps) => {
  return (
    <div className="grid grid-cols-[1fr,_40px] px-4 py-3 rounded-md border-[1px]">
      <div className="flex flex-col justify-between">
        <div>
          <p className="text-lg font-semibold capitalize tracking-wide">{product.name}</p>
          <p className="text-sm text-slate-700 font-medium">{Currency + " " + product.price}</p>
        </div>
        <div className="flex items-center mt-6">
          <p className="uppercase text-xs font-medium">Orders</p>
          <div className="px-2 text-slate-400">
            <IconArrowNarrowRight strokeWidth={1.5} />
          </div>
          <p className="uppercase text-xs text-slate-400 font-medium">{product.station}</p>
        </div>
      </div>
      {/* Card Quantity Controls */}
      <div className="flex flex-col items-center justify-between">
        <button className="iconOutlineBtn bg-white">
          <IconPlus size={20} strokeWidth={1.5} />
        </button>
        <p className="py-2 text-2xl font-semibold">0</p>
        <button className="iconOutlineBtn bg-white">
          <IconMinus size={20} />
        </button>
      </div>
    </div>
  );
};

export default SmallProductCard;
