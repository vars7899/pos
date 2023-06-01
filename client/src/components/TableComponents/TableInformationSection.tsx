import React from "react";

const TableInformationSection = () => {
  return (
    <div className="px-4">
      <div className="flex items-center justify-between">
        <div className="h-[95px] flex flex-col justify-center">
          <p className="text-lg font-semibold">Table Details</p>
          <p className="uppercase text-sm text-slate-600">ID #034ng03n4g09n340g9n039n4g</p>
        </div>
        <div className="bg-orange-100 px-5 py-4 text-2xl text-orange-700 rounded-xl">
          <p>13</p>
        </div>
      </div>
      <div className="flex items-center justify-center w-[100%] mb-6">
        <div className="h-[300px] w-[300px] rounded-full relative flex items-center justify-center">
          {/* Table div */}
          <div className="h-[74%] w-[74%] rounded-full bg-orange-100 relative flex items-center justify-center border-2 border-orange-600 flex-col">
            <p className="text-slate-600 font-semibold">Table No.</p>
            <p className="text-2xl font-semibold">13</p>
          </div>
          {/* Seat div's */}
          {Array.from({ length: 12 }, (_, i) => i).map((_, index) => (
            <div
              style={{ transform: `rotate(calc(360deg/${12} * ${index}))` }}
              className="absolute left-0 origin-[150px]  shadow-lg shadow-orange-600/20 flex flex-row"
            >
              <div className="bg-orange-600 rounded-lg p-1"></div>
              <div className="bg-orange-600 rounded-lg p-3"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-3">
        <SmallInformationSection heading="Seating Capacity" value={6} />
        <SmallInformationSection heading="Location" value={"Floor 1"} />
        <SmallInformationSection heading="Current Status" value={"Un-Available"} />
        <SmallInformationSection heading="Waiting Time" value={"Un-Available"} />
        <SmallInformationSection heading="Paid" value={"false"} />
      </div>
      <div className="mt-4 border-t-[1px] py-4">
        <div>
          <p className="text-lg font-semibold">Table Order</p>
          <p className="uppercase text-sm text-slate-600">ORDER ID #034ng03n4g09n340g9n039n4g</p>
        </div>
      </div>
    </div>
  );
};

type SmallInformationSectionProps = {
  heading: string;
  value: number | string;
};

const SmallInformationSection = ({ heading, value }: SmallInformationSectionProps) => {
  return (
    <div className="">
      <div className="text-slate-600">{heading}</div>
      <div className="text-xl text-center border-[1px] rounded-xl px-3 py-2 mt-2 capitalize">{value}</div>
    </div>
  );
};

export default TableInformationSection;
