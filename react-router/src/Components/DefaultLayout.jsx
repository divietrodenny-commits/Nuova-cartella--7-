import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

export default function DefaultLayout() {

    return (
        <div className="min-vh-100 d-flex flex-column">
            <AppHeader />
            <main className="container-fluid flex-grow-1 py-4">
                <Outlet />
            </main>
            <AppFooter />
        </div>
    );
}