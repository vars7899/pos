import React from "react";

const useMultiStepForm = (steps: React.ReactNode[]) => {
  const [currentStep, setCurrentStep] = React.useState(0);

  function $nextStep() {
    setCurrentStep((current) => {
      // Base case: last step
      if (current >= steps.length - 1) return current;
      return current + 1;
    });
  }
  function $prevStep() {
    setCurrentStep((current) => {
      if (current <= 0) return current;
      return current - 1;
    });
  }
  function $jumpTo(givenStep: number) {
    setCurrentStep((current) => {
      if (givenStep < 0 && givenStep >= steps.length) return current;
      return givenStep;
    });
  }
  return {
    steps,
    step: steps[currentStep],
    currentStep,
    totalSteps: steps.length,
    $nextStep,
    $prevStep,
    $jumpTo,
  };
};

export default useMultiStepForm;
