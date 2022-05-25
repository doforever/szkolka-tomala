import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

// markup
const Header = () => {
  return (
    <header className="lg:sticky top-0 z-10 bg-white/80 shadow">
      <div className="mx-auto max-w-screen-2xl py-2 px-4 flex items-end gap-4">
        <StaticImage src="../../images/tomala_logo.png" alt="Szkółka Tomala logo" height={80}/>
        <h1 className="text-xl">Gospodarstwo Szkółkarskie Jolanta i Kazimierz Tomala</h1>
      </div>
    </header>
  )
}

export default Header;
