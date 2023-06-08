import { ChangeEvent } from "react";
import * as Types from "../../global/types";
import * as Data from "../../global/registerStepData";
import { IconBuildingStore, IconHome, IconBuildingFactory2 } from "@tabler/icons-react";
import FormHeaderSection from "./FormHeaderSection";
import RegisterInput from "./RegisterInput";

interface BusinessInformationFormProps {
  formData: Types.RegisterUserData;
  $updateFormData: (e: ChangeEvent<HTMLInputElement>) => void;
}

const companySizeOptions = [
  {
    name: "Small Business",
    icon: <IconHome strokeWidth={1.5} size={32} />,
    value: "small business",
  },
  {
    name: "Mid Market",
    icon: <IconBuildingStore strokeWidth={1.5} size={32} />,
    value: "mid market",
  },
  {
    name: "Large enterprise",
    icon: <IconBuildingFactory2 strokeWidth={1.5} size={32} />,
    value: "large enterprise",
  },
];

const BusinessInformationForm = (props: BusinessInformationFormProps) => {
  return (
    <div className="w-[100%]">
      <FormHeaderSection data={Data.registerData[2]} />
      <div className="pt-12">
        <RegisterInput
          inputType="text"
          label="Brand Name"
          name="companyName"
          value={props.formData.companyName}
          onChange={props.$updateFormData}
          placeHolder="Enter your brand name"
        />
        <RegisterInput
          inputType="number"
          label="How long have you been in business for?"
          name="companyLifeSpan"
          value={props.formData.companyLifeSpan}
          onChange={props.$updateFormData}
          placeHolder="Enter number of years"
        />
        <div>
          <label className="inputLabel">Company Size</label>
          <div className="grid grid-cols-3 gap-4 mt-[6px]">
            {companySizeOptions.map((company, index) => (
              <div
                key={index}
                className="rounded-md border-[1px] border-zinc-200 flex flex-col items-center justify-center py-8"
              >
                <div className="text-zinc-400">{company.icon}</div>
                <p className="text-sm font-medium uppercase pt-4 text-zinc-400">{company.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessInformationForm;
