import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

interface RegisterStepNavigationProps {
  $nextStep(e: any): void;
  $prevStep(): void;
  currentStep: number;
}

export const RegisterStepNavigation = (props: RegisterStepNavigationProps) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center py-6 px-16 border-t-[1px] w-[100%]">
      <button
        className="font-medium rounded-md py-3 px-5 flex items-center justify-center border-[1px]"
        onClick={() => (props.currentStep <= 0 ? navigate("/") : props.$prevStep())}
      >
        <IconArrowLeft strokeWidth={1.5} size={20} />
        <p className="ml-2 capitalize">{props.currentStep <= 0 ? "Go Home" : "previous step"}</p>
      </button>
      <button
        type="submit"
        className="font-medium rounded-md py-3 px-5 flex items-center justify-center bg-zinc-950 text-white"
        onClick={(e) => props.$nextStep(e)}
      >
        <p className="mr-2 capitalize">Next Step</p>
        <IconArrowRight strokeWidth={1.5} size={20} />
      </button>
    </div>
  );
};
