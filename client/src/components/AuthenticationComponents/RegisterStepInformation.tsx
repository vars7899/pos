import { IconBallVolleyball } from "@tabler/icons-react";

interface RegisterStepInformationProps {
  currentStep: number;
  totalSteps: number;
  stepInformationArray: { title: string; body: string }[];
}

const RegisterStepInformation = (props: RegisterStepInformationProps) => {
  return (
    <div className="bg-zinc-200 px-20 py-12 flex flex-col justify-between">
      <div className="flex items-center font-normal text-zinc-950">
        <IconBallVolleyball strokeWidth={1.5} size={40} />
        <p className="text-3xl ml-2">Register Ox</p>
      </div>
      <div>
        <p className="text-lg font-medium mb-2">Step {props.currentStep + 1}</p>
        <div className="min-h-[125px]">
          <p className="text-3xl font-medium">{props.stepInformationArray[props.currentStep].title}</p>
          <p className="mt-1 text-lg text-zinc-500">{props.stepInformationArray[props.currentStep].body}</p>
        </div>
        <div className="grid grid-flow-col gap-2">
          {Array.from({ length: props.totalSteps }).map((_, index) => (
            <div
              key={index}
              className={`w-[100%] h-2 rounded-md ${props.currentStep >= index ? "bg-zinc-950" : "bg-white"}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegisterStepInformation;
