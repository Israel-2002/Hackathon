import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <nav className="border-b border-b-[#949494] px-[8.125rem] py-[1.125rem]">
        <img src="/logo.svg" alt="" />
      </nav>

      <Outlet />
    </div>
  );
};

export default AuthLayout;
