import { ChangeEvent } from "react";
import * as Types from "../../global/types";
import FormHeaderSection from "./FormHeaderSection";
import * as Data from "../../global/registerStepData";
import RegisterInput from "./RegisterInput";

type GeneralInformationFormProps = {
  formData: Types.RegisterUserData;
  $updateFormData: (e: ChangeEvent<HTMLInputElement>) => void;
};

const GeneralInformationForm = (props: GeneralInformationFormProps) => {
  return (
    <div>
      <FormHeaderSection data={Data.registerData[0]} />
      <div className="pt-12">
        <div className="grid grid-cols-2 gap-4">
          <RegisterInput
            inputType="text"
            label="first name"
            name="firstName"
            value={props.formData.firstName}
            onChange={props.$updateFormData}
            placeHolder="John"
          />
          <RegisterInput
            inputType="text"
            label="last name"
            name="lastName"
            value={props.formData.lastName}
            onChange={props.$updateFormData}
            placeHolder="Doe"
          />
        </div>
        <RegisterInput
          inputType="email"
          label="Email"
          name="email"
          value={props.formData.email}
          onChange={props.$updateFormData}
          placeHolder="johndoe@registerox.com"
        />
        <RegisterInput
          inputType="email"
          label="confirm email"
          name="confirmEmail"
          value={props.formData.confirmEmail}
          onChange={props.$updateFormData}
          placeHolder="johndoe@registerox.com"
        />
        <RegisterInput
          inputType="number"
          label="Phone Number"
          name="phoneNumber"
          value={props.formData.phoneNumber}
          onChange={props.$updateFormData}
          placeHolder="Enter street address"
        />
        <RegisterInput
          inputType="date"
          label="Date of Birth"
          name="dob"
          value={props.formData.dob}
          onChange={props.$updateFormData}
          placeHolder="Date of Birth"
        />
      </div>
    </div>
  );
};

export default GeneralInformationForm;
