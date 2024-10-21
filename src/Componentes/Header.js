
import React from "react";

function Navbar() {
    return(
        <nav className="Header">
            <div className="cabecera">
                <img className="logo" src="https://www.salaspectrum.com/wp-content/uploads/2023/08/LOGO-SPECTRUM-BLANCO.svg" alt="Logo" width="100" height="100" />
                <div className="botones">
                    <a href="/" className="inicio">Inicio</a>
                    <a href="/conciertos" className="conciertos" >Conciertos</a>
                    <a href="/discordia" className="discordia">Discordia</a>
                    <a href="/contactos" className="contacto" >Contacto</a>
                </div>
                <img className="bandera" src="https://www.salaspectrum.com/wp-content/plugins/gtranslate/flags/svg/es.svg" alt="Logo" width="100" height="100" />
                <span class="lenguaje">es</span>
            </div>       
        </nav>
    )
}

export default Navbar;