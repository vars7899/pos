import * as DefaultData from "../../global/defaultData";
import * as Data from "../../global/registerStepData";
import * as Component from "../../components";
import * as Types from "../../global/types";
import React, { useState } from "react";
import * as Hooks from "../../hooks";

const UserRegistration: React.FC = () => {
  const [formData, setFormData] = useState<Types.RegisterUserData>(DefaultData.RegisterUserData);

  // Custom Multi Step Hook
  const { currentStep, step, totalSteps, $nextStep, $prevStep, $jumpTo } = Hooks.useMultiStepForm([
    <Component.GeneralInformationForm formData={formData} $updateFormData={$updateFormData} />,
    <Component.ContactInformationForm formData={formData} $updateFormData={$updateFormData} />,
    <Component.BusinessInformationForm formData={formData} $updateFormData={$updateFormData} />,
    <Component.SetupPasswordForm formData={formData} $updateFormData={$updateFormData} />,
  ]);

  function $updateFormData(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  function $handleSubmit() {}

  return (
    <div className="h-[100vh] w-[100vw] max-h-[100vh] max-w-[100vw] bg-white relative grid grid-cols-[1fr,_700px]">
      <Component.RegisterStepInformation
        currentStep={currentStep}
        totalSteps={totalSteps}
        stepInformationArray={Data.registerData}
      />
      <div className="w-[100%] flex flex-col justify-between items-center">
        <div className="px-16 pt-12">{step}</div>
        <Component.MoveToNextStepButton $nextStep={$nextStep} $prevStep={$prevStep} currentStep={currentStep} />
      </div>
    </div>
  );
};

export default UserRegistration;
