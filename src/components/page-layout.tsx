import { Outlet } from "react-router";
import { SidebarProvider } from "./ui/sidebar";
import { AppSidebar } from "./app-sidebar";

const PageLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default PageLayout;
