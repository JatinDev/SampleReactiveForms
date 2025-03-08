import { NavLink } from "react-router-dom"

function header() {
    return (
        <nav className="flex justify-center border-rose-200 p-4 ml-3 mr-3 mt-2 rounded-sm border space-x-6 bg-pink-50">
            <NavLink to="/" className={({ isActive }) => (isActive ? "menu-active" : "menu-inactive")}>
                <p className="font-bold rounded-lg px-3 py-2 hover:bg-gray-100 hover:text-gray-900">
                    Home
                </p>
            </NavLink>
            <NavLink to="/form1" className={({ isActive }) => (isActive ? "menu-active" : "menu-inactive")}>
                <p className="font-bold rounded-lg px-3 py-2 hover:bg-gray-100 hover:text-gray-900">  Form Using Context </p>
            </NavLink>
            <NavLink to="/form2" className={({ isActive }) => (isActive ? "menu-active" : "menu-inactive")}>
                <p className="font-bold rounded-lg px-3 py-2 hover:bg-gray-100 hover:text-gray-900">  Form Using Redux </p>
            </NavLink>
        </nav>
    )
}

export default header