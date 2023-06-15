import * as Components from "../";
import * as Types from "../../global/types";
import * as Data from "../../global/registerStepData";

type GeneralInformationFormProps = {
  formData: Types.RegisterUserData;
  $updateFormData: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const GeneralInformationForm = (props: GeneralInformationFormProps) => {
  return (
    <div>
      <Components.Auth.RegisterFormHeader data={Data.registerData[0]} />
      <div className="pt-4">
        <div className="grid grid-cols-2 gap-4">
          <Components.Default.LabeledInput
            inputType="text"
            label="first name"
            name="firstName"
            value={props.formData.firstName}
            onChange={props.$updateFormData}
            placeHolder="John"
          />
          <Components.Default.LabeledInput
            inputType="text"
            label="last name"
            name="lastName"
            value={props.formData.lastName}
            onChange={props.$updateFormData}
            placeHolder="Doe"
          />
        </div>
        <Components.Default.LabeledInput
          inputType="email"
          label="Email"
          name="email"
          value={props.formData.email}
          onChange={props.$updateFormData}
          placeHolder="johndoe@registerox.com"
        />
        <Components.Default.LabeledInput
          inputType="email"
          label="confirm email"
          name="confirmEmail"
          value={props.formData.confirmEmail}
          onChange={props.$updateFormData}
          placeHolder="johndoe@registerox.com"
        />
        <Components.Default.LabeledInput
          inputType="number"
          label="Phone Number"
          name="phoneNumber"
          value={props.formData.phoneNumber}
          onChange={props.$updateFormData}
          placeHolder="Enter street address"
        />
        <Components.Default.LabeledInput
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
