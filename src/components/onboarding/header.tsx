import { HEADERS } from "@/components/onboarding/constants";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";

interface HeaderProps {
  steps: number;
  activeStep: number;
  onBack: () => void;
}

const Header = ({ steps, activeStep, onBack }: HeaderProps) => {
  return (
    <div className="relative mb-4">
      <div className="absolute -top-2 -left-2">
        {activeStep > 0 && (
          <ChevronLeft
            className="cursor-pointer hover:opacity-90"
            onClick={onBack}
          />
        )}
      </div>
      <div className="relative mx-auto mb-10 h-[5px] w-[444px] overflow-hidden rounded-full bg-[#FDE9E9]">
        <div
          style={{
            width: `${((activeStep + 1) / steps) * 100}%`,
          }}
          className={cn("absolute inset-0 bg-[#FC6060]")}
        ></div>
      </div>

      <h3 className="text-2xl font-semibold">{HEADERS[activeStep]}</h3>
    </div>
  );
};

export default Header;
