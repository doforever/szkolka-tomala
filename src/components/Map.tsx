import * as React from 'react';

const Map = () => (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39856.86325414877!2d22.13859745406751!3d51.365304819669774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47226477065ec879%3A0x45584a0a8a2bd8a!2sGospodarstwo%20szk%C3%B3%C5%82karskie%20Jolanta%20i%20Kazimierz%20Tomala.%20Szk%C3%B3%C5%82ka%20ro%C5%9Blin!5e0!3m2!1spl!2spl!4v1653595832888!5m2!1spl!2spl"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade">
  </iframe>
);

export default Map;