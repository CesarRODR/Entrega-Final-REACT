import { Link, NavLink } from "react-router-dom"
import { CartWidget } from "./CartWidget"


export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <Link to="/">
                    <img className="logo" src="/logo1.jpg" alt="Premier Seguridad" />
                    <p className="nav-premier">Premier Seguridad</p>
                </Link>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/categoria/DVR/" className="nav-link active" aria-current="page">DVRS</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="/categoria/CAMARA" className="nav-link">CAMARAS</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="/categoria/CONECTORES" className="nav-link">CONECTORES</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <CartWidget />
            </nav>

        </>

    )
}