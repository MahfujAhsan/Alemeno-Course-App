import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <nav>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Student Dashboard</a></li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl">Alemeno</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <input type="text" placeholder="Search" className="input input-bordered input-success flex items-center justify-center w-full max-w-xs" />
                    {/* <ul className="menu menu-horizontal px-1">
                        <input type="text" placeholder="Search" className="input input-bordered input-success flex items-center justify-center w-full max-w-xs" />
                        <li><Link to="/dashboard">Student Dashboard</Link></li>
                    </ul> */}
                </div>
                <div className="navbar-end">
                    <a className="btn">Login</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar