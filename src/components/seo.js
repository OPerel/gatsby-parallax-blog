import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ pageTitle }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const title = pageTitle ? pageTitle : site.siteMetadata.title;
  const metaDescription = site.siteMetadata.description

  return (
    <Helmet
      title={title}
      titleTemplate={pageTitle ? `${site.siteMetadata.title} | %s` : ''}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat()}
    >
      <link href="https://fonts.googleapis.com/css?family=Muli:300,600&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous" />
    </Helmet>
  )
}

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default SEO;
