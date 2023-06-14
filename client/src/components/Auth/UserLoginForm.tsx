import { useNavigate } from "react-router-dom";
import * as Types from "../../global/types";
import * as Components from "..";
import { ChangeEvent } from "react";

interface UserLoginFormProps {
  formData: Types.UserLoginData;
  $updateFormData(e: ChangeEvent<HTMLInputElement>): void;
  $handleSubmit(e: any): void;
}

const UserLoginForm = (props: UserLoginFormProps) => {
  const navigate = useNavigate();

  return (
    <div>
      <Components.Default.LabeledInput
        inputType="email"
        label="email"
        name="email"
        value={props.formData.email}
        onChange={props.$updateFormData}
        placeHolder="Enter your email"
        className="mt-4"
      />
      <Components.Default.LabeledInput
        inputType="password"
        label="password"
        name="password"
        value={props.formData.password}
        onChange={props.$updateFormData}
        placeHolder="Enter your password"
        className="mt-4"
      />
      <div className="text-end mt-2 font-medium underline">Forgot Password?</div>
      <Components.Default.Button title="Log in" onClick={props.$handleSubmit} />
      <p className="text-sm text-zinc-600 mt-2 text-start">
        You have accepted the terms and conditions stated in this agreement between register ox and its partner
        companies by logging in.
      </p>

      <div className="flex items-center justify-center mt-20">
        <p className="text-zinc-600 mr-2">Don't have an account?</p>
        <button className="text-zinc-950 font-medium" onClick={() => navigate("/dashboard/register")}>
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default UserLoginForm;
