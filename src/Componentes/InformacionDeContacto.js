import React from "react";




function InformacionDeContacto () {
    return(
        <div> 
            <div className="contenedor-footer-informacion-contacto">
                <div className="primer-bloque">
                    <div>
                        <a href="<Main />">
                        <img src="https://www.salaspectrum.com/wp-content/uploads/2023/08/LOGO-SPECTRUM.svg" />
                        </a>
                    </div>
                        <p className="texto-bajo-logo1">¡Uníos a la escena en Sala Spectrum!</p>
                        <p className="texto-bajo-logo1">Somos vuestra sala del Heavy Metal en</p>
                        <p className="texto-bajo-logo1">Murcia. Conciertos intensos, riffs poderosos</p>
                        <p className="texto-bajo-logo1">y una experiencia única.</p>
                            <p className="siguenos">SIGUENOS
                                <a href="https://www.instagram.com/salaspectrum/?hl=en">
                            <img className="logo-instagram" src="https://static.vecteezy.com/system/resources/previews/018/930/692/original/instagram-logo-instagram-icon-transparent-free-png.png" />
                            </a>
                            <a href="https://www.google.com/maps/place/Sala+Spectrum/@38.0005881,-1.1453067,15z/data=!4m6!3m5!1s0xd63811230a0d28d:0x190497892d30abb0!8m2!3d38.0005881!4d-1.1453067!16s%2Fg%2F11ffm2myrn?sa=X&ved=2ahUKEwio767FqIv_AhVkhv0HHVMfCsUQ_BJ6BAhgEAg&shorturl=1">
                            <img className="marcador-mapa" src="https://th.bing.com/th/id/R.1e50ac2b3d33dd9aec60cdba52960e5b?rik=m5dd1oUKEdXIYw&pid=ImgRaw&r=0" />
                            </a>
                            </p>
                </div>
                    <div className="titulo-informacion-contacto">
                        <p className="informacion-contacto">INFORMACION DE CONTACTO</p>
                        <div className="informacion-direccion">
                            <a href="https://www.google.com/maps/place/Sala+Spectrum/@38.0005881,-1.1453067,2647m/data=!3m1!1e3!4m6!3m5!1s0xd63811230a0d28d:0x190497892d30abb0!8m2!3d38.0005881!4d-1.1453067!16s%2Fg%2F11ffm2myrn?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"style={{ textDecoration: 'none' }}>
                            <p className="direccion">Direccion</p>
                            <p className="direccion">Av. Ciclista Mariano Rojas, 16, 30009</p>
                            <p className="direccion">Murcia</p>
                             </a>   <br />
                            <p className="direccion">Mail: salaspectrum@gmail.com</p>
                            <a href="https://www.google.com/maps/dir//Sala+Spectrum,+Av.+Ciclista+Mariano+Rojas,+16,+30009+Murcia,+Espa%C3%B1a/@38.0005881,-1.1453067,2647m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0xd63811230a0d28d:0x190497892d30abb0!2m2!1d-1.1453005!2d38.0005952?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"style={{ textDecoration: 'none' }}> 
                           <p className="direccion">Cómo llegar →</p>
                           </a>
                        </div>
                    </div>
                    <div>
                        <p className="bloque3-no">LEGAL</p>
                        <a href="https://www.salaspectrum.com/aviso-legal/" style={{ textDecoration: 'none' }}>
                        <p className="bloque3">aviso legal</p></a>
                        <a href="https://www.salaspectrum.com/politica-de-privacidad/"style={{ textDecoration: 'none' }}>
                        <a>
                        <p className="bloque3">politica de privacidad</p></a></a>
                        <p className="bloque3">politica de cookies (UE)</p>
                        <p className="bloque3">accesibilidad</p>
                    </div>
            </div>
            <div>
                <div className="parte-blanca">
                    <img className="iconos-europeos" src="https://www.salaspectrum.com/wp-content/uploads/2023/08/Kid-digital-info-2048x303.png" />
                </div>
            </div>
        </div>    
    );
}

export default InformacionDeContacto;

