import { IconBallVolleyball } from "@tabler/icons-react";

interface BrandLogoProps {
  IconSize: number;
  textSize: string;
  color: string;
}

const BrandLogo = ({ IconSize = 40, textSize = "text-xl", color }: BrandLogoProps) => {
  return (
    <div className={`flex items-center justify-center font-normal font-beVietnam ${color}`}>
      <IconBallVolleyball strokeWidth={1} size={IconSize} />
      <p className={`ml-1 ${textSize}`}>Register Ox</p>
    </div>
  );
};

export default BrandLogo;
