import * as React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Map from '../components/Map';
import Contact from '../components/Contact';
import Gallery from '../components/Gallery';
import Offer from '../components/Offer';

// markup
const IndexPage = () => (
  <>
    <title>Szkółka Tomala</title>
    <Layout>
      <Banner />
      <Offer />
      <Gallery />
      <Contact />
      <Map />
    </Layout>
  </>

);

export default IndexPage;
