import React from "react";

function TarjetasConciertos () {
    return(
    <div className="principal-tarjetas">
        <div className="container2">
                <div className="container-border">
                    <div className="fecha">
                        <p className="dia">18</p>
                        <p className="mes">OCTUBRE</p>
                        <p className="año">2024</p>
                    </div>
                    <div className="texto-tarjeta1">
                        <p className="texto-titulo">NEBULA Y VALOA</p>
                            <p className="texto1">¡Nebula vuelve! La banda murciana de rock alternativo que, tras un par de</p>
                            <p className="texto1"> años de trabajo, sacó a la luz en enero de 2020 su primer disco homónimo</p>
                            <p className="texto1"> el cual</p>
                            <p className="compra">COMPRA TU ENTRADA</p>
                    </div>
                    <div>
                        <img className="imagen" src="https://www.salaspectrum.com/wp-content/uploads/2024/10/nebula.png"></img>
                    </div>
                </div>
                <div className="container-border">
                    <div className="fecha">
                        <p className="dia">19</p>
                        <p className="mes">OCTUBRE</p>
                        <p className="año">2024</p>
                    </div>
                    <div className="texto-tarjeta2">
                        <p className="texto-titulo">ARS NOVA Y ECLYPSE</p>
                            <p className="texto1">¡Sábado 19 de octubre de 2024 apertura a las 21:00h! ¡Os presentamos a Ars</p>
                            <p className="texto1"> Nova y Eclypse! PRECIOS: Anticipada: 12€ o Taquilla: 15€ ¡COMPRA TUS</p>
                            <p className="texto1"> ENTRADAS AQUÍ!</p>
                            <p className="compra">COMPRA TU ENTRADA</p>
                    </div>
                    <div>
                        <img className="imagen" src="https://www.salaspectrum.com/wp-content/uploads/2024/10/Ars-nova-1.jpg"></img>
                    </div>
                </div>
                <div className="evento1">
                    <button class="eventos">VER TODOS LOS EVENTOS</button>
                </div>
        </div>
    </div>
    );
}

export default TarjetasConciertos;