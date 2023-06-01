import React from "react";
import { IconUser } from "@tabler/icons-react";

type Props = {
  numberOfSeats: number;
  tableNumber: number;
};

const IndividualTable = ({ numberOfSeats, tableNumber }: Props) => {
  return (
    <div className="border-[1px] flex flex-col items-center justify-center p-4 rounded-lg relative cursor-pointer">
      <div className="h-[180px] w-[180px] rounded-full relative flex items-center justify-center">
        {/* Table div */}
        <div className="h-[120px] w-[120px] rounded-full bg-orange-100 relative flex items-center justify-center border-2 border-orange-600 flex-col">
          <p className="text-slate-600 font-semibold text-xs">Table No.</p>
          <p className="text-2xl font-semibold">{tableNumber}</p>
        </div>
        {/* Seat div's */}
        {Array.from({ length: numberOfSeats }, (_, i) => i).map((_, index) => (
          <div
            style={{ transform: `rotate(calc(360deg/${numberOfSeats} * ${index}))` }}
            className="absolute left-0 origin-[90px] bg-orange-600 rounded-lg p-3 shadow-lg shadow-orange-600/20"
          >
            <div style={{ transform: `rotate(calc(360deg/-${numberOfSeats} * ${index}))` }}>
              {/* <IconUser size={18} /> */}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-2 left-2 bg-green-100 px-2 rounded-lg">
        <p className="text-green-600">free</p>
      </div>
    </div>
  );
};

export default IndividualTable;
