import {createRootRoute, Outlet} from '@tanstack/react-router'
import {TanStackRouterDevtools} from '@tanstack/router-devtools'
import Navbar from "../components/Navbar.tsx";
import {useDarkMode} from "usehooks-ts";

export const Route = createRootRoute({
    component: Layout
})

function Layout() {
    const {isDarkMode} = useDarkMode();
    return (
        <main className={isDarkMode ? 'dark' : 'light'}>
            <div className="min-h-screen w-full bg-slate-200  selection:bg-teal-400 dark:bg-slate-900 ">
                <div className="mx-auto p-4 md:py-6 lg:w-3/4 xl:w-2/3">
                    <Navbar/>
                    <Outlet/>
                </div>
                <TanStackRouterDevtools/>
            </div>
        </main>
    )
}
