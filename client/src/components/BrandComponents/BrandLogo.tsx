import { IconBallVolleyball } from "@tabler/icons-react";

interface BrandLogoProps {
  IconSize: number;
  textSize: string;
  color: string;
  className?: string;
}

export const BrandLogo = ({ IconSize = 40, textSize = "text-xl", color, className }: BrandLogoProps) => {
  return (
    <div className={className}>
      <div className={`flex items-center font-normal font-beVietnam ${color} dark:text-white`}>
        <IconBallVolleyball strokeWidth={1} size={IconSize} />
        <p className={`ml-1 ${textSize}`}>Register Ox</p>
        <div className="bg-red-200 px-1.5 py-[2px] text-[8px] font-semibold tracking-wider rounded-md ml-2 text-red-600 mb-2">
          beta
        </div>
      </div>
    </div>
  );
};
