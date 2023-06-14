import { useState } from "react";
import * as Types from "../../global/types";
import * as DefaultData from "../../global/defaultData";
import { IconBallVolleyball } from "@tabler/icons-react";
import * as Components from "../../components";
import { motion } from "framer-motion";

const UserLogin = () => {
  const [formData, setFormData] = useState<Types.UserLoginData>(DefaultData.UserLoginData);

  function $updateFormData(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <div className="h-[100vh] w-[100vw] max-h-[100vh] max-w-[100vw] grid grid-cols-[1fr,_700px]">
      <div className="bg-black relative overflow-hidden">
        <motion.div
          initial={{
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            scale: [1, 3, 2],
            translateX: [-100, 100, 0],
            translateY: [-50, 100, 0],
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              duration: 8,
            },
          }}
          className="absolute top-0 left-0 bg-sky-600/60 h-60 w-60 rounded-full"
        ></motion.div>
        <motion.div
          initial={{
            translateX: "50%",
            translateY: "50%",
          }}
          animate={{
            scale: [3, 1.5, 4],
            translateX: [-100, -200, -100, 0],
            translateY: [100, 200, 200, 0],
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              duration: 10,
            },
          }}
          className="absolute bottom-0 right-0 bg-rose-600/80 h-60 w-60 rounded-full"
        ></motion.div>
        <div className="absolute h-[100%] w-[100%] bg-white/5 backdrop-blur-3xl"></div>
        <motion.div
          className="absolute left-10 bottom-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 1], transition: { duration: 3 } }}
        >
          <div className="text-[8rem] font-extrabold uppercase text-white font-beVietnam leading-none">
            <p>next zen</p>
            <p>point of sale</p>
          </div>
          <p className="text-zinc-400 text-xl font-thin font-beVietnam pl-2">
            POS that elevates the customer experience
          </p>
        </motion.div>
      </div>
      <div className="pt-20 px-14">
        <div className="flex items-center justify-center font-normal text-zinc-950">
          <IconBallVolleyball strokeWidth={1} size={60} />
          <p className="text-4xl ml-2">Register Ox</p>
        </div>
        <div className="mt-20 mb-12">
          <p className="mt-16 text-5xl font-semibold mb-2">Welcome Back</p>
          <p className="text-zinc-600">In order to access your dashboard, you will need to enter your credential</p>
        </div>
        <Components.UserLoginForm formData={formData} $updateFormData={$updateFormData} />
      </div>
    </div>
  );
};

export default UserLogin;
