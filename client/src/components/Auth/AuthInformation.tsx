import { motion, AnimatePresence } from "framer-motion";
import * as Animation from "../../animations";
import * as Components from "../";

interface AuthInformationProps {
  type: "login" | "register";
  registerStepInformation?: {
    currentStep: number;
    totalSteps: number;
    stepInformationArray: { title: string; body: string }[];
  };
}

export const AuthInformation = ({ type, registerStepInformation }: AuthInformationProps) => {
  return (
    <div className="bg-black relative overflow-hidden">
      <motion.div
        variants={Animation.backgroundBubble("-50%", "-50%", [1, 3, 2], [-100, 100, 0], [-50, 100, 0])}
        initial="initial"
        animate="animate"
        className="absolute top-0 left-0 bg-sky-600/60 h-60 w-60 rounded-full"
      ></motion.div>
      <motion.div
        variants={Animation.backgroundBubble("50%", "50%", [1, 1.5, 2], [0, -50, -100, 0], [100, 200, 200, 0])}
        initial="initial"
        animate="animate"
        className="absolute bottom-0 right-0 bg-rose-600/80 h-60 w-60 rounded-full"
      ></motion.div>
      <div className="absolute h-[100%] w-[100%] bg-white/5 backdrop-blur-3xl"></div>
      <motion.div
        className="absolute left-10 top-10"
        variants={Animation.fadeIn(1)}
        initial="initial"
        animate="animate"
      >
        <Components.Brand.BrandLogo IconSize={28} textSize="text-2xl" color="text-white" />
      </motion.div>
      <motion.div
        variants={Animation.fadeIn(2)}
        initial="initial"
        animate="animate"
        className={`absolute ${type === "login" ? "left-10 bottom-10" : "left-10 top-20"} `}
      >
        <div
          className={`font-extrabold uppercase text-white font-beVietnam leading-none ${
            type === "login" ? "text-[8rem]" : "text-[4rem]"
          }`}
        >
          <p>next zen</p>
          <p>point of sale</p>
        </div>
        {type === "login" ? (
          <p className="text-zinc-400 text-xl font-thin font-beVietnam pl-2">
            POS that elevates the customer experience
          </p>
        ) : null}
      </motion.div>
      <motion.div
        className="absolute bottom-10 left-10"
        variants={Animation.fadeIn(3)}
        initial="initial"
        animate="animate"
      >
        {type === "register" && registerStepInformation ? (
          <Components.Auth.RegisterStepInformation
            currentStep={registerStepInformation.currentStep}
            totalSteps={registerStepInformation.totalSteps}
            stepInformationArray={registerStepInformation.stepInformationArray}
          />
        ) : null}
      </motion.div>
    </div>
  );
};
