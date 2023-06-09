import { motion } from "framer-motion";

interface ButtonProps {
  children?: React.ReactNode;
  type?: "filled" | "outline" | "link";
  onClick?(e: any): any;
  className?: string;
  actionType?: "button" | "submit" | "reset" | undefined;
}

export const Button = ({ children, type = "filled", onClick, className, actionType = "button" }: ButtonProps) => {
  return (
    <motion.button
      whileTap={{ scale: 0.99 }}
      className={`text-lg font-medium rounded-lg py-3 px-5 capitalize  ${
        type === "filled"
          ? "text-zinc-50 bg-zinc-950 hover:bg-zinc-900 dark:bg-neutral-800"
          : type === "outline"
          ? "text-zinc-950 border-[1px] border-zinc-950"
          : null
      } ${className}`}
      onClick={onClick}
      type={actionType}
    >
      {children}
    </motion.button>
  );
};
