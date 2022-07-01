import React, {useState, useEffect} from "react";
import Slider from "react-slick";
import { GatsbyImage } from "gatsby-plugin-image";

//data


// markup
type LightboxProps = {
  closeLightbox: () => void,
  images: [],
  initialSlide: number,
};

const sliderSettings = {
  dots: false,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const Lightbox = ({closeLightbox, images, initialSlide}: LightboxProps) => {
  console.log('open lightbox');

  const [entered, setEntered] = useState(false);
  const [sliderEntered, setSliderEntered] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setEntered(true);
    }, 0);
    setTimeout(() => {
      setSliderEntered(true);
    }, 300);
  }, []);

  const handleBackgroundClick = ({target}: Event) => {
    if (target?.localName === 'div') {
      closeLightbox();
    }
  }; 

  return (
    <div onClick={handleBackgroundClick} className={`w-screen h-screen fixed top-0 left-0 z-10 transition duration-300 flex justify-center py-8 ${entered ? "bg-black/[0.85]" : "bg-transparent" }`}>
      {sliderEntered && (<Slider {...sliderSettings} initialSlide={initialSlide} className="aspect-[3/4]">
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