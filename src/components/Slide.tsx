import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

//data

// markup
type SlideProps = {
  image: {node: { childImageSharp: any; base: string}},
};

const Slide = ({ image }: SlideProps): JSX.Element => {
  
  const getTitle = (fileName: string) => fileName.split(".")[0].replaceAll('_', ' ');

  return (
    <div className="relative">
      <GatsbyImage
        image={image.node.childImageSharp.gatsbyImageData}
        alt={getTitle(image.node.base)}
        className="w-[80vw]	md:w-auto overflow-hidden"
      />
      <h3 className="absolute bottom-0 capitalize text-center w-full p-2 bg-white/50 gallery__label">
        {getTitle(image.node.base)}
      </h3>
    </div>
  );
}

export default Slide;