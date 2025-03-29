import Header from "@/components/onboarding/header";
import useOnboarding from "@/components/onboarding/use-onboarding";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FormProvider } from "react-hook-form";

const Onboarding = () => {
  const {
    methods,
    activeStep,
    CurrentStep,
    steps,
    onSubmit,
    onBack,
    isLastStep,
  } = useOnboarding();

  return (
    <div>
      <div className="fixed top-0 left-0 z-[998] h-screen w-full bg-[#BBBBBB54] backdrop-blur-sm"></div>

      <div className="fixed top-1/2 left-1/2 z-[999] w-full max-w-[692px] -translate-x-1/2 -translate-y-1/2 rounded-[16px] bg-white px-[3.25rem] py-8">
        <Header steps={steps.length} activeStep={activeStep} onBack={onBack} />

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <CurrentStep />

            <div
              className={cn(
                "grid gap-4",
                isLastStep ? "grid-cols-2" : "grid-cols-1",
              )}
            >
              {isLastStep && (
                <Button className="mt-6 h-[56px] w-full rounded-full border bg-transparent text-black hover:bg-gray-50">
                  Skip
                </Button>
              )}
              <Button className="mt-6 h-[56px] w-full rounded-full bg-[#FC6060] text-white hover:bg-[#FC6060]/90">
                Continue
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Onboarding;
