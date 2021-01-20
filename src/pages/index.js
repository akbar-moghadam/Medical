import React from "react"
import Baner from "../components/Baner"
import Exprenced from "../components/Exprenced"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Satisfied  from "../components/Satisfied"
import SEO from "../components/seo"
import Services from "../components/Services"
import UnderHeader  from "../components/UnderHeader"
import Why from '../components/Why'
import Recent from '../components/Recent'
import Register from '../components/Register'
import Happy from "../components/Happy"
import Instagram from "../components/Instagram"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <UnderHeader />
      <Baner />
      <Hero />
      <Services />
      <Exprenced />
      <Satisfied/>
      <Why/>
      <Recent />
      <Register />
      <Happy />
      <Instagram />
      
  </Layout>
)

export default IndexPage
