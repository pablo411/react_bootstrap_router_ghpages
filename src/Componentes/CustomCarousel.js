import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';

function CustomCarousel() {
    return (
        <Carousel>
            
            <Carousel.Item className='bloque1'>
                <Image className='imagen-carrusel' src='https://www.salaspectrum.com/wp-content/uploads/2023/10/380661076_1002534831096016_7683699503729645874_n.png' />
                <Image className='imagen-carrusel' src='https://www.salaspectrum.com/wp-content/uploads/2023/10/375137615_994361668579999_7483809535866737499_n.png' />
                
            </Carousel.Item>
            <Carousel.Item className='bloque2'>
                <Image className='imagen-carrusel' src='https://www.salaspectrum.com/wp-content/uploads/2023/10/380873256_1002534827762683_2356579958872126785_n.png' />
                <Image className='imagen-carrusel' src='https://www.salaspectrum.com/wp-content/uploads/2023/10/380694683_1002534817762684_3547847254037080111_n.png' />
                
            </Carousel.Item>
            <Carousel.Item className='bloque3'>
                <Image className='imagen-carrusel' src='https://www.salaspectrum.com/wp-content/uploads/2023/10/378822034_997992008216965_7582380744367387253_n.png' />
                <Image className='imagen-carrusel' src='https://www.salaspectrum.com/wp-content/uploads/2023/10/380886719_1002534824429350_5036653470660078112_n.png' />
            </Carousel.Item>
        </Carousel>
    );
}

export default CustomCarousel;