import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const [name, setName] = useState("")

  useEffect(() => {
    setInterval(() => {
      setName("Test")
    }, 3000)
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi there, {name}</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      {/* <button onClick={() => setName("Test")}>Set</button> */}
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
      <br />
      <Link to="/about/">Go to about</Link>
    </Layout>
  )
}

export default IndexPage
