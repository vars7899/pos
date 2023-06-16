import { useState } from "react";

interface LimitInputProps {
  inputType: string;
  name: string;
  value: string;
  onChange(e: any): any;
  placeHolder: string;
  className?: string;
  min?: number;
  limit?: boolean;
  minLength?: number;
  maxLength?: number;
  disabled?: boolean;
}

export const LimitInput = ({
  inputType,
  name,
  value,
  onChange,
  placeHolder,
  className,
  min,
  limit = false,
  minLength,
  maxLength,
  disabled,
}: LimitInputProps) => {
  const [currentLength, setCurrentLength] = useState<number>(0);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e);
    setCurrentLength(() => e.target?.value.length);
    console.log(e.target?.value.length);
  }

  return (
    <div className={className}>
      <input
        className="border-[1px] border-zinc-200 bg-transparent rounded-md text-base text-zinc-950 px-[16px] py-[10px] dark:border-neutral-600 dark:text-neutral-400 dark:placeholder:text-neutral-600 w-[100%] dark:focus:border-sky-600"
        type={inputType}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeHolder}
        min={min}
        minLength={minLength}
        maxLength={maxLength}
        disabled={disabled}
      />
      {limit ? (
        <p className="text-sm text-end mt-1 text-neutral-400">
          {currentLength}/{maxLength}
        </p>
      ) : null}
    </div>
  );
};
