import React, {useState, useEffect, MouseEventHandler} from "react";
import Slider from "react-slick";
import { GatsbyImage } from "gatsby-plugin-image";

//data


// markup
type LightboxProps = {
  closeLightbox: () => void,
  images: [],
  initialSlide: number,
};

const Lightbox = ({closeLightbox, images, initialSlide}: LightboxProps) => {

  const [entered, setEntered] = useState(false);
  const [sliderEntered, setSliderEntered] = useState(false);
  const [current, setCurrent] = useState(initialSlide);

  useEffect(() => {
    setTimeout(() => {
      setEntered(true);
    }, 0);
    setTimeout(() => {
      setSliderEntered(true);
    }, 300);
  }, []);

  const handleBackgroundClick: MouseEventHandler<HTMLDivElement> = ({target}) => {
    if (target?.localName === 'div') {
      closeLightbox();
    }
  }; 

  const sliderSettings = {
    dots: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    afterChange: (current: number) => setCurrent(current),
  };

  const sliderClass = current === 0 ? 'first' : current === images.length - 1 ? 'last' : '';

  return (
    <div onClick={handleBackgroundClick} className={`w-full h-screen fixed top-0 left-0 z-10 transition duration-300 flex justify-center items-center ${entered ? "bg-black/[0.85]" : "bg-transparent" }`}>
      {sliderEntered && (<Slider {...sliderSettings} initialSlide={initialSlide} className={`aspect-[3/4] max-w-[80%] max-h-[95%] ${sliderClass}`}>
        {images.map((image: { node: { childImageSharp: { gatsbyImageData: any; }; base: string; }; }, i: number) => (
          <GatsbyImage
            key={i}
            image={image.node.childImageSharp.gatsbyImageData}
            alt={image.node.base.split(".")[0]}
          />
        ))}
      </Slider>)}
    </div>
  );
}

export default Lightbox;