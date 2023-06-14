interface RegisterStepInformationProps {
  currentStep: number;
  totalSteps: number;
  stepInformationArray: { title: string; body: string }[];
}

export const RegisterStepInformation = (props: RegisterStepInformationProps) => {
  return (
    <div className="font-beVietnam">
      <div className="min-h-[100px]">
        <p className="text-white text-3xl font-medium">{props.stepInformationArray[props.currentStep].title}</p>
        <p className="mt-1 text-xl text-zinc-400">{props.stepInformationArray[props.currentStep].body}</p>
      </div>
      <div className="w-min grid grid-flow-col-dense gap-2">
        {Array.from({ length: props.totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-md ${props.currentStep >= index ? "bg-white" : "bg-zinc-800"}`}
          ></div>
        ))}
      </div>
    </div>
  );
};
