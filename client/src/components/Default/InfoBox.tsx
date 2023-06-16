import React from "react";

interface InfoBoxProps {
  title: string;
  children: React.ReactNode;
}

export const InfoBox = ({ title, children }: InfoBoxProps) => {
  return (
    <div className="rounded-md overflow-hidden">
      <p className="border-b-[1px] border-black dark:bg-neutral-800 dark:text-neutral-200 text-xl px-8 py-4 capitalize">
        {title}
      </p>
      <div className="dark:bg-neutral-900 px-8 py-4">{children}</div>
    </div>
  );
};
