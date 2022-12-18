import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import Slider from 'react-slick';

//data
const headline =
    'Rodzinna szkółka drzew ozdobnych w Buchałowicach na Lubelszczyźnie',
  copy = 'Zapraszamy do zapoznania się z naszą ofertą',
  cta = 'Zobacz ofertę';

const allImagesQuery = graphql`
  query {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "slider" }
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

// markup
const Banner = () => {
  const {
    allFile: { edges: images },
  } = useStaticQuery(allImagesQuery);

  // console.log('images', images);

  const [entered, setEntered] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setEntered(true);
    }, 2000);
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 8000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          dots: true,
          autoplay: false,
          speed: 800,
        },
      },
      {
        breakpoint: 639,
        settings: {
          dots: true,
          autoplay: false,
          speed: 500,
        },
      },
    ],
  };

  return (
    <section className="relative overflow-hidden banner">
      <Slider {...sliderSettings}>
        {images.map(
          (image: {
            node: {
              childImageSharp: { gatsbyImageData: IGatsbyImageData };
              base: string;
            };
          }) => (
            <GatsbyImage
              key={image.node.base}
              image={image.node.childImageSharp.gatsbyImageData}
              alt={image.node.base.split('.')[0]}
              className="aspect-[3/2] md:aspect-[2/1] lg:h-[75vh] object-cover"
            />
          )
        )}
      </Slider>
      <div
        className={
          'prose max-w-none lg:w-1/2 xl:w-1/3 lg:absolute lg:bottom-[5vw] lg:left-[5vw] p-[5vw] lg:p-8 bg-white transition-all ease-out duration-1000 lg:mt-24' +
          (entered ? ' translate-y-0' : ' lg:translate-y-[150%]')
        }
      >
        <h2>{headline}</h2>
        <p>{copy}</p>
      </div>
    </section>
  );
};

export default Banner;
