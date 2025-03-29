import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { signInSchema } from "@/pages/auth/signin/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router";

const SignInForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-10 grid gap-4">
      <div className="grid gap-4">
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

          <Link
            to={"/auth/forgot-password"}
            className="mt-4 inline-block text-[#420000] underline"
          >
            Forgot password?
          </Link>
        </div>
      </div>

      <Button className="h-[56px] w-full rounded-full bg-[#FC6060] text-white hover:bg-[#FC6060]/90">
        Sign in
      </Button>
    </form>
  );
};

export default SignInForm;
