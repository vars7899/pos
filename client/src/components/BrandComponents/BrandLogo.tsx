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
      <div className={`flex items-center font-normal font-beVietnam ${color}`}>
        <IconBallVolleyball strokeWidth={1} size={IconSize} />
        <p className={`ml-1 ${textSize}`}>Register Ox</p>
      </div>
    </div>
  );
};
