import { NavLink } from "react-router-dom";
import menu from "./menu";

export default function AppHeader() {


    return (
        <header>
            {menu.map(item => <NavLink to={item.path} key={item.id}> {item.text}</NavLink>)}
        </header>
    )
}