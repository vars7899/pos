import { useNavigate } from "react-router-dom";
import * as Types from "../../global/types";
import { ChangeEvent } from "react";

interface UserLoginFormProps {
  formData: Types.UserLoginData;
  $updateFormData(e: ChangeEvent<HTMLInputElement>): void;
}

const UserLoginForm = (props: UserLoginFormProps) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="formControl">
        <label className="inputLabel capitalize">Email</label>
        <input
          type="email"
          name="email"
          className="outlineInput"
          value={props.formData.email}
          onChange={props.$updateFormData}
          placeholder="Enter your email"
        />
      </div>
      <div className="formControl mt-4">
        <label className="inputLabel capitalize">Password</label>
        <input
          type="password"
          name="password"
          className="outlineInput"
          value={props.formData.password}
          onChange={props.$updateFormData}
          placeholder="Enter your password"
        />
      </div>
      <div className="text-end mt-2 font-medium underline">Forgot Password?</div>
      <button className="mt-8 text-lg font-medium text-zinc-50 bg-zinc-950 rounded-lg py-3 w-[100%]">Log in</button>
      <p className="text-sm text-zinc-600 mt-2 text-center">
        By sign in you accept the terms and condition of register ox and partner companies
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
