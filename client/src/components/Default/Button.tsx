import { motion } from "framer-motion";

interface ButtonProps {
  title: string;
  type?: "filled" | "outline" | "link";
  onClick?(e: any): any;
}

export const Button = ({ title, type = "filled", onClick }: ButtonProps) => {
  return (
    <motion.button
      whileTap={{ scale: 0.99 }}
      className={`mt-8 text-lg font-medium rounded-lg py-3 w-[100%] capitalize  ${
        type === "filled"
          ? "text-zinc-50 bg-zinc-950 hover:bg-zinc-900"
          : type === "outline"
          ? "text-zinc-950 border-[1px] border-zinc-950"
          : null
      }`}
      onClick={onClick}
    >
      {title}
    </motion.button>
  );
};
