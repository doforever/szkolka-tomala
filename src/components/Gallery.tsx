import React, {useState} from "react";
import { useStaticQuery, graphql } from "gatsby";
import Lightbox from "./Lightbox";
import Slide from "./Slide";

//data

// markup
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number|null>(null);

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
                width: 1200
                height: 1600
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

  // console.log('images', images);

  return (
    <section className="gallery grid grid-flow-col overflow-x-auto md:grid-flow-row gap-4 px-[5vw] py-8 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image: { node: { childImageSharp: { gatsbyImageData: any; }; base: string; }; }, i: number ) => (
          <a 
            key={i}
            tabIndex={0}
            onClick={() => {setSelectedImage(i)}}
            onKeyDown={(e) => { if (e.key === "Enter") {setSelectedImage(i)}}}
            className="pointer-events-none md:pointer-events-auto md:hover:scale-[1.02] md:focus:scale-[1.02] transition duration-500 ease-out relative"
          >
            <Slide image={image} />
          </a>
        ))}
     
      { selectedImage !== null && (
        <Lightbox
          closeLightbox = {() => setSelectedImage(null)}
          images={images}
          initialSlide={selectedImage}
        >
          {images.map((image: { node: { childImageSharp: { gatsbyImageData: any; }; base: string; }; }, i: number) => (
            <Slide key={i} image={image} />
          ))}
        </Lightbox>
      )}
    </section>
  );
};

export default Gallery;

//TO DO https://codesandbox.io/s/n7r3rxl1jl?file=/src/components/gallery.js