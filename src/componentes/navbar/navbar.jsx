import React from "react";
import CartWidget from "../cartWidget/cartWidget";



export default function Menu() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light fs-4">
            <div className="container-fluid">
             <a className="navbar-brand" href="#">Naggel</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
        
                <li className="nav-item">
                <a className="nav-link" href="#">Nuestros Productos</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Pedidos</a>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled">Contacto</a>
                </li>
            </ul>
            </div>
        </div>
        <CartWidget/>
        </nav>
    );

}