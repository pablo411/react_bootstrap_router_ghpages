import React from "react";
import TituloParrafo from "./TituloParrafos";
import TarjetasConciertos from "./TarjetasConciertos";
import Sala from "./Sala";
import CustomCarousel from "./CustomCarousel";
import TarjetasSalas from "./TarjetasSalas";
import Descripcion from "./Descripcion";
import Comentarios from "./Comentarios";
import CarruselComentarios from "./CarruselComentarios";
import MasInformacion from "./MasInformacion";




function titulo() {
    return (
        <div className="container" >
            <TituloParrafo />
            <TarjetasConciertos />
            <div className="carrusel">
            <Sala />
            <CustomCarousel />
            </div><br /><br />
            <TarjetasSalas />
            <Descripcion />
            <Comentarios />
            <CarruselComentarios />
            <MasInformacion />
            
            
            
            
        </div>
    )
}

export default titulo;