import { ChangeEvent } from "react";
import * as Types from "../../global/types";
import * as Data from "../../global/registerStepData";
import FormHeaderSection from "./FormHeaderSection";
import RegisterInput from "./RegisterInput";

interface SetupPasswordFormProps {
  formData: Types.RegisterUserData;
  $updateFormData(e: ChangeEvent<HTMLInputElement>): void;
}

const passwordRecommendationList = [
  { body: "minimum 8 characters" },
  { body: "maximum 32 characters" },
  { body: "at least 1 lowercase letter (a - z)" },
  { body: "at least 1 uppercase letter (A - Z)" },
  { body: "at least 1 number letter (0 - 9)" },
  { body: "at least 1 special character (%, &, ! etc)" },
];

const SetupPasswordForm = (props: SetupPasswordFormProps) => {
  return (
    <div>
      <FormHeaderSection data={Data.registerData[3]} />
      <div className="pt-12">
        <div className="border-[1px] px-8 py-6 rounded-md mb-6">
          <p className="text-lg font-medium mb-2 text-zinc-800">Password Recommendation</p>
          <ul className="list-disc ml-5">
            {passwordRecommendationList.map((item, index) => (
              <li key={index} className="capitalize text-zinc-500">
                {item.body}
              </li>
            ))}
          </ul>
        </div>
        <RegisterInput
          inputType="password"
          label="password"
          name="password"
          value={props.formData.password}
          onChange={props.$updateFormData}
          placeHolder="Enter a strong password"
        />
        <RegisterInput
          inputType="password"
          label="confirm password"
          name="confirmPassword"
          value={props.formData.confirmPassword}
          onChange={props.$updateFormData}
          placeHolder="Please confirm the password"
        />
      </div>
    </div>
  );
};

export default SetupPasswordForm;
