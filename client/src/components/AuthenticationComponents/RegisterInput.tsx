import { ChangeEvent } from "react";

interface RegisterInputProps {
  label: string;
  inputType: string;
  name: string;
  value: string;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  placeHolder: string;
  className?: string;
  min?: number;
}

const RegisterInput = (props: RegisterInputProps) => {
  return (
    <div className={`formControl pb-4`}>
      <label className="inputLabel capitalize">{props.label}</label>
      <input
        className="outlineInput"
        type={props.inputType}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeHolder}
        min={props.min}
      />
    </div>
  );
};

export default RegisterInput;
