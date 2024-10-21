import React from "react";

function Descripcion() {
    return(
        <div className="contenedor-descricion">
            <div className="contenedor-descripcion2">
                <div className="imagen-sala">
                    <img className="nombre-sala" src="https://www.salaspectrum.com/wp-content/uploads/2023/08/LOGO-SPECTRUM.svg" alt="Imagen 1" />
                </div>
                <div className="descripciones-parrafos">
                    <p className="descripcion-parrafo">Somos un espacio cultural público reconocido por el ayuntamiento de Murcia.</p><br />
                    <p className="descripcion-parrafo">En colaboración con Murcia Live (asociación de salas de música en directo de la Región de</p>
                    <p className="descripcion-parrafo"> Murcia) y ACCES (Asociación Española de Salas de Conciertos).</p><br />
                    <p className="descripcion-parrafo44">¡NOS ENORGULLECE SER PARTE DE LA VIBRANTE ESCENA MUSICAL DE LA ZONA!</p>
                </div>
            </div>
            <div className="foto-sala">
                <img className="imagen-sala" src="https://img.freepik.com/fotos-premium/bateria-escenario-rojo-punto-luz-brillante_693425-5325.jpg" alt="Imagen 1" />
            </div>

        </div>
    );
}

export default Descripcion;