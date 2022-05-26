import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

// markup
const Banner = () => {
  return (
    <section>
      <StaticImage className="h-screen" src="../images/20210812_0095.jpg" alt="Szkółka Tomala logo" objectFit="cover"/>
    </section>
  )
}

export default Banner;
