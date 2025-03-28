import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/pages/auth/signup/schema";
import { cn } from "@/lib/utils";

const SignUpForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pb-20">
      <div className="mb-10 grid gap-4">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <Label className="mb-0.5 text-[##0A0A0A]">
              First name <span className="text-[#DC2626]">*</span>
            </Label>
            <Input
              {...register("first_name", { required: true })}
              placeholder="First name/Given name"
              className={cn(
                "h-[48px]",
                errors.first_name
                  ? "focus-visible:border-ring-[#FC6060] border-[#FC6060]"
                  : "",
              )}
            />

            {errors.first_name && (
              <p className="mt-0.5 text-sm text-[#DC2626]">
                {errors.first_name.message}
              </p>
            )}
          </div>

          <div>
            <Label className="mb-0.5 text-[##0A0A0A]">
              Last name<span className="text-[#DC2626]">*</span>
            </Label>
            <Input
              {...register("last_name", { required: true })}
              placeholder="Last name/Family name"
              className={cn(
                "h-[48px]",
                errors.last_name
                  ? "focus-visible:border-ring-[#FC6060] border-[#FC6060]"
                  : "",
              )}
            />

            {errors.last_name && (
              <p className="mt-0.5 text-sm text-[#DC2626]">
                {errors.last_name.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <Label className="mb-0.5 text-[##0A0A0A]">
            Email address<span className="text-[#DC2626]">*</span>
          </Label>
          <Input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email eg. kwamensuo@gmail.com"
            className={cn(
              "h-[48px]",
              errors.email
                ? "focus-visible:border-ring-[#FC6060] border-[#FC6060]"
                : "",
            )}
          />

          {errors.email && (
            <p className="mt-0.5 text-sm text-[#DC2626]">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <Label className="mb-0.5 text-[##0A0A0A]">
            Password<span className="text-[#DC2626]">*</span>
          </Label>
          <Input
            {...register("password", { required: true })}
            type="password"
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

      <Button className="h-[56px] w-full rounded-full bg-[#FC6060] text-white hover:bg-[#FC6060]/90">
        Sign up
      </Button>

      <p className="mt-6 text-center">
        By signing up, you accept our{" "}
        <span className="text-[#420000] underline">Terms of use</span> and{" "}
        <span className="text-[#420000] underline">Privacy Policy</span>
      </p>
    </form>
  );
};

export default SignUpForm;
