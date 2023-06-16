import React from "react";

interface OptionBoxProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  required?: boolean;
  className?: string;
}

export const OptionBox = ({ title, subtitle, children, required = false, className }: OptionBoxProps) => {
  return (
    <div className={className}>
      <div className="grid grid-cols-[0.75fr,_1fr]">
        <div>
          <p className="text-lg capitalize dark:text-neutral-400">
            {title}
            <span className="ml-1 text-red-500">{required ? "*" : null}</span>
          </p>
          <p className="text-sm dark:text-neutral-600">{subtitle}</p>
        </div>
        <div className="w-full flex items-center">{children}</div>
      </div>
    </div>
  );
};
