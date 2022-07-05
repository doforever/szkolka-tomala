import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

//data

// markup
type SlideProps = {
  image: {node: { childImageSharp: any; base: string}},
};

const Slide = ({ image }: SlideProps): JSX.Element => (
  <div className="relative">
    <GatsbyImage
      image={image.node.childImageSharp.gatsbyImageData}
      alt={image.node.base.split(".")[0]}
      className="w-[80vw]	md:w-auto overflow-hidden"
    />
    <h3 className="absolute bottom-0 capitalize text-center w-full p-2 bg-white/50 gallery__label">
      {image.node.base.split(".")[0].replaceAll('_', ' ')}
    </h3>
  </div>
);

export default Slide;