import * as React from "react"
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Map from "../components/Map";
import Contact from "../components/Contact";

// markup
const IndexPage = () => (
  <>
    <title>Szkółka Tomala</title>
    <Layout>
      <Banner />
      <Contact />
      <Map />
    </Layout>
  </>

)

export default IndexPage
