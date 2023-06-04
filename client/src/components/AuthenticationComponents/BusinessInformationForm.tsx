import { ChangeEvent } from "react";
import { NewUserData } from "../../global/types";
import { IconBuildingStore, IconHome, IconBuildingFactory2 } from "@tabler/icons-react";

type BusinessInformationFormProps = {
  formData: NewUserData;
  $updateFormData: (e: ChangeEvent<HTMLInputElement>) => void;
};

const companyLifeOption = [
  {
    life: "0",
    tag: "startup",
  },
  {
    life: "1",
    tag: "year",
  },
  {
    life: "2",
    tag: "year",
  },
  {
    life: "3",
    tag: "year",
  },
  {
    life: "4+",
    tag: "year",
  },
];

const BusinessInformationForm = ({ formData, $updateFormData }: BusinessInformationFormProps) => {
  return (
    <div className="w-[100%]">
      <div className="mt-24 flex items-center justify-start">
        <div className="text-8xl font-bold text-YELLOW font-bakbakOne">02</div>
        <div className="flex flex-col ml-4">
          <p className="text-5xl text-WHITE">ABOUT YOUR BUSINESS</p>
          <p className="text-2xl text-MEDIUM_GRAY">Help us determine what you need.</p>
        </div>
      </div>
      <div className="mt-10">
        <div>
          <label className="inputLabel">Company Size</label>
          <div className="grid grid-cols-3 gap-4 mt-3">
            <div className="rounded-md border-[1px] border-MEDIUM_GRAY flex flex-col items-center justify-center py-8">
              <IconHome size={36} className="text-MEDIUM_GRAY" strokeWidth={1.5} />
              <p className="text-sm font-medium uppercase pt-4 text-WHITE/20">Small Business</p>
            </div>
            <div className="rounded-md border-[1px] border-MEDIUM_GRAY flex flex-col items-center justify-center py-8">
              <IconBuildingStore size={36} className="text-MEDIUM_GRAY" strokeWidth={1.5} />
              <p className="text-sm font-medium uppercase pt-4 text-WHITE/20">Mid Market</p>
            </div>
            <div className="rounded-md border-[1px] border-MEDIUM_GRAY flex flex-col items-center justify-center py-8s">
              <IconBuildingFactory2 size={36} className="text-MEDIUM_GRAY" strokeWidth={1.5} />
              <p className="text-sm font-medium uppercase pt-4 text-WHITE/20">Large Enterprise</p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <label className="inputLabel">How long have you been in business for?</label>
          <div className="grid grid-cols-5 gap-4 mt-3">
            {companyLifeOption.map((opt, index) => (
              <div
                key={`life-opt-${index}`}
                className="rounded-md border-[1px] border-MEDIUM_GRAY flex flex-col items-center justify-center py-4"
              >
                <p className="text-4xl text-MEDIUM_GRAY font-semibold">{opt.life}</p>
                <p className="text-sm font-medium uppercase pt-4 text-WHITE/20 capitalize">{opt.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessInformationForm;
