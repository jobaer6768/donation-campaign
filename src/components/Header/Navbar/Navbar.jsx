import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 mt-12">
            <div className="flex-1">
                <img src="../../../../public/Resources/Logo.png" alt="" />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 space-x-4">
                    <NavLink to="/" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                    }
                    >Home</NavLink>
                    <NavLink to="/donation" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                    }
                    >Donation</NavLink>
                    <NavLink to="/statistics" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                    }
                    >Statistics</NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;