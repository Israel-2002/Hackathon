import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { ForgotPasswordSchema } from "./schema";
import { cn } from "@/lib/utils";
import { Link } from "react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ForgotPasswordForm = () => {
  const [showForm, setshowForm] = useState(true);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ForgotPasswordSchema),
  });

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
    setshowForm(false);
  };
  return (
    <AnimatePresence initial={false}>
      {showForm ? (
        <MotionItem key="forgot-password">
          <form className="pb-20" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6 grid gap-4">
              <div>
                <Label className="mb-2 text-[#0A0A0A]">
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
            </div>

            <Button className="h-[56px] w-full rounded-full bg-[#FC6060] text-white hover:bg-[#FC6060]/90">
              Reset Password
            </Button>

            <p className="mt-6 text-center">
              Remembered your password?
              <Link
                to={"/auth/signin"}
                className="ml-1 text-[#420000] hover:underline"
              >
                sign in
              </Link>
            </p>
          </form>
        </MotionItem>
      ) : (
        <MotionItem key="show-email">
          <div>
            <img src="/email.png" alt="email" className="mx-auto" />
            <p className="text-center">
              A verification link has been sent to your email,{" "}
              <span className="font-medium">cecil@mail.com.</span> Kindly click
              on the link to reset your password.
            </p>
          </div>
        </MotionItem>
      )}
    </AnimatePresence>
  );
};

export default ForgotPasswordForm;

const MotionItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
};
