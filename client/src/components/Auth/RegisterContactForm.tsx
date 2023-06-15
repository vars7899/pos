import * as Components from "..";
import * as Types from "../../global/types";
import * as Data from "../../global/registerStepData";

interface ContactInformationFormProps {
  formData: Types.RegisterUserData;
  $updateFormData(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const ContactInformationForm = (props: ContactInformationFormProps) => {
  return (
    <div>
      <Components.Auth.RegisterFormHeader data={Data.registerData[1]} />
      <div className="pt-4">
        <Components.Default.LabeledInput
          inputType="text"
          label="street address"
          name="street"
          value={props.formData.street}
          onChange={props.$updateFormData}
          placeHolder="Enter street address"
        />
        <Components.Default.LabeledInput
          inputType="text"
          label="Address Line"
          name="addressLine"
          value={props.formData.addressLine}
          onChange={props.$updateFormData}
          placeHolder="Enter address line"
        />
        <div className="grid grid-cols-2 gap-4">
          <Components.Default.LabeledInput
            inputType="text"
            label="city"
            name="city"
            value={props.formData.city}
            onChange={props.$updateFormData}
            placeHolder="Enter city"
          />
          <Components.Default.LabeledInput
            inputType="text"
            label="state \ Province \ region"
            name="state"
            value={props.formData.state}
            onChange={props.$updateFormData}
            placeHolder="Enter state"
          />
        </div>
        <Components.Default.LabeledInput
          inputType="text"
          label="Country"
          name="country"
          value={props.formData.country}
          onChange={props.$updateFormData}
          placeHolder="Enter country"
        />
        <Components.Default.LabeledInput
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
