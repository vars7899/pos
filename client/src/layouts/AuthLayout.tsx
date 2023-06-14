import * as Components from "../components";

interface AuthLayoutProps {
  type: "login" | "register";
  children: React.ReactNode;
  registerStepInformation?: {
    currentStep: number;
    totalSteps: number;
    stepInformationArray: { title: string; body: string }[];
  };
}

export const AuthLayout = ({ type, children, registerStepInformation }: AuthLayoutProps) => {
  return (
    <div className="h-[100vh] w-[100vw] max-h-[100vh] max-w-[100vw] grid grid-cols-[1fr,_700px]">
      <Components.Auth.AuthInformation type={type} registerStepInformation={registerStepInformation} />
      <div>{children}</div>
    </div>
  );
};
