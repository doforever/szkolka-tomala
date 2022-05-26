import React, { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";

//data
const headline = 'Tu będzie jakiś tekst nagłówka',
  copy = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis maximus lorem, id malesuada massa gravida et. Suspendisse congue, nisl vitae bibendum molestie, leo ligula condimentum magna, vitae blandit libero dui nec felis. Pellentesque nec dictum sapien, vel mattis quam. Fusce in condimentum ligula.',
  src = "../images/20210812_0095.jpg",
  alt = "Szkółka Tomala logo";

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
      <StaticImage className="h-[50vh] lg:h-[60vh]" src={src} alt={alt} objectFit="cover" />
      <div className={"prose max-w-none lg:w-1/2 xl:w-1/3 lg:absolute lg:bottom-[5vw] lg:left-[5vw] p-8 bg-white rounded transition-all duration-1000 lg:mt-24" + (entered ? " translate-y-0" : " lg:translate-y-[150%]")}>
        <h2>{headline}</h2>
        <p>{copy}</p>
      </div>
    </section>
  )
}

export default Banner;