import * as Layout from "../../layouts";
import * as Component from "../../components";
import * as Data from "../../global/registerStepData";
import * as Hook from "../../hooks";
import { useState } from "react";
import { IconArrowRight } from "@tabler/icons-react";

export const UserVerification = () => {
  const [otpValue, setOtpValue] = useState("");
  //  Set 30 minutes timer
  const { expired, minutes } = Hook.useTimer(30 * 60);

  return (
    <Layout.AuthLayout type="register">
      <div className="w-[100%] h-[100%] flex flex-col justify-between items-center">
        <div>
          <Component.Brand.BrandLogo
            IconSize={24}
            textSize="text-2xl"
            color="text-zinc-950"
            className="flex justify-center items-center pb-6 mb-10 border-b-[1px] pt-10 w-[100%]"
          />
          <div className="px-16">
            <Component.Auth.RegisterFormHeader data={Data.registerData[4]} />
            <Component.Default.LabeledInput
              inputType="number"
              label="One Time Password"
              name="companyName"
              value={otpValue}
              onChange={(e) => setOtpValue(e.target.value)}
              placeHolder="Enter the code"
              className="my-2"
            />
            <div>
              {!expired ? (
                <p className="text-neutral-400">Verification code will expires in {minutes}</p>
              ) : (
                <p className="text-red-400">Verification code expired</p>
              )}
            </div>
            <div className="mt-10 flex">
              <p>Didn't received verification code?</p>
              <button className="ml-1 font-medium underline">Resend Code</button>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center py-6 px-16 border-t-[1px] w-[100%]">
          <button
            type="submit"
            className="font-medium rounded-md py-3 px-5 flex items-center justify-center bg-zinc-950 text-white"
          >
            <p className="mr-2 capitalize">Next Step</p>
            <IconArrowRight strokeWidth={1.5} size={20} />
          </button>
        </div>
      </div>
    </Layout.AuthLayout>
  );
};
