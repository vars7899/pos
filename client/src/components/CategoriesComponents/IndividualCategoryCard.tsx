import React from "react";
import { IconBeer } from "@tabler/icons-react";
type Props = {
  name: string;
  count: number;
};

const IndividualCategoryCard = ({ name, count }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center bg-red-200 rounded-xl  px-8 py-6">
      <IconBeer size={36} strokeWidth={1.5} />
      <p className="text-xl capitalize mt-2 font-semibold">{name}</p>
      <p className="text-xs text-slate-600">{count} Options</p>
    </div>
  );
};

export default IndividualCategoryCard;
