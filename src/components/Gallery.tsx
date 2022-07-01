import React, {useState} from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Lightbox from "./Lightbox";
import Slider from "react-slick";

//data

// markup
const Gallery = () => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number|null>(null);

  // const handleOpen =(i: number) => {
  //   setShowLightbox(true)
  //   setSelectedImage(i)
  // }
  // const handleClose = () => {
  //   setShowLightbox(false)
  //   setSelectedImage(null)
  // }
  // const handlePrevRequest = (i, length) => e => {
  //   setSelectedImage((i - 1 + length) % length)
  // }
  // const handleNextRequest = (i, length) => e => {
  //   setSelectedImage((i + 1) % length)
  // }

  const allImagesQuery = graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "gallery" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              gatsbyImageData (
                placeholder: BLURRED
                width: 600
                height: 800
                transformOptions: {fit: COVER}
              )
            }
          }
        }
      }
    }
  `;

  const {
    allFile: { edges: images },
  } = useStaticQuery(allImagesQuery);

  console.log('images', images);

  return (
    <section className="grid grid-flow-col overflow-x-auto md:grid-flow-row gap-4 px-[5vw] py-8 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image: { node: { childImageSharp: { gatsbyImageData: any; }; base: string; }; }) => (
          <GatsbyImage
            key={image.node.base}
            image={image.node.childImageSharp.gatsbyImageData}
            alt={image.node.base.split(".")[0]}
            className="w-[80vw]	md:w-auto md:hover:scale-[1.02] transition duration-500 ease-out overflow-hidden"
          />
        ))}
     
      {showLightbox && selectedImage !== null && (
        <Lightbox
          // images={images}
          // handleClose={handleClose}
          // handleNextRequest={handleNextRequest}
          // handlePrevRequest={handlePrevRequest}
          // selectedImage={selectedImage}
        />
      )}
    </section>
  );
};

export default Gallery;

//TO DO https://codesandbox.io/s/n7r3rxl1jl?file=/src/components/gallery.js