import { IconBuildingStore, IconHome, IconBuildingFactory2 } from "@tabler/icons-react";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import * as Data from "../../global/registerStepData";
import FormHeaderSection from "./FormHeaderSection";
import RegisterInput from "./RegisterInput";
import * as Types from "../../global/types";

interface BusinessInformationFormProps {
  formData: Types.RegisterUserData;
  $updateFormData: (e: ChangeEvent<HTMLInputElement>) => void;
  setFormData: Dispatch<SetStateAction<Types.RegisterUserData>>;
}

const companySizeOptions: Types.CompanySizeOptions[] = [
  {
    name: "Small Business",
    icon: <IconHome strokeWidth={1.25} size={32} />,
    value: "small",
  },
  {
    name: "Mid Market",
    icon: <IconBuildingStore strokeWidth={1.25} size={32} />,
    value: "medium",
  },
  {
    name: "Large enterprise",
    icon: <IconBuildingFactory2 strokeWidth={1.25} size={32} />,
    value: "large",
  },
];

const BusinessInformationForm = (props: BusinessInformationFormProps) => {
  function $selectCompanySize(value: string) {
    props.setFormData((prev) => ({ ...prev, ["companySize"]: value }));
  }

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
          min={0}
        />
        <div>
          <label className="inputLabel">Company Size</label>
          <div className="grid grid-cols-3 gap-4 mt-[6px]">
            {companySizeOptions.map((company, index) => (
              <div
                key={index}
                className={`cursor-pointer rounded-md border-[1px] border-zinc-200 flex flex-col items-center justify-center py-6 ${
                  props.formData.companySize === company.value ? "bg-zinc-950 text-white" : "text-zinc-400"
                }`}
                onClick={() => $selectCompanySize(company.value)}
              >
                <div>{company.icon}</div>
                <p className="text-base tracking-wide font-medium capitalize pt-4 max-w-xs">{company.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessInformationForm;
