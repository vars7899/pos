import React from "react";
import SectionHeading from "../SectionHeading";
import IndividualCategoryCard from "./individualCategoryCard";

const SelectCategoryListContainer: React.FC = () => {
  return (
    <div className="p-5">
      <SectionHeading heading="Categories" />
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(140px,_1fr))] gap-2 mt-4">
        <IndividualCategoryCard name="cocktails" count={202} />
        <IndividualCategoryCard name="cocktails" count={202} />
        <IndividualCategoryCard name="cocktails" count={202} />
        <IndividualCategoryCard name="cocktails" count={202} />
        <IndividualCategoryCard name="cocktails" count={202} />
        <IndividualCategoryCard name="cocktails" count={202} />
        <IndividualCategoryCard name="cocktails" count={202} />
        <IndividualCategoryCard name="cocktails" count={202} />
      </div>
    </div>
  );
};

export default SelectCategoryListContainer;
