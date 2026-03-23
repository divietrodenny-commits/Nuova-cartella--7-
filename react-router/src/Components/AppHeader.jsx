import { NavLink } from "react-router-dom";
import menu from "./menu";

export default function AppHeader() {
    return (
        <header>
            {menu.map(item => (
                <NavLink
                    key={item.id}
                    to={item.path}
                    className={({ isActive }) => (isActive ? "active" : "")}>
                    {item.text}
                </NavLink>
            ))}
        </header>
    );
}
