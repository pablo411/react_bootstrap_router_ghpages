import React from "react";
import Button from 'react-bootstrap/Button';
 
function MasInformacion() {
    return(
        <div className="contenedor-mas-informacion">
            <div className="titulo-mas-informacion">
                <p className="parrafo1-informacion">¡DEJAD QUE LA MUSICA</p>
                <p className="parrafo1-informacion">OS UNA A NOSOTROS!</p>
            </div>
            <div className="titulo-mas-informacion">
                <p className="parrafo2-informacion">Podéis encontrar la Sala Spectrum en Instagram,</p>
                <p className="parrafo2-informacion">donde compartimos noticias, eventos y contenido</p>
                <p className="parrafo2-informacion">relacionado con la música que os apasiona.</p>
            </div>
            <div className="boton-contorno">
            <Button variant="outline-warning">MAS INFORMACION</Button>{' '}
            </div>

        </div>
    );
}

export default MasInformacion;  