import React from "react";

type Props = {
  heading: string;
  otherOptions?: React.JSX.Element;
};

const SectionHeading = ({ heading, otherOptions }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <p className="text-xl font-semibold">{heading}</p>
      <div>{otherOptions}</div>
    </div>
  );
};

export default SectionHeading;
