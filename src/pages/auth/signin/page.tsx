import SignInForm from "@/pages/auth/signin/form";
import { Link } from "react-router";

const SignInPage = () => {
  return (
    <div className="mx-auto max-w-[520px] min-[1440px]:max-w-[588px]">
      <div className="mb-10 pt-16 text-center">
        <h2 className="mb-3 text-[2rem] font-semibold text-[#1A1A1A] min-[1440px]:text-[2.5rem]">
          Welcome back
        </h2>
        <div className="mx-auto flex w-fit items-center gap-3">
          <p className="text-[#3F3F3F]">Don't have an account?</p>{" "}
          <Link
            to="/auth/signup"
            className="font-semibold text-[#420000] underline"
          >
            Sign up
          </Link>
        </div>
      </div>

      <SignInForm />
    </div>
  );
};

export default SignInPage;
