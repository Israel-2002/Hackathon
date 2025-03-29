import SetPasswordForm from "./form";

const SetPasswordPage = () => {
  return (
    <div className="mx-auto max-w-[450px] min-[1440px]:max-w-[588px]">
      <div className="mb-10 pt-16 text-center">
        <h2 className="mb-3 text-[2rem] font-semibold text-[#1A1A1A] min-[1440px]:text-[2.5rem]">
          Reset your password
        </h2>
        <div className="mx-auto flex w-fit items-center gap-3">
          <p className="text-[#3F3F3F]">
            Reset your password by providing your new password.
          </p>{" "}
        </div>
      </div>

      <SetPasswordForm />
    </div>
  );
};

export default SetPasswordPage;
