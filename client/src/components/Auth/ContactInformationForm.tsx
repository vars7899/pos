import * as Data from "../../global/registerStepData";
import * as Types from "../../global/types";
import FormHeaderSection from "./FormHeaderSection";
import { ChangeEvent } from "react";
import RegisterInput from "./RegisterInput";

interface ContactInformationFormProps {
  formData: Types.RegisterUserData;
  $updateFormData(e: ChangeEvent<HTMLInputElement>): void;
}

const ContactInformationForm = (props: ContactInformationFormProps) => {
  return (
    <div>
      <FormHeaderSection data={Data.registerData[1]} />
      <div className="pt-12">
        <RegisterInput
          inputType="text"
          label="street address"
          name="street"
          value={props.formData.street}
          onChange={props.$updateFormData}
          placeHolder="Enter street address"
        />
        <RegisterInput
          inputType="text"
          label="Address Line"
          name="addressLine"
          value={props.formData.addressLine}
          onChange={props.$updateFormData}
          placeHolder="Enter address line"
        />
        <RegisterInput
          inputType="text"
          label="city"
          name="city"
          value={props.formData.city}
          onChange={props.$updateFormData}
          placeHolder="Enter city"
        />
        <RegisterInput
          inputType="text"
          label="state \ Province"
          name="state"
          value={props.formData.state}
          onChange={props.$updateFormData}
          placeHolder="Enter state"
        />
        <RegisterInput
          inputType="text"
          label="Country"
          name="country"
          value={props.formData.country}
          onChange={props.$updateFormData}
          placeHolder="Enter country"
        />
        <RegisterInput
          inputType="text"
          label="Postal Code"
          name="postalCode"
          value={props.formData.postalCode}
          onChange={props.$updateFormData}
          placeHolder="Enter postal code"
        />
      </div>
    </div>
  );
};

export default ContactInformationForm;
