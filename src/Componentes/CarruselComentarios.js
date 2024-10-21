import Carousel from 'react-bootstrap/Carousel';
import TarjetaComentario1 from './TarjetaComentario1';
import TarjetaComentario2 from './TarjetaComentario2';
import TarjetaComentario3 from './TarjetaComentario3';
import TarjetaComentario4 from './TarjetaComentario4';

function CustomCarousel() {
    return (
        <Carousel className='carrusel'>
            
            <Carousel.Item className='bloque1'>
                <div className='contenedor-tarjetas'>
                    < TarjetaComentario1 />
                    < TarjetaComentario2 />
                    < TarjetaComentario3 />
                </div>
            </Carousel.Item>
            <Carousel.Item className='bloque2'>
                <div  className='contenedor-tarjetas2'>
                    < TarjetaComentario2 />
                    < TarjetaComentario3 />
                    < TarjetaComentario4 />
                </div>
            </Carousel.Item>
            
        </Carousel>
    );
}

export default CustomCarousel;