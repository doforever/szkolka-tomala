import React from "react";

//data
const headline = 'W sprzedaży m.in.',
  varieties = [
    { pl: 'Klon', lat: "Acer campestre 'Elsrijk'" }, 
    { pl: 'Klon', lat: "Acer campestre 'Nanum'"},
    { pl: 'Klon', lat: "Acer campestre 'Elsrijk'" },
    { pl: 'Klon', lat: "Acer campestre 'Nanum'" },
    { pl: 'Klon', lat: "Acer campestre 'Elsrijk'" },
    { pl: 'Klon', lat: "Acer campestre 'Nanum'" },
    { pl: 'Klon', lat: "Acer campestre 'Elsrijk'" },
    { pl: 'Klon', lat: "Acer campestre 'Nanum'" },
    { pl: 'Klon', lat: "Acer campestre 'Elsrijk'" },
    { pl: 'Klon', lat: "Acer campestre 'Nanum'" },
    { pl: 'Klon', lat: "Acer campestre 'Elsrijk'" },
    { pl: 'Klon', lat: "Acer campestre 'Nanum'" },
    { pl: 'Klon', lat: "Acer campestre 'Elsrijk'" },
    { pl: 'Klon', lat: "Acer campestre 'Nanum'" },
    { pl: 'Klon', lat: "Acer campestre 'Elsrijk'" },
    { pl: 'Klon', lat: "Acer campestre 'Nanum'" },
    { pl: 'Klon', lat: "Acer campestre 'Elsrijk'" },
    { pl: 'Klon', lat: "Acer campestre 'Nanum'" },
    { pl: 'Klon', lat: "Acer campestre 'Elsrijk'" },
    { pl: 'Klon', lat: "Acer campestre 'Nanum'" },
  ];

// markup
const Offer = () => {
  return (
    <section className="p-[5vw] bg-green-800/5">
      <h2 className="text-xl font-semibold mb-4">{headline}</h2>
      <ul className="grid gap-x-4 lg:gap-x-8 offer__columns"> 
        {varieties.map(({pl, lat}, index) => (<li key={index}>{pl} <i className="pl-1">{lat}</i></li>))}
      </ul>
    </section>
  );
};

export default Offer;
