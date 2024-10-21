import React from "react";

function TarjetaComentario2 () {
    return(
        <div className="comentario2">
            <div className="imagen-comentario">
                <img className="foto-comentario" src="https://lh3.googleusercontent.com/a/ACg8ocI1qb4qNxkPIdsOiQb3pYww9B7kFKE7IN3eCBXBOhLpQzD76F8=s120-c-rp-mo-ba2-br100" />
            </div>
            <div>
            <h6 className="nombre">Viven T</h6>
            </div>
            <div>
                <p className="fecha-comentario">2024-02-13</p>
            </div>
            <div className="estrellas">
                <span className="estrella">⭐️</span>
                <span className="estrella">⭐️</span>
                <span className="estrella">⭐️</span>
                <span className="estrella">⭐️</span>
                <span className="estrella">⭐️</span>
            </div>
            <div className="comentario-tarjetas">
                <p className="comentario-tarjeta">Sala amplia, climatizada. Barra para</p>
                <p className="comentario-tarjeta">Sala amplia, climatizada. Barra para</p>
                <p className="comentario-tarjeta">y terraza exterior.</p>
            </div>
        </div>
    );
}

export default TarjetaComentario2;