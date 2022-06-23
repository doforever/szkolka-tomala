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
    <section className="grid gap-4 lg:gap-8 py-4 px-[5vw] bg-green-800/5">
      {images.map((image: { node: { childImageSharp: { gatsbyImageData: any; }; base: string; }; }) => (
        <GatsbyImage
          key={image.node.base}
          image={image.node.childImageSharp.gatsbyImageData}
          alt={image.node.base.split(".")[0]}
        />
      ))}
    </section>
  );
};

export default Gallery;