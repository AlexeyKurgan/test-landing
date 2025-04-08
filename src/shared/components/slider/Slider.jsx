
import 'swiper/css';
import './Slider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const Slider = ({ images }) => {
    return (
        <Swiper
            slidesPerView="auto"
            centeredSlides={true}
            spaceBetween={8} 
            grabCursor={true}
            initialSlide={Math.floor(images.length / 2)}
            loop={true}
            autoplay={{
              delay: 1500,
            }}
            modules={[Autoplay]}
            className="slider"
        >
            {images.map((image, index) => (
                <SwiperSlide key={index} className="slider-item">
                    <img src={image} alt={`Slide ${index + 1}`} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;