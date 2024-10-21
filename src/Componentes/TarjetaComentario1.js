import React from "react";

function TarjetaComentario1 () {
    return(
        <div className="comentario1">
            <div className="imagen-comentario">
                <img className="foto-comentario" src="https://lh3.googleusercontent.com/a-/ALV-UjUO94XiUowp-LLYrKoOC0I3v-4KGywz_LquiIC50EhC8U6bBQ5JCA=s120-c-rp-mo-ba4-br100" />
            </div>
            <div>
            <h6 className="nombre">Yesi Ruiz</h6>
            </div>
            <div>
                <p className="fecha-comentario">2024-02-27</p>
            </div>
            <div className="estrellas">
                <span className="estrella">⭐️</span>
                <span className="estrella">⭐️</span>
                <span className="estrella">⭐️</span>
                <span className="estrella">⭐️</span>
                <span className="estrella">⭐️</span>
            </div>
            <div className="comentario-tarjetas">
                <p className="comentario-tarjeta">Una fiesta para repetir...la del 11 de</p>
                <p className="comentario-tarjeta">febrero</p>
                <p className="comentario-tarjeta">Larga vida a la gresca y el jaleo 🙌🏼🔥🙌🏼🔥</p>
            </div>
        </div>
    );
}

export default TarjetaComentario1;