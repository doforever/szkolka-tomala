import React from "react";

//data
const address = 'Gospodarstwo Szkółkarskie Jolanta i Kazimierz Tomala \n Buchałowice 64 24 - 150 \n Nałęczów woj.Lubelskie',
  email = 'tomala.kazik@gmail.com',
  visit = 'Zapraszam do odwiedzenia naszej szkółki od poniedziałku do soboty.';

// markup
const Contact = () => (
  <section className="flex flex-col md:flex-row gap-4 lg:gap-8 p-[5vw] md:py-4 justify-between">
    <div className="prose flex-1 max-w-md">
      <h3>Kontakt</h3>
      <address className="not-italic">
        <span>Email: </span>
        <a href={`mailto: ${email}`}>{email}</a>
      </address>
    </div>
    <div className="prose flex-1 max-w-md">
      <h3>Adres</h3>
      <address className="not-italic whitespace-pre-line">{address}</address>
    </div>
    <div className="prose flex-1 max-w-md">
      <h3>Odwiedziny</h3>
      <p>{visit}</p>
    </div>
  </section>
);

export default Contact;