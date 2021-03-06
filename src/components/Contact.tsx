import React from 'react';

//data
const address =
    'Gospodarstwo Szkółkarskie Jolanta\u00A0i\u00A0Kazimierz\u00A0Tomala \n Buchałowice 64 \n 24 - 150 Nałęczów',
  email = 'tomala.kazik@gmail.com',
  hours = 'Pn-Pt: 7:00 - 17:00';

// markup
const Contact = () => (
  <section className="flex flex-col md:flex-row gap-4 bg-green-800/5 lg:gap-8 p-[5vw] md:py-6 justify-between">
    <div className="flex-1 max-w-md">
      <h3 className="text-xl font-semibold mb-1">Kontakt</h3>
      <address className="not-italic">
        <span>Email: </span>
        <a href={`mailto: ${email}`}>{email}</a>
      </address>
    </div>
    <div className="flex-1 max-w-md">
      <h3 className="text-xl font-semibold mb-1">Adres</h3>
      <address className="not-italic whitespace-pre-line">{address}</address>
    </div>
    <div className="flex-1 max-w-md">
      <h3 className="text-xl font-semibold mb-1">Godziny otwarcia</h3>
      <p>{hours}</p>
    </div>
  </section>
);

export default Contact;
