import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <nav className="border-b border-b-[#949494] px-[8.125rem] py-[0.5rem]">
        <img src="/logo.svg" alt="" className="size-8" />
      </nav>

      <Outlet />
    </div>
  );
};

export default AuthLayout;
