import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/pages/auth/signup/schema";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { useNavigate } from "react-router";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";

const apiUrl = import.meta.env.VITE_BACKEND_BASE_URL;

const SignUpForm = () => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (user: z.infer<typeof signUpSchema>) => {
    try {
      setIsPending(true);
      const { data } = await axios.post(`${apiUrl}/auth/signup`, user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("user", JSON.stringify(data.data.user));

      navigate("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast(
          error?.response?.data?.userMsg ??
            error?.response?.data?.detail ??
            "An unexpected error occurred.",
        );
      }
    } finally {
      setIsPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pb-20">
      <div className="mb-10 grid gap-4">
        <div>
          <Label className="mb-0.5 text-[##0A0A0A]">
            Email address <span className="text-[#DC2626]">*</span>
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
            Password <span className="text-[#DC2626]">*</span>
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
        {isPending ? "Signing up..." : "Sign up"}
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
