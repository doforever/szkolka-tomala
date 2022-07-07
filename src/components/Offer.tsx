import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

//data
const headline = 'W sprzedaży m.in.';

const offerQuery = graphql`
  query AllOffer {
    allOfferCsv {
      nodes {
        pl
        lac
      }
    }
  }
`;

// markup
const Offer = () => {
  const {
    allOfferCsv: { nodes: trees },
  } = useStaticQuery(offerQuery);

  // console.log('trees', trees);

  return (
    <section className="p-[5vw] bg-green-800/5">
      <h2 className="text-xl font-semibold mb-4">{headline}</h2>
      <ul className="grid gap-x-4 lg:gap-x-8 offer__columns">
        {trees.map(
          ({ pl, lac }: { pl: string; lac: string }, index: number) => (
            <li className="hidden lg:block" key={index}>
              {pl} <i className="pl-1 text-black/60 text-sm">{lac}</i>
            </li>
          )
        )}
      </ul>
    </section>
  );
};

export default Offer;
