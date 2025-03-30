import { Outlet } from "react-router";
import { SidebarProvider } from "./ui/sidebar";
import { AppSidebar } from "./app-sidebar";

const PageLayout = () => {
  return (
    <SidebarProvider>
      <main className="flex h-screen w-screen flex-row">
        <AppSidebar />
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default PageLayout;
