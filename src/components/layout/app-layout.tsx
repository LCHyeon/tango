import { Outlet } from "@tanstack/react-router";
import Header from "./header";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <main className="mx-auto max-w-md px-5 py-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;