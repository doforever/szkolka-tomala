import React, { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";

//data
const headline = 'Rodzinna szkółka drzew ozdobnych w Buchałowicach na Lubelszczyźnie',
  copy = 'Zapraszamy do zapoznania się z naszą ofertą',
  src = '../images/20210812_0095.jpg',
  alt = 'Szkółka Tomala logo',
  cta = 'Zobacz ofertę';

// markup
const Banner = () => {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setEntered(true);
    }, 2000);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <StaticImage className="h-[35vh] lg:h-[60vh]" src={src} alt={alt} objectFit="cover" />
      <div className={"prose max-w-none lg:w-1/2 xl:w-1/3 lg:absolute lg:bottom-[5vw] lg:left-[5vw] py-4 px-[5vw] lg:p-8 bg-white transition-all ease-out duration-1000 lg:mt-24" + (entered ? " translate-y-0" : " lg:translate-y-[150%]")}>
        <h2>{headline}</h2>
        <p>{copy}</p>
        <a href="oferta-jesien-2016.pdf" className="bg-green-800 hover:bg-green-700 transition-all rounded text-white p-2 px-4 font-semibold uppercase no-underline inline-block">{cta}</a>
      </div>
    </section>
  )
}

export default Banner;