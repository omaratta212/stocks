import { createRootRoute, Outlet } from "@tanstack/react-router";
import Navbar from "../shared/components/Navbar.tsx";
import { useDarkMode } from "usehooks-ts";
import { QueryClient, QueryClientProvider } from "react-query";

export const Route = createRootRoute({
  component: Layout,
});

const queryClient = new QueryClient();

function Layout() {
  const { isDarkMode } = useDarkMode();
  return (
    <QueryClientProvider client={queryClient}>
      <main className={isDarkMode ? "dark" : "light"}>
        <div className="min-h-screen w-full bg-slate-200  selection:bg-teal-400 dark:bg-slate-900 text-slate-800 dark:text-slate-200">
          <div className="mx-auto p-4 md:py-6 lg:w-3/4 xl:w-2/3">
            <Navbar />
            <Outlet />
          </div>
        </div>
      </main>
    </QueryClientProvider>
  );
}
