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

  return (
    <div onClick={closeLightbox} className={`w-screen h-screen fixed top-0 left-0 z-10 transition duration-300 ${entered ? "bg-black" : "bg-transparent flex" }`}>
      {sliderEntered && (<Slider {...sliderSettings} initialSlide={initialSlide}>
        {images.map((image: { node: { childImageSharp: { gatsbyImageData: any; }; base: string; }; }, i: number) => (
          <GatsbyImage
            key={i}
            image={image.node.childImageSharp.gatsbyImageData}
            alt={image.node.base.split(".")[0]}
            className="w-[80vw]	md:w-auto overflow-hidden"
          />
        ))}
      </Slider>)}
    </div>
  );
}

export default Lightbox;