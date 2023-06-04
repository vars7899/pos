import { ChangeEvent } from "react";
import { NewUserData } from "../../global/types";

type GeneralInformationFormProps = {
  formData: NewUserData;
  $updateFormData: (e: ChangeEvent<HTMLInputElement>) => void;
};

const GeneralInformationForm = ({ formData, $updateFormData }: GeneralInformationFormProps) => {
  return (
    <div>
      <div className="mt-24 flex items-center justify-start">
        <div className="text-8xl font-bold text-YELLOW font-bakbakOne">01</div>
        <div className="flex flex-col ml-4">
          <p className="text-5xl text-WHITE">GENERAL INFORMATION</p>
          <p className="text-2xl text-MEDIUM_GRAY">Lets get you started</p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex flex-col">
            <label className="inputLabel">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={$updateFormData}
              className="outlineInput"
            />
          </div>
          <div className="flex flex-col">
            <label className="inputLabel">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={$updateFormData}
              className="outlineInput"
            />
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <label className="inputLabel">Email</label>
          <input type="text" name="email" value={formData.email} onChange={$updateFormData} className="outlineInput" />
        </div>
        <div className="flex flex-col mb-6">
          <label className="inputLabel">Confirm Email</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={$updateFormData}
            className="outlineInput"
          />
        </div>
        <div className="flex flex-col mb-6">
          <label className="inputLabel">Password</label>
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={$updateFormData}
            className="outlineInput"
          />
        </div>
      </div>
    </div>
  );
};

export default GeneralInformationForm;
