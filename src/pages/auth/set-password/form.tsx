import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { SetPasswordSchema } from "./schema";

const SetPasswordForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SetPasswordSchema),
  });

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
    setshowForm(false);
  };
  return (
    <form className="pb-20" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6 grid gap-4">
        <div>
          <Label className="mb-2 text-[#0A0A0A]">
            Password<span className="text-[#DC2626]">*</span>
          </Label>
          <Input
            {...register("password", { required: true })}
            type="email"
            placeholder="Password"
            className={cn(
              "h-[48px]",
              errors.password
                ? "focus-visible:border-ring-[#FC6060] border-[#FC6060]"
                : "",
            )}
          />

          {errors.password && (
            <p className="mt-0.5 text-sm text-[#DC2626]">
              {errors.password.message}
            </p>
          )}
        </div>
      </div>

      <div className="mb-6 grid gap-4">
        <div>
          <Label className="mb-2 text-[#0A0A0A]">
            Confirm Password<span className="text-[#DC2626]">*</span>
          </Label>
          <Input
            {...register("confirmPassword", { required: true })}
            type="email"
            placeholder="Confirm Password"
            className={cn(
              "h-[48px]",
              errors.confirmPassword
                ? "focus-visible:border-ring-[#FC6060] border-[#FC6060]"
                : "",
            )}
          />

          {errors.confirmPassword && (
            <p className="mt-0.5 text-sm text-[#DC2626]">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
      </div>

      <Button className="h-[56px] w-full rounded-full bg-[#FC6060] text-white hover:bg-[#FC6060]/90">
        Set Password
      </Button>
    </form>
  );
};

export default SetPasswordForm;
