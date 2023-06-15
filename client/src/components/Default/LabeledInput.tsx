interface LabeledButtonProps {
  label: string;
  inputType: string;
  name: string;
  value: string;
  onChange(e: any): any;
  placeHolder: string;
  className?: string;
  min?: number;
}

export const LabeledInput = (props: LabeledButtonProps) => {
  return (
    <div className={`formControl mb-4 ${props.className}`}>
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
