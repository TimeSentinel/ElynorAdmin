/* -------------------------------------------
(c)2025 Lance Stubblefield
elynoradmin: src/components/Navbar/index.tsx
-------------------------------------------- */


import './navbar.css'
import {useNavigate} from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    function navClick(page: string) {
        navigate(page);
    }

    return (
        <div className="navbarContainer">
            <div className="navbarTop">
                <button onClick={() => navClick('/')}>
                    <h1>Elynor's Admin Page</h1>
                </button>
            </div>
            <div className="navbarMenu">
                <div className="navbarCell">
                    <button className={location.pathname === '/themes' ? "active" : "enabled"}
                            onClick={() => navClick('/themes')}>
                        Themes
                    </button>
                </div>
                <div className="navbarCell">
                    <button className={location.pathname === '/products' ? "active" : "enabled"}
                            onClick={() => navClick('/products')}>
                        Products
                    </button>
                </div>
                <div className="navbarCell">
                    <button className={location.pathname === '/news' ? "active" : "enabled"}
                            onClick={() => navClick('/news')}>
                        News
                    </button>
                </div>
                <div className="navbarCell">
                    <button className={location.pathname === '/gallery' ? "active" : "enabled"}
                            onClick={() => navClick('/gallery')}>
                        Gallery
                    </button>
                </div>
                <div className="navbarCell">
                    <button className={location.pathname === '/admin' ? "active" : "enabled"}
                            onClick={() => navClick('/admin')}>
                        Admin
                    </button>
                </div>
                <div className="navbarCell">
                    <button className="enabled">
                        <a href="#">Exit</a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;

