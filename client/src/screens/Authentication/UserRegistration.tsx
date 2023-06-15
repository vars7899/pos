import React from "react";
import { passwordStrength } from "check-password-strength";
import * as DefaultData from "../../global/defaultData";
import * as Data from "../../global/registerStepData";
import * as Component from "../../components";
import * as Functions from "../../functions";
import * as Types from "../../global/types";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as Hooks from "../../hooks";
import { REGISTER_USER } from "../../redux/feature/authSlice";
import { AppDispatch } from "../../redux/store";
import * as Layout from "../../layouts";

export const UserRegistration: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = React.useState<Types.RegisterUserData>(DefaultData.RegisterUserData);

  // Custom Multi Step Hook
  const { currentStep, step, totalSteps, $nextStep, $prevStep, $jumpTo } = Hooks.useMultiStepForm([
    <Component.Auth.GeneralInformationForm formData={formData} $updateFormData={$updateFormData} />,
    <Component.Auth.ContactInformationForm formData={formData} $updateFormData={$updateFormData} />,
    <Component.Auth.BusinessInformationForm
      formData={formData}
      $updateFormData={$updateFormData}
      setFormData={setFormData}
    />,
    <Component.Auth.SetupPasswordForm formData={formData} $updateFormData={$updateFormData} />,
  ]);

  function $updateFormData(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  function $handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (currentStep === totalSteps - 1) {
      if (
        !formData.firstName.trim() ||
        !formData.lastName.trim() ||
        !formData.email.trim() ||
        !formData.confirmEmail.trim() ||
        !formData.phoneNumber ||
        !formData.dob ||
        !Functions.validateEmail(formData.email) ||
        !Functions.validatePhoneNumber(formData.phoneNumber)
      ) {
        $jumpTo(0);
        return toast.dark("Missing/empty field(s)\nPlease make sure all the fields are correct");
      }
      if (!Functions.validateEmail(formData.email) || !Functions.validateEmail(formData.confirmEmail)) {
        $jumpTo(0);
        return toast.dark("Invalid Email Syntax\nPlease make sure the provided email is valid");
      }
      if (!Functions.validatePhoneNumber(formData.phoneNumber)) {
        $jumpTo(0);
        return toast.dark("Invalid Phone number syntax\nPlease make sure the provided phone number is valid");
      }

      if (!formData.companyName || !formData.companyLifeSpan || !formData.companySize) {
        $jumpTo(2);
        return toast.dark("Missing/empty field(s)\nPlease make sure all the fields are correct");
      }
      if (formData.password !== formData.confirmPassword) {
        $jumpTo(3);
        return toast.dark("Password do not match\nIt seems that password do not match");
      }
      if (
        !formData.password ||
        !formData.confirmPassword ||
        formData.password !== formData.confirmPassword ||
        passwordStrength(formData.password).value !== "Strong"
      ) {
        $jumpTo(3);
        return toast.dark("Weak Password\nPlease make sure you choose a strong password");
      }
      if (!formData.street || !formData.city || !formData.state || !formData.country || !formData.postalCode) {
        $jumpTo(1);
        return toast.dark("Missing/empty field(s)\nPlease make sure all the address fields are correct");
      }
      dispatch(
        REGISTER_USER({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          confirmEmail: formData.confirmEmail,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
          phoneNumber: formData.phoneNumber,
          address: {
            street: formData.street,
            addressLine: formData.addressLine,
            city: formData.city,
            state: formData.state,
            country: formData.country,
            postalCode: formData.postalCode,
          },
          companyDetails: {
            companyName: formData.companyName,
            companySize: formData.companySize,
            companyLifeSpan: formData.companyLifeSpan,
          },
        })
      );
    } else {
      $nextStep();
    }
  }

  return (
    <Layout.AuthLayout
      type="register"
      registerStepInformation={{
        currentStep: currentStep,
        totalSteps: totalSteps,
        stepInformationArray: Data.registerData,
      }}
    >
      <div className="w-[100%] h-[100%] flex flex-col justify-between items-center">
        <div>
          <Component.Brand.BrandLogo
            IconSize={24}
            textSize="text-2xl"
            color="text-zinc-950"
            className="flex justify-center items-center pb-6 mb-10 border-b-[1px] pt-10 w-[100%]"
          />
          <form onSubmit={(e) => $handleSubmit(e)} className="px-16">
            {step}
          </form>
        </div>
        <Component.Auth.RegisterStepNavigation
          $nextStep={$handleSubmit}
          $prevStep={$prevStep}
          currentStep={currentStep}
        />
      </div>
    </Layout.AuthLayout>
  );
};

