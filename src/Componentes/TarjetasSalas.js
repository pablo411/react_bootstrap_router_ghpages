import React from "react";

function TarjetasSalas() {
    return (
        <div className="titulo-tarjeta">
            <div className="titular">
                <p><h1>¡PREPARAOS PARA EL APOTEOSICO</h1></p>
                <p><h1> SONIDO DEL HEAVY METAL!</h1></p>
            </div>
            <div className="contenedores">
                <div className="contenedor1">
                    <img className="imagen-logo1" src="https://www.salaspectrum.com/wp-content/uploads/2023/08/LOGO-SPECTRUM-BLANCO.svg" alt="Imagen 1" />
                    <div className="parrafo-tarjeta1">
                        <p className="titulo-tarjeta1">UNA SALA DEDICADA AL</p>
                        <p className="titulo-tarjeta1">HEAVY METAL</p>
                    </div>
                    <div className="leyenda-tarjeta1">
                        <p className="parrafo1">Un santuario para los amantes del metal,</p>
                        <p className="parrafo1">Spectrum ofrece una experiencia acústica</p> 
                        <p className="parrafo1">incomparable. Sumérgete en el fervor del heavy</p>
                        <p className="parrafo1">metal en este espacio dotado con tecnología de</p> 
                        <p className="parrafo1">vanguardia, garantizando conciertos intensos e</p>
                        <p className="parrafo1">inolvidables.</p>
                    </div>

                </div>
                <div className="contenedor2">
                    <img className="imagen-logo2" src="https://www.salaspectrum.com/wp-content/uploads/2023/09/Discordia-1024x676.png"></img>
                    <div className="parrafo-tarjeta2">
                        <p className="parrafo2"><h6>JUVENTUD Y REBELDIA</h6></p>
                    </div>
                    <div className="leyenda-tarjeta2">
                        <p className="parrafo2">Ebullitiva y energética, Discordia es sinónimo de</p>
                        <p className="parrafo2">juventud y rebeldía. Este espacio se destaca por</p>
                        <p className="parrafo2">su ambiente vibrante, donde cada nota reverbera</p>
                        <p className="parrafo2">con fuerza, creando una experiencia de concierto</p>
                        <p className="parrafo2">que evoca la esencia pura.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default TarjetasSalas;