import * as Components from "../components";
import * as Animation from "../animations";
import { motion } from "framer-motion";

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
      <motion.div variants={Animation.fadeIn(1)} initial="initial" animate="animate">
        {children}
      </motion.div>
    </div>
  );
};
