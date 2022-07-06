import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// markup
const Header = () => {
  return (
    <header className="lg:sticky w-full top-0 z-10 bg-white/80 shadow">
      <div className="py-2 px-[5vw] flex items-end gap-4 flex-wrap">
        <StaticImage src="../images/tomala_logo.png" alt="Szkółka Tomala logo" height={80} />
        <h1 className="text-2xl font-semibold">Gospodarstwo Szkółkarskie Jolanta i Kazimierz Tomala</h1>
        <a
          target="_blank" 
          href="oferta-jesien-2016.pdf"
          className="hidden bg-green-800 hover:bg-green-700 transition-all rounded text-white p-2 px-4 font-semibold uppercase no-underline lg:inline-block mr-0 ml-auto self-center">
          ZOBACZ OFERTĘ
        </a>
      </div>
    </header>
  );
};

export default Header;
