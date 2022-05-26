import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

// markup
const Header = () => {
  return (
    <header className="lg:sticky w-screen top-0 z-10 bg-white/80 shadow">
      <div className="py-2 px-[5vw] flex items-end gap-4 flex-wrap">
        <StaticImage src="../../images/tomala_logo.png" alt="Szkółka Tomala logo" height={80} />
        <h1 className="text-2xl font-semibold">Gospodarstwo Szkółkarskie Jolanta i Kazimierz Tomala</h1>
      </div>
    </header>
  )
}

export default Header;
