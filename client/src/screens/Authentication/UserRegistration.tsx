import React from "react";
import useMultiStepForm from "../../hooks/useMultiStepForm";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { BusinessInformationForm, GeneralInformationForm } from "../../components";
import { NewUserData } from "../../global/types";
import { useNavigate } from "react-router-dom";

const defaultFormData: NewUserData = {
  firstName: "",
  lastName: "",
  countryCode: "",
  phoneNumber: "",
  email: "",
  password: "",
  dob: "",
  companySize: "",
  // Address fields
  street: "",
  addressLine: "",
  city: "",
  state: "",
  country: "",
  postalCode: "",
};

const UserRegistration: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState(defaultFormData);
  const { currentStep, step, steps, $nextStep, $prevStep, $jumpTo } = useMultiStepForm([
    <GeneralInformationForm formData={formData} $updateFormData={$updateFormData} />,
    <BusinessInformationForm formData={formData} $updateFormData={$updateFormData} />,
    <div>3</div>,
    <div>4</div>,
  ]);

  function $updateFormData(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  function $chooseBack() {
    if (currentStep === 0) navigate("/");
    else $prevStep();
  }

  return (
    <div className="min-h-[100vh] min-w-[100vw] max-h-[100vh] max-w-[100vw] bg-CUSTOM_BLACK relative flex items-start justify-center">
      <div
        className="text-white flex items-center text-xl font-semibold absolute top-8 left-8 cursor-pointer"
        onClick={() => $chooseBack()}
      >
        <IconArrowLeft strokeWidth={1.5} />
        <p className="tracking-wide uppercase ml-2">Go Back</p>
      </div>
      <div className="absolute right-8 bottom-8 text-2xl flex items-end tracking-wide">
        <p className="text-MEDIUM_GRAY mr-1">Register</p>
        <p className="text-YELLOW">Ox</p>
      </div>
      <div className="max-w-2xl w-[100%] py-6 flex flex-col justify-between h-[90vh]">
        <div>{step}</div>
        <div>
          <button
            className="bg-YELLOW w-[100%] text-xl font-semibold rounded-md py-3 flex items-center justify-center"
            onClick={() => $nextStep()}
          >
            <p className="mr-2 uppercase">Next</p>
            <IconArrowRight strokeWidth={1.5} />
          </button>
          <p className="mt-2 text-MEDIUM_GRAY text-xs text-center">
            Our promise to you is that we will never share any of your personal information with anyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;
