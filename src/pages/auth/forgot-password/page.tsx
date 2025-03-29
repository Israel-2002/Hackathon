import ForgotPasswordForm from "./form";

const ForgotPasswordPage = () => {
  return (
    <div className="mx-auto max-w-[450px] min-[1440px]:max-w-[588px]">
      <div className="mb-10 pt-16 text-center">
        <h2 className="mb-3 text-[2rem] font-semibold text-[#1A1A1A] min-[1440px]:text-[2.5rem]">
          Reset your password
        </h2>
        <div className="mx-auto flex w-fit items-center gap-3">
          <p className="text-[#3F3F3F]">
            Forgot your password? Don’t eat away, we have you covered. Just let
            us know your email address and we will email you a password reset
            link.
          </p>{" "}
        </div>
      </div>

      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPasswordPage;
