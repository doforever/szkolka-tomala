import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

//data

// markup
const Gallery = () => {
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
              gatsbyImageData
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
    <section className="grid grid-flow-col overflow-x-auto md:grid-flow-row gap-4 lg:gap-8 p-[5vw] bg-green-800/5 md:grid-cols-2 lg:grid-cols-3">
      {images.map((image: { node: { childImageSharp: { gatsbyImageData: any; }; base: string; }; }) => (
        <GatsbyImage
          key={image.node.base}
          image={image.node.childImageSharp.gatsbyImageData}
          alt={image.node.base.split(".")[0]}
          className="w-[80vw]	md:w-auto"
        />
      ))}
    </section>
  );
};

export default Gallery;